import LottieView from 'lottie-react-native';
import {
  ActivityIndicator,
  Dimensions,
  ImageSourcePropType,
  StyleSheet,
  ViewStyle,
  TouchableOpacityProps,
  StyleProp,
  ImageProps,
} from 'react-native';
import { hasNotch } from 'react-native-device-info';
import FastImage from 'react-native-fast-image';
import Spinner from 'react-native-loading-spinner-overlay';
import styled, { css } from 'styled-components/native';
import { scaleFontSize, fontFamilies, colors } from '../constants';

const { width: viewportWidth } = Dimensions.get('window');

export type numberStringNull = number | string | null;

export const globalWidth = viewportWidth - 32;
export const rowWidth = globalWidth;
export const singleFieldWidth = rowWidth / 2 - 8;

export const TouchableOpacity = styled.TouchableOpacity<{ width?: numberStringNull }>`
  width: ${({ width = 'auto' }) => width};
`;
export const TouchableOpacityDefault = styled.TouchableOpacity``;
export const TouchableWithoutFeedback = styled.TouchableWithoutFeedback``;
export const Pressable = styled.Pressable.attrs({ unstable_pressDelay: 100 })``;

interface ViewProps {
  height?: numberStringNull;
  width?: numberStringNull;
  backgroundColor?: string;
  alignItems?: string;
  justifyContent?: string;
  padding?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;
  marginTop?: number;
  marginBottom?: number;
  flex?: number | string;
}

export const View = styled.View<ViewProps>`
  height: ${({ height = 'auto' }) => height};
  width: ${({ width = 'auto' }) => width};
  background-color: ${({ backgroundColor = 'transparent' }) => backgroundColor};
  align-items: ${({ alignItems = 'flex-start' }) => alignItems};
  justify-content: ${({ justifyContent = 'flex-start' }) => justifyContent};
  padding-horizontal: ${({ paddingHorizontal = 0 }) => paddingHorizontal}px;
  padding-vertical: ${({ paddingVertical = 0 }) => paddingVertical}px;
  margin-top: ${({ marginTop = 0 }) => marginTop}px;
  margin-bottom: ${({ marginBottom = 0 }) => marginBottom}px;
  ${({ flex }) =>
    flex &&
    css`
      flex: ${flex};
    `}
`;
export const DefaultView = styled.View<ViewProps>``;
export const SafeAreaView = styled.SafeAreaView<ViewProps>``;

interface RowProps {
  backgroundColor?: string;
  width?: numberStringNull;
  alignItems?: string;
  justifyContent?: string;
  paddingHorizontal?: number;
  paddingVertical?: number;
  marginTop?: number;
  marginBottom?: number;
  marginRight?: number;
  flex?: number | string;
}

export const Row = styled.View<RowProps>`
  background-color: ${({ backgroundColor = 'transparent' }) => backgroundColor};
  width: ${({ width = 'auto' }) => width};
  flex-direction: row;
  align-items: ${({ alignItems = 'flex-start' }) => alignItems};
  justify-content: ${({ justifyContent = 'flex-start' }) => justifyContent};
  padding-horizontal: ${({ paddingHorizontal = 0 }) => paddingHorizontal}px;
  padding-vertical: ${({ paddingVertical = 0 }) => paddingVertical}px;
  margin-top: ${({ marginTop = 0 }) => marginTop}px;
  margin-bottom: ${({ marginBottom = 0 }) => marginBottom}px;
  margin-right: ${({ marginRight = 0 }) => marginRight}px;
  ${({ flex }) =>
    flex &&
    css`
      flex: ${flex};
    `}
`;

export const FlatList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const Flex = styled.View<{ justifyContent?: string }>`
  flex: 1;
  width: 100%;
`;

export const SafeBackground = styled.SafeAreaView`
  background-color: #ffffff;
  flex: 1;
`;

export const Background = styled.View<{ paddingHorizontal?: number }>`
  background-color: #ffffff;
  padding-horizontal: ${(props) => props?.paddingHorizontal}px;
`;

export const Scroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})<{ backgroundColor?: string }>`
  flex: 1;
  background-color: ${({ backgroundColor = colors.white }) => backgroundColor};
`;

export const EndCenter = styled.View`
  align-items: center;
  justify-content: flex-end;
`;

export interface IconBaseProps extends ImageProps {
  height?: number;
  width?: number;
  size?: number;
}

export const IconBase = styled(FastImage).attrs(({ resizeMode }: { resizeMode?: string }) => ({
  resizeMode,
}))<IconBaseProps>`
  height: ${({ size = 18, height }: IconBaseProps) => scaleFontSize(height ?? size)}px;
  width: ${({ size = 18, width }: IconBaseProps) => scaleFontSize(width ?? size)}px;
`;

export interface IconProps {
  resizeMode?: string;
  containerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  onPress?: any;
  testID?: string;
  source?: ImageSourcePropType;
  size?: number;
  imageProps?: IconBaseProps;
  containerProps?: TouchableOpacityProps;
}

export const Icon = ({
  resizeMode = 'contain',
  containerStyle = {},
  style = {},
  onPress = null,
  testID = '',
  source,
  size = 18,
  imageProps = {},
  containerProps = {},
}: IconProps) => (
  <TouchableOpacity
    disabled={!onPress}
    onPress={onPress}
    style={containerStyle}
    testID={testID}
    {...containerProps}
  >
    <IconBase resizeMode={resizeMode} source={source} style={style} size={size} {...imageProps} />
  </TouchableOpacity>
);

interface DefaultBackgroundProps {
  safestyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
  isLoading?: boolean;
  paddingHorizontal?: number;
  testID?: string;
}

export const DefaultBackground = ({
  safestyle = {},
  style = {},
  children,
  isLoading = false,
  paddingHorizontal = 16,
  testID = '',
}: DefaultBackgroundProps) => (
  <>
    <SafeBackground testID={testID} style={safestyle}>
      <Background style={style} paddingHorizontal={paddingHorizontal}>
        {children}
      </Background>
    </SafeBackground>
    <LoadingOverlay visible={isLoading} />
  </>
);

interface IDefaultScrollBackgroundProps
  extends Pick<
    DefaultBackgroundProps,
    'safestyle' | 'style' | 'children' | 'isLoading' | 'testID'
  > {
  contentContainerStyle?: StyleProp<ViewStyle>;
  scrollComponent?: React.ComponentType<any> | null;
}

export const DefaultScrollBackground = ({
  safestyle = {},
  style = {},
  children,
  isLoading = false,
  contentContainerStyle = {},
  testID = '',
  scrollComponent = null,
}: IDefaultScrollBackgroundProps) => {
  const ScrollContainer = scrollComponent ?? Scroll;
  return (
    <>
      <SafeBackground testID={testID} style={safestyle}>
        <ScrollContainer
          testID="scrollView"
          style={style}
          contentContainerStyle={contentContainerStyle}
        >
          {children}
        </ScrollContainer>
      </SafeBackground>
      <LoadingOverlay visible={isLoading} />
    </>
  );
};

export const LoadingOverlay = ({ visible }: { visible: boolean }) => (
  <Spinner
    visible={visible}
    overlayColor="rgba(255, 255, 255, 0.70)"
    testID="loadingOverlayScreen"
    customIndicator={
      <LottieView
        style={globalStyles.lottieView}
        source={require('../../assets/loading-animation.json')}
        autoPlay
        loop
      />
    }
  />
);

export const LoadingIndicator = () => (
  <Flex justifyContent="center">
    <ActivityIndicator />
  </Flex>
);

interface ISeparatorProps {
  width?: number | string;
  backgroundColor?: string;
  height?: number;
  marginLeft?: number;
  marginTop?: number;
  marginHorizontal?: number;
  marginBottom?: number;
}

export const Separator = styled.View<ISeparatorProps>`
  width: ${({ width = '100%' }) => width};
  background-color: ${({ backgroundColor = colors.text5 }) => backgroundColor};
  height: ${({ height = 1 }) => height}px;
  margin-left: ${({ marginLeft = 0 }) => marginLeft}px;
  margin-top: ${({ marginTop = 0 }) => marginTop}px;
  margin-horizontal: ${({ marginHorizontal = 0 }) => marginHorizontal}px;
  margin-bottom: ${({ marginBottom = 0 }) => marginBottom}px;
`;

interface ISelectionProps {
  isSelected?: boolean;
  marginTop?: number;
  marginHorizontal?: number;
  paddingHorizontal?: number;
}
export const Selection = styled.TouchableOpacity<ISelectionProps>`
  flex-direction: row;
  background-color: ${({ isSelected = false }) => (isSelected ? colors.white : '#f9f9f9')};
  margin-top: ${({ marginTop = 8 }) => marginTop}px;
  margin-horizontal: ${({ marginHorizontal = 16 }) => marginHorizontal}px;
  padding-horizontal: ${({ paddingHorizontal = 16 }) => paddingHorizontal}px;
  border-radius: 6px;
  border: ${({ isSelected = false }) => (isSelected ? '1px solid #16C793' : '#f9f9f9')}
  justify-content: space-between;
  align-items: center;
  min-height: ${scaleFontSize(48)}px;
`;

interface IColumnProps {
  width?: numberStringNull;
  backgroundColor?: string;
  alignItems?: string;
  justifyContent?: string;
  padding?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;
  marginTop?: number;
  marginBottom?: number;
  flex?: number | string;
}

export const Column = styled.View<IColumnProps>`
  width: ${({ width = 'auto' }) => width};
  background-color: ${({ backgroundColor = 'transparent' }) => backgroundColor};
  align-items: ${({ alignItems = 'flex-start' }) => alignItems};
  justify-content: ${({ justifyContent = 'flex-start' }) => justifyContent};
  padding-horizontal: ${({ paddingHorizontal = 0, padding = 0 }) => padding ?? paddingHorizontal}px;
  padding-vertical: ${({ paddingVertical = 0, padding = 0 }) => padding ?? paddingVertical}px;
  margin-top: ${({ marginTop = 0 }) => marginTop}px;
  margin-bottom: ${({ marginBottom = 0 }) => marginBottom}px;
  ${({ flex }) =>
    flex &&
    css`
      flex: ${flex};
    `}
`;

export const globalStyles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  marginTop0: {
    marginTop: 0,
  },
  marginTop8: {
    marginTop: 8,
  },
  marginTop16: {
    marginTop: 16,
  },
  marginBottom8: {
    marginBottom: 8,
  },
  marginBottom16: {
    marginBottom: 16,
  },
  marginLeft8: {
    marginLeft: 8,
  },
  marginLeft12: {
    marginLeft: 12,
  },
  marginLeft16: {
    marginLeft: 16,
  },
  marginRight8: {
    marginRight: 8,
  },
  marginRight16: {
    marginRight: 16,
  },
  marginRight32: {
    marginRight: 32,
  },
  paddingHorizontal16: {
    paddingHorizontal: 16,
  },
  paddingRight16: {
    paddingRight: 16,
  },
  paddingTop16: {
    paddingTop: 16,
  },
  withNotch: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: hasNotch() ? 16 : 24,
  },
  width100: {
    width: '100%',
  },
  bgColorWhite: {
    backgroundColor: colors.white,
  },
  bgColorBackground: {
    backgroundColor: colors.background,
  },
  flexbgColorBackground: {
    flex: 1,
    backgroundColor: colors.background,
  },
  alignCenter: {
    alignItems: 'center',
  },
  lottieView: {
    height: 100,
    width: 100,
  },
  headerScrollTitle: {
    marginLeft: 0,
    paddingLeft: 16,
    paddingVertical: 4,
    fontFamily: fontFamilies.demiBold,
    fontSize: scaleFontSize(24),
    fontWeight: '600',
  },
});
