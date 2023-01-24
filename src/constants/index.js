import { Dimensions } from 'react-native';
import COLORS from './colors';
import IMAGES from './images';
import STORE from './store';

export const scaleFontSize = (size) => {
  const { width, height } = Dimensions.get('window');
  const baseWidth = 375; // iPhone 6 size
  const baseHeight = 667; // iPhone 6 size

  const scaleWidth = width / baseWidth;
  const scaleHeight = height / baseHeight;
  const scale = Math.min(scaleWidth, scaleHeight);

  return Math.ceil(size * scale);
};

export const fontWeight = {
  bold: '700',
  demiBold: '600',
  medium: '500',
  regular: '400',
};

export const fontFamilies = {
  bold: 'Roboto-Bold',
  boldItalic: 'Roboto-BoldItalic',
  demiBold: 'Roboto-SemiBold',
  demiBoldItalic: 'Roboto-SemiBoldItalic',
  heavy: 'Roboto-Black',
  heavyItalic: 'Roboto-BlackItalic',
  italic: 'Roboto-Italic',
  medium: 'Roboto-Medium',
  mediumItalic: 'Roboto-MediumItalic',
  regular: 'Roboto-Regular',
  ultraLight: 'Roboto-ExtraLight',
  ultraLightItalic: 'Roboto-ExtraLightItalic',
};

const constants = { images: IMAGES, colors: COLORS };
export const colors = COLORS;
export const images = IMAGES;
export const store = STORE;
export default constants;

export const packageName = 'com.mymxgarage.com';
export const appId = 1234567890;

export const storeURL = {
  android: `https://play.google.com/store/apps/details?id=${packageName}`,
  ios: `https://apps.apple.com/us/app/olivier/id${appId}`,
};
