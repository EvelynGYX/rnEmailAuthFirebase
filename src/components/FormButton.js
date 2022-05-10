import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimension';

export default FormButton = ({
  buttonTitle,
  buttonTextStyle,
  buttonStyle,
  ...rest
}) => {
  return (
    <TouchableOpacity style={[styles.buttonContainer, buttonStyle]} {...rest}>
      <Text style={{...styles.defaultButtonText, ...buttonTextStyle}}>
        {buttonTitle}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: windowWidth / 2,
    height: windowHeight / 15,
    backgroundColor: '#6646ee',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  defaultButtonText: {
    fontSize: 24,
    color: '#ffffff',
  },
});
