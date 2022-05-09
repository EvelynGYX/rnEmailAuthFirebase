import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FormButton from '../components/FormButton';
import {AuthContext} from '../navigation/AuthProvider';

export default HomeScreen = () => {
  const {user, logout} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome user {user.uid}</Text>
      <FormButton
        buttonTitle="Logout"
        onPress={() => {
          // alert('logout button')
          logout();
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f1',
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
  },
});
