import { colors, fontFamilies, fontWeight, scaleFontSize } from '../constants';
import {
  Image,
  Pressable,
  Dimensions,
  StatusBar,
  Platform,
  Linking,
  Alert,
  PermissionsAndroid,
  StyleSheet,
} from 'react-native';
import { hasNotch } from 'react-native-device-info';
import locales from '../locales';
import images from '../constants/images';
import RegexEscape from 'regex-escape';

const iconSize = Dimensions.get('screen').width / 16;

export const styles = StyleSheet.create({
  iconContainer: {
    marginLeft: Platform.OS === 'ios' ? 16 : 6,
    justifyContent: 'center',
  },
  modelOptions: {
    backgroundColor: 'transparent',
  },
  invisibleStackHeaderOptions: {
    backgroundColor: 'transparent',
    opacity: 1,
  },
  tabBarLabel: {
    fontFamily: fontFamilies.regular,
    fontSize: scaleFontSize(12),
  },
  tabBar: {
    paddingTop: 8,
    ...(Platform.OS === 'ios'
      ? hasNotch()
        ? { height: 84 }
        : { height: 65, paddingBottom: 16 }
      : { height: 53, paddingBottom: 5 }),
  },
  tabBarIcon: {
    ...(Platform.OS === 'ios' && !hasNotch() ? { paddingBottom: 2 } : {}),
  },
  screensHeader: {
    backgroundColor: colors.white,
    elevation: 0,
    shadowOpacity: 0,
  },
  screensHeaderTitle: {
    fontSize: scaleFontSize(17),
    fontFamily: fontFamilies.bold,
    fontWeight: fontWeight.bold,
    color: '#0D1119',
    marginLeft: Platform.OS === 'ios' ? -2 : -10,
  },
  stackOptions: {
    backgroundColor: '#fcfeff',
    borderBottomWidth: 0,
    elevation: 0,
    shadowOpacity: 0,
  },
  privacyAgreementLink: {
    fontWeight: fontWeight.demiBold,
    fontFamily: fontFamilies.demiBold,
  },
  referralCodeInput: {
    backgroundColor: '#f9f9f9',
    borderWidth: 0,
  },
  marginTop8Bottom351: {
    marginTop: 8,
    marginBottom: 351,
  },
  marginTop16Bottom351: {
    marginTop: 16,
    marginBottom: 351,
  },
  noUnit: {
    borderColor: colors.border,
    borderBottomWidth: 1,
    paddingBottom: 16,
    marginHorizontal: 16,
  },
  marginRight24Top20: {
    marginRight: 24,
    marginTop: 20,
  },
  inputAccessoryView: {
    height: 64,
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  dafaultButton: {
    width: 'auto',
    height: 32,
    marginTop: 0,
    marginRight: 16,
  },
  image: {
    height: iconSize,
    width: iconSize,
  },
});

export const invisibleStackHeaderOptions = {
  headerShown: false,
  cardStyle: styles.invisibleStackHeaderOptions,
};

export const tabsOptions = ({ route, jwt }) => ({
  lazy: jwt ? false : true,
  tabBarActiveTintColor: colors.text2,
  tabBarInactiveTintColor: colors.text2,
  tabBarLabel: locales.t(`tabs.${route.name}`),
  tabBarLabelStyle: styles.tabBarLabel,
  tabBarStyle: styles.tabBar,
  tabBarIconStyle: styles.tabBarIcon,
  tabBarIcon: ({ focused }) => {
    return <Image style={styles.image} source={images[`${route.name}${focused}`]} />;
  },
});

export const stringToRegex = (input = '') => {
  try {
    return new RegExp(RegexEscape(input));
  } catch (e) {
    return null;
  }
};
