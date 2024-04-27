import React from'react';
import { View, Pressable } from 'react-native'
import { FontAwesome5} from 'react-native-vector-icons';

export default ButtonCustom = ({navigation,pressed,screen, handelPress, iconName,}) => {
    return(
        <View style={{
            flex:1,
            justifyContent:'flex-end',
            marginBottom:15,
            marginLeft:15,     
            }}
            >
            <Pressable
                onPress={()=>navigation.navigate(screen)}
                onPressIn={()=>handelPress(true)}
                onPressOut={()=>handelPress(false)}
                >
                <FontAwesome5 name={iconName} size={24} color={pressed ? 'red' : 'white'} />
            </Pressable>
        </View>
  )
}

