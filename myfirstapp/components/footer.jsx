import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

const footer = () => {
  return (
    <View style={styles.footer}>
        <Icon style={styles.home} name = 'home'/>
        <Icon style={styles.home} name = 'search'/>
    </View>
  )
}
const styles=StyleSheet.create({
    footer: {
    backgroundColor: '#003049',
    padding: 20,
    width: '100%',
    marginBottom: 10,
    marginTop: 190,
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
      },
      home:{
        fontSize: 30,
        color: 'yellow',	
      }
});

export default footer

