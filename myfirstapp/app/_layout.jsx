// App.jsx
import React from 'react';
import { Alert, Button, View, StyleSheet,Text ,Image} from 'react-native';
import Header from '../components/header';

const App = () => {
  const handlePress = () => {
    Alert.alert('Button Pressed!', 'You pressed the button.');
  };

  return (
    <View style={styles.container}>
        <Header/>
        <Image style={styles.tmg1} source={require('../assets/images/i3.jpg')}/>
      <Button title="buy" onPress={handlePress} style={styles.b1}/>
    <Text style={styles.text1}>my first react native application</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:5,
  },
  b1:{
    backgroundColor:'blue',
    width: 200,
    paddingTop: 20,
    paddingBottom: 20,
    textAlign: 'center',
    height: 100,
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
    backgroundColor:'yellow',
    width: '100%',
    paddingTop: 20,
    paddingBottom: 20,
    textAlign: 'center'
  },
  text1: {
    fontSize: 12,
    width: '100%',
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 20,
    paddingBottom: 20,
    textAlign: 'center',
    borderRadius: 5

  },
});

export default App;
