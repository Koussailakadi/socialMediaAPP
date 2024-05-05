import { useLayoutEffect, useState } from 'react';
import {View, Text, ImageBackground, ScrollView, Pressable} from'react-native';
import { Ionicons } from '@expo/vector-icons';
import TextCustom from '../components/TextCustom';
import GlobalStyle from '../styles/style/GlobalStyle';

export default Photo = ({navigation, route}) =>{
    const item = route.params.item;
    const [pressed, setPressed] = useState(false);
    // change headerTitle dynamically:
    useLayoutEffect(()=>{
      navigation.setOptions({
        headerTitle: item.title,
        headerLeft:()=>{
          return(
            <View style={{
                flex:1,
                justifyContent:'flex-end',
                marginBottom:10,
                marginLeft:15,    
              }}
              >
              <Pressable
                onPress={()=>navigation.goBack()}
                onPressIn={()=>setPressed(true)}
                onPressOut={()=>setPressed(false)}
                >
                <Ionicons name="arrow-back-circle" size={24} color={pressed ? 'red':'white'}/>
              </Pressable>
            </View>
          )
        },
      })
    });
    
    return(
      <ScrollView>
        <ImageBackground
          source ={{uri:item.url}}
          style={{
            width: '100%',
            height: 350,
          }}
        />
        <Text style={{fontSize:25,fontWeight:'bold',marginBottom:10, marginLeft:15}}>Description</Text>
        <TextCustom>{item.photoDesc}</TextCustom>
        <TextCustom>{item.photoDesc}</TextCustom>
        <TextCustom>{item.photoDesc}</TextCustom>
        <TextCustom>{item.photoDesc}</TextCustom>
        <TextCustom>{item.photoDesc}</TextCustom>
        <TextCustom>{item.photoDesc}</TextCustom>
        
      </ScrollView>
    )
  };