// App.jsx
import React from 'react';
import { Alert, Button, View, StyleSheet,Text ,Image, TouchableOpacity, ScrollView} from 'react-native';
import Header from '../components/header';
import Footer from '../components/footer';


const App = () => {
  const handlePress = () => {
    Alert.alert('Button Pressed!', 'You pressed the button.');
  };

  return (
    <ScrollView>
    <View style={styles.container}>
        <Header/>
        <Image style={styles.tmg1} source={require('../assets/images/i3.jpg')}/>
        <View >
        <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={{color:'black',fontSize:20, fontWeight:'bold',justifyContent:'center',textAlign:'center'}}>Buy</Text>
        </TouchableOpacity>
          
      </View>
    <Text style={styles.text1}>most popular</Text>
      <View style={styles.images}>
         <Image style={styles.tmg2} source={require('../assets/images/i3.jpg')}/>,
         <Image style={styles.tmg2} source={require('../assets/images/doro.jpg')}/>,
          <Image style={styles.tmg2} source={require('../assets/images/piza.jpg')}/>
       </View>
           <Footer/>
     
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:5,
  },
  button:{
    backgroundColor:'#ECAE36',
    width: '90%',
    marginLeft:20,
    paddingTop: 20,
    paddingBottom: 20,
    height: 60,
    borderRadius: 10,
    marginTop: 40,
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
  images:{
    flexDirection: 'row',
  },
  tmg2:{
    width:120,
    height:150,
    marginLeft:10,
    marginTop:10,
    borderRadius:5,

  }

});

export default App;
