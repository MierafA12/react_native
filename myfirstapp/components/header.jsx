import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text2}>food app</Text>
    </View>
  )
}

const styles =StyleSheet.create({
    header: {
        backgroundColor: '#003049',
        
        width: '100%',
        paddingTop: 20,
        paddingBottom: 20,
        marginBottom:5,
        height: 60,
    },
    text2: {
        fontSize: 15,
        color: '#EAE2B7',
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

export default header