import React, {useContext, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import {AuthContext} from '../navigation/AuthProvider';

export default LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {login} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Email Auth app</Text>
      <FormInput
        value={email}
        placeholderText="Email"
        onChangeText={userEmail => setEmail(userEmail)}
        autoCapitalize="none"
        keyboardType="email-address"
        autoCorrect={false}
      />
      {/* Props and user-defined components */}
      <FormInput
        value={password}
        placeholderText="Password"
        onChangeText={userPassword => setPassword(userPassword)}
        secureTextEntry={true}
      />
      <FormButton
        buttonStyle={styles.loginButton}
        buttonTitle="Login"
        buttonTextStyle={styles.loginText}
        onPress={() => {
          // alert('login button')
          login(email, password);
        }}
      />
      <FormButton
        buttonStyle={styles.signUpButton}
        buttonTitle="New user? Join here"
        buttonTextStyle={styles.signUpText}
        onPress={() => {
          //   alert('signup button');
          navigation.navigate('Signup');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  loginButton: {
    marginTop: 20,
  },
  signUpButton: {
    marginTop: 0,
    width: 'auto',
    backgroundColor: 'transparent',
  },
  signUpText: {
    fontSize: 20,
    color: '#6646ee',
  },
});
