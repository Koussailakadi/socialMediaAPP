import { StyleSheet, Text, View, Switch } from 'react-native'
import React from 'react'

const SwitchCustom = ({switchName, value, onValueChange}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>{switchName}</Text>
        <Switch
        trackColor={{false: '#767577', true: 'grey'}}
        thumbColor={value ? 'lightgreen' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={onValueChange}
        value={value}
    />
    </View>
  )
}

export default SwitchCustom

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:10,
        marginLeft:50,
        marginRight:50,
    },
    text:{
        fontSize:15,
    }
})