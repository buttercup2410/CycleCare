import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Platform,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StackNavigationProp } from '@react-navigation/stack';

const { width } = Dimensions.get('window');

type RootStackParamList = {
  Index: undefined;
  Login: undefined;
  Signup: undefined;
  AboutUs: undefined;
  ContactUs: undefined;
  Terms: undefined;
};

type NavigationProps = StackNavigationProp<RootStackParamList>;

interface HeaderProps {
  navigation: NavigationProps;
}

interface FooterProps {
  navigation: NavigationProps;
}

const features = [
  {
    id: '1',
    title: 'Personalized Care',
    description: 'Tailored product recommendations based on your unique cycle patterns',
    icon: '🎯',
  },
  {
    id: '2',
    title: 'Emergency Delivery',
    description: 'One-hour delivery service when you need it most',
    icon: '🚚',
  },
  {
    id: '3',
    title: 'Eco-Friendly Products',
    description: 'Sustainable and environmentally conscious menstrual care products',
    icon: '🌱',
  },
  {
    id: '4',
    title: 'Flexible Subscriptions',
    description: 'Customize your delivery schedule and products',
    icon: '📦',
  },
];

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => (
  <TouchableOpacity style={styles.featureCard}>
    <Text style={styles.featureIcon}>{icon}</Text>
    <Text style={styles.featureTitle}>{title}</Text>
    <Text style={styles.featureDescription}>{description}</Text>
  </TouchableOpacity>
);

const Header: React.FC<HeaderProps> = ({ navigation }) => (
  <View style={styles.header}>
    <Text style={styles.headerTitle}>CycleCare</Text>
    <View style={styles.headerButtons}>
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.headerButton}>
        <Icon name="login" size={24} color="#FF4081" />
        <Text style={styles.headerButtonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Signup')} style={styles.headerButton}>
        <Icon name="person-add" size={24} color="#FF4081" />
        <Text style={styles.headerButtonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const Footer: React.FC<FooterProps> = ({ navigation }) => (
  <View style={styles.footer}>
    <TouchableOpacity onPress={() => navigation.navigate('AboutUs')} style={styles.footerItem}>
      <Text style={styles.footerText}>About Us</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('ContactUs')} style={styles.footerItem}>
      <Text style={styles.footerText}>Contact Us</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Terms')} style={styles.footerItem}>
      <Text style={styles.footerText}>Terms & Conditions</Text>
    </TouchableOpacity>
  </View>
);

const IndexScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header navigation={navigation} />
      <ScrollView style={styles.mainContainer}>
        <View style={styles.heroSection}>
          <Text style={styles.subHeader}>Your Personalized Menstrual Care Journey</Text>
        </View>

        <View style={styles.contentSection}>
          <Text style={styles.sectionTitle}>Why Choose CycleCare?</Text>
          <Text style={styles.description}>
            CycleCare is a revolutionary subscription and delivery service designed to make menstrual care
            convenient, sustainable, and stress-free. By tailoring product recommendations based on users'
            unique cycle patterns, we ensure that every customer receives the right products at the
            right time.
          </Text>

          <View style={styles.featureGrid}>
            {features.map((feature) => (
              <FeatureCard
                key={feature.id}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </View>

          <View style={styles.ctaSection}>
            <TouchableOpacity
              style={styles.primaryButton}
              onPress={() => navigation.navigate('Signup')}
            >
              <Text style={styles.buttonText}>Start Your Journey</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.secondaryButton}
              onPress={() => navigation.navigate('AboutUs')}
            >
              <Text style={styles.secondaryButtonText}>Learn More</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.sustainabilitySection}>
            <Text style={styles.sectionTitle}>Our Commitment</Text>
            <Text style={styles.description}>
              Choose from a wide range of eco-friendly products, enjoy exclusive discounts, and join a
              community that prioritizes your health and the planet. CycleCare - because your cycle
              shouldn't disrupt your life.
            </Text>
          </View>
        </View>
      </ScrollView>
      <Footer navigation={navigation} />
    </SafeAreaView>
  );
};

export default IndexScreen;

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  mainContainer: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: '#FF4081' },
  headerButtons: { flexDirection: 'row' },
  headerButton: { flexDirection: 'row', alignItems: 'center', marginLeft: 16 },
  headerButtonText: { marginLeft: 4, color: '#FF4081', fontSize: 16 },
  heroSection: {
    padding: 24,
    backgroundColor: '#FFF0F7',
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginTop: 16,
  },
  contentSection: { padding: 16 },
  subHeader: { fontSize: 18, color: '#666', textAlign: 'center', marginBottom: 20 },
  sectionTitle: { fontSize: 24, fontWeight: '600', marginVertical: 16, color: '#333' },
  description: { fontSize: 16, lineHeight: 24, color: '#666', marginBottom: 20, textAlign: 'left' },
  featureGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginVertical: 20 },
  featureCard: {
    width: (width - 48) / 2,
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    ...Platform.select({
      ios: { shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4 },
      android: { elevation: 3 },
    }),
  },
  featureIcon: { fontSize: 32, marginBottom: 8, textAlign: 'center' },
  featureTitle: { fontSize: 18, fontWeight: '600', marginBottom: 8, color: '#333', textAlign: 'center' },
  featureDescription: { fontSize: 14, color: '#666', lineHeight: 20, textAlign: 'center' },
  ctaSection: { marginVertical: 24, alignItems: 'center' },
  primaryButton: {
    backgroundColor: '#FF4081',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    marginBottom: 12,
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FF4081',
  },
  buttonText: { color: '#FFF', fontSize: 18, fontWeight: '600' },
  secondaryButtonText: { color: '#FF4081', fontSize: 18, fontWeight: '600' },
  sustainabilitySection: { marginTop: 24, padding: 16, backgroundColor: '#F5F5F5', borderRadius: 12, marginBottom: 80 },
  footer: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  footerItem: { alignItems: 'center' },
  footerText: { color: '#666', fontSize: 14 },
});
