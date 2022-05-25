import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimension';

export default FormInput = ({value, placeholderText, ...rest}) => {
  return (
    <TextInput
      value={value}
      style={styles.input}
      numberofLines={1}
      placeholder={placeholderText}
      placeholderTextColor="#666"
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    width: windowWidth / 1.5,
    height: windowHeight / 15,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
});
