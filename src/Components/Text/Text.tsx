import React from 'react';
import { TextProps, Text as RNText } from 'react-native';

type ChildElement = React.ReactText | TextElement;
type TextElement = React.ReactElement<TextProps>;

export interface TextPropsType extends TextProps {
  children?: ChildElement | ChildElement[];
}

const Text = (props: TextPropsType): React.ReactElement => {
  const { children, style, allowFontScaling = false, ...restProps } = props;

  return (
    <RNText {...restProps} allowFontScaling={allowFontScaling} style={style}>
      {children}
    </RNText>
  );
};

export default React.memo(Text);
