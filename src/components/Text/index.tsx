import { DefaultView, TouchableOpacity } from '../global';
import { stringToRegex } from '../../utils/helper';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import Hyperlink from 'react-native-hyperlink';
import {
  H1,
  H2,
  H3,
  H4,
  P1,
  P2,
  P3,
  C1,
  C2,
  Form,
  Button1,
  Button2,
  Button3,
  ParsedText,
} from './components';
import { colors } from '../../constants';

export type TextTypes =
  | 'H1'
  | 'H2'
  | 'H3'
  | 'H4'
  | 'P1'
  | 'P2'
  | 'P3'
  | 'C1'
  | 'C2'
  | 'Button1'
  | 'Button2'
  | 'Button3';

export type AlignTypes = 'left' | 'center' | 'right';

export interface TextProps {
  type?: TextTypes;
  style?: StyleProp<TextStyle>;
  children?: React.ReactNode;
  width?: null;
  align?: AlignTypes;
  color?: string;
  marginTop?: number;
  paddingLeft?: number;
  paddingHorizontal?: number;
  numberOfLines?: number | null;
  fontFamily?: string | null;
  testID?: string | null;
}

export const Text = ({
  type = 'P1',
  style = {},
  children = null,
  width,
  align = 'left',
  color = colors.offBlack,
  marginTop = 0,
  paddingLeft = 0,
  paddingHorizontal = 0,
  numberOfLines = null,
  fontFamily = null,
  testID = 'text',
}: TextProps) => {
  const TextType = { H1, H2, H3, H4, P1, P2, P3, C1, C2, Form, Button1, Button2, Button3 }[type];
  return (
    <TextType
      align={align}
      style={style}
      width={width}
      color={color}
      marginTop={marginTop}
      paddingLeft={paddingLeft}
      paddingHorizontal={paddingHorizontal}
      numberOfLines={numberOfLines}
      fontFamily={fontFamily}
      testID={testID}
    >
      {children}
    </TextType>
  );
};

export interface PatternStyledTextProps {
  text: string;
  pattern?: any;
  onPress?: any;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  textColor?: string;
  patternStyle?: StyleProp<TextStyle>;
  testID?: string | null;
}
export const PatternStyledText = ({
  text,
  pattern = null,
  onPress = null,
  containerStyle = {},
  textStyle = {},
  textColor = '#000',
  patternStyle = {},
  testID = 'pattern',
}: PatternStyledTextProps) => {
  const Container = onPress ? TouchableOpacity : DefaultView;
  return (
    <Container onPress={onPress} style={containerStyle} testID={testID}>
      <ParsedText
        style={textStyle}
        color={textColor}
        parse={[
          {
            pattern: pattern || stringToRegex(text),
            style: patternStyle,
          },
        ]}
      >
        {text}
      </ParsedText>
    </Container>
  );
};

interface HyperlinkTextProps {
  text: React.ReactNode;
  linkStyle?: StyleProp<TextStyle>;
  textStyle?: StyleProp<TextStyle>;
  type?: TextTypes;
  width?: null;
  align?: AlignTypes;
  color?: string;
  marginTop?: number;
  paddingLeft?: number;
  paddingHorizontal?: number;
  onPress?: any;
  onLongPress?: any;
  linkText?: ((url: string) => string) | string;
}
export const HyperlinkText = ({
  text,
  linkStyle = {},
  textStyle = {},
  type = 'P2',
  width,
  align = 'left',
  color = colors.text2,
  marginTop = 0,
  paddingLeft = 0,
  paddingHorizontal = 0,
  onPress = null,
  onLongPress = null,
  linkText = '',
}: HyperlinkTextProps) => (
  <Hyperlink
    linkText={linkText}
    onPress={onPress}
    onLongPress={onLongPress}
    linkStyle={[{ color: colors.wildTide, textDecorationLine: 'underline' }, linkStyle]}
  >
    <Text
      width={width}
      type={type}
      align={align}
      color={color}
      marginTop={marginTop}
      paddingHorizontal={paddingHorizontal}
      paddingLeft={paddingLeft}
      style={textStyle}
    >
      {text}
    </Text>
  </Hyperlink>
);
