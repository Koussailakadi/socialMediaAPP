import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TextCustom = ({children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}

export default TextCustom

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginBottom:10,
        padding: 5,

    },
    text:{
        fontSize:15,
    }
})