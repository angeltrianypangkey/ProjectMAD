import {
    Text,
    View,
  } from 'react-native';

const Header = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome</Text>
        {/* Sign in form */}
        <Text style={styles.inputText}>Username</Text>
        <Text style={styles.inputText}>Password</Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
      container: {
          paddingTop: 20,
          paddingRight: 15,
          paddingLeft: 15,
        },
        welcome: {
          fontSize: 32,
          color: 'black',
          fontWeight: 800,
          marginBottom: 30,
        },
        inputText: {
          fontSize: 16,
          color: 'black',
          fontWeight: 700,
          marginBottom: 5,
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
export default Header;