import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Welcome() {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>WELCOME</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dbf6f9',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text1: {
        fontWeight: '700',
        color: 'black',
        fontSize: 42,
        marginTop: 20,
        marginBottom: 20,
    },

})