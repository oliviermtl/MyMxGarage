import { StyleSheet } from 'react-native';
import { colors, fontFamilies, fontWeight, scaleFontSize } from '../constants';

export const styles = StyleSheet.create({
  marginRight16: {
    marginRight: 16,
  },
  display: {
    display: 'none',
  },
  tabBarBadge: {
    fontSize: scaleFontSize(11),
    fontFamily: fontFamilies.demiBold,
    height: scaleFontSize(16),
    lineHeight: scaleFontSize(15),
    minWidth: scaleFontSize(16),
    borderRadius: scaleFontSize(8),
    top: scaleFontSize(-6),
  },
  requestDetails: {
    backgroundColor: colors.white,
    elevation: 0,
    shadowOpacity: 0,
  },
  bgColor: {
    backgroundColor: 'rgba(0,0,0,0.15)',
  },
  connectionLossBanner: {
    flex: 1,
    flexDirection: 'row',
    marginRight: 8,
    marginLeft: 8,
  },
  connectionLossMessage: {
    color: colors.text3,
    fontSize: scaleFontSize(13),
    lineHeight: scaleFontSize(18),
    fontFamily: fontFamilies.regular,
    fontWeight: fontWeight.regular,
  },
  connectionLossTitle: {
    color: colors.text2,
    fontFamily: fontFamilies.demiBold,
    fontWeight: fontWeight.demiBold,
    fontSize: scaleFontSize(14),
    lineHeight: scaleFontSize(18),
  },
});
