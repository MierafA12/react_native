// App.jsx
import React from 'react';
import { Alert, Button, View, StyleSheet,Text } from 'react-native';
import Header from '../components/header';

const App = () => {
  const handlePress = () => {
    Alert.alert('Button Pressed!', 'You pressed the button.');
  };

  return (

    <View>
      <Button title="Press Me" onPress={handlePress} />
    <Text style={styles.text1}>my first react native application</Text>
    <Header/>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
  },
  text1: {
    fontSize: 12,
    backgroundColor:'pink',
    width: '100%',
    paddingTop: 20,
    paddingBottom: 20,
    textAlign: 'center'

  },
});

export default App;
