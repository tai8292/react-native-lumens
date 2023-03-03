import Text from '@Components/Text/Text';
import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

export interface ButtonPropsType extends TouchableOpacityProps {
  text: string;
  textStyle: StyleProp<TextStyle>;
}

const Button = (props: ButtonPropsType): React.ReactElement => {
  const { text, style, textStyle, ...restProps } = props;

  return (
    <TouchableOpacity {...restProps} style={[styles.button, style]}>
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    borderRadius: 4,
  },
});

export default React.memo(Button);
