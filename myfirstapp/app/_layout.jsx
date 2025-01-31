// App.jsx
import React from 'react';
import { Alert, Button, View, StyleSheet,Text ,Image, TouchableOpacity, ScrollView, SafeAreaView} from 'react-native';
import {Link} from 'expo-router';
import Footer from '../components/footer';

const App =()=>{





  return (
        <ScrollView>
      <SafeAreaView>
    <View style={styles.container}>
       
        <Image style={styles.car} source={require('../assets/images/car1.png')}/>
        <View style={styles.all}>
        <Text style={styles.textone}> Rent Your Dream Car</Text>
        <Link href="../components/Home" >
        <TouchableOpacity style={styles.button} >
            <Text style={{color:'black',fontSize:20, fontWeight:'bold',justifyContent:'center',textAlign:'center'}}>GetStarted </Text>
        </TouchableOpacity>
        </Link> 
      </View>
           <Footer/>
     
    </View>
    </SafeAreaView>
    </ScrollView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //  backgroundColor: '#101820'
  },
  car:{
    width: '100%',
    height: 400,
    marginBottom: 20,
    borderRadius: 10,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  all:{
    width: '100%',
    height:400,
    backgroundColor:'#101820',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    flex: 1,
    justifyContent:'space-around',
    alignItems: 'center',
    marginBottom: 20,
  },
  textone:{
   color: 'white',
   fontSize:50,
   margin:10,
   textweight:'bold',
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
