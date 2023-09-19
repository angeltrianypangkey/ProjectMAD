import {
    StyleSheet,
    Text,
    View,
    TextInput,
  } from 'react-native';
  import React from 'react';
  import Button from '../../Components/atoms/button';
  import Header from '../../Components/molecules/Header';
  
  const SignIn = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome</Text>
        {/* Sign in form */}
        <Text style={styles.inputText}>Username</Text>
        <TextInput style={styles.input} placeholder={'Masukan username anda'} />
        <Text style={styles.inputText}>Password</Text>
        <TextInput style={styles.input} placeholder={'Masukan password anda'} />
      <Button/>
      </View>
    );
  };
  
  export default SignIn;
  
  const styles = StyleSheet.create({
    container: {
      paddingTop: 20,
      paddingRight: 15,
      paddingLeft: 15,
    },
    input: {
      width: '100%',
      padding: 10,
      borderWidth: 1,
      borderColor: 'grey',
      borderRadius: 8,
      marginBottom: 20,
    },
    // appButtonContainer: {
    //   elevation: 8,
    //   backgroundColor: '#ff4500',
    //   borderRadius: 8,
    //   paddingVertical: 10,
    //   paddingHorizontal: 12,
    //   marginTop: 30,
    // },
    // appButtonText: {
    //   color: '#fff',
    //   fontWeight: 'bold',
    //   alignSelf: 'center',
    //   padding: 2,
    // },
  });
  