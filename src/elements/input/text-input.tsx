import React, {Fragment} from 'react';
import {
  StyleSheet,
  View as RNView,
  TextInput as RNTextInput,
  TextInputProps,
  StyleProp,
  ViewStyle,
  Animated,
  ViewProps,
  Text,
} from 'react-native';

import {useTheme} from '@appHooks';

import {Styles} from '@appTheme';

interface ITextInput extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  animated?: boolean;
  viewProps?: ViewProps;
  innerRef?: any;
  error?: string;
}

const View = ({animated, ...viewProps}: any) =>
  animated ? <Animated.View {...viewProps} /> : <RNView {...viewProps} />;

const TextInput = ({
  style,
  containerStyle,
  animated = false,
  viewProps = {},
  innerRef,
  error = '',
  ...props
}: ITextInput) => {
  const {colors} = useTheme();

  return (
    <Fragment>
      <View
        style={[
          styles.inputView,
          {backgroundColor: colors.inputBackgroundColor},
          containerStyle,
        ]}
        {...{...viewProps, animated}}>
        <RNTextInput
          ref={innerRef}
          style={[styles.inputText, {color: colors.primaryTextColor}, style]}
          placeholderTextColor={colors.placeholderTextColor}
          {...props}
        />
      </View>
      <Text style={{color: 'red'}}>{error}</Text>
    </Fragment>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  inputView: {
    ...Styles.elementView,
    borderRadius: 25,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: '100%',
  },
});
