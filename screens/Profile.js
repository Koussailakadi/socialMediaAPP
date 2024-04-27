import { useLayoutEffect, useState} from 'react';
import {View, ImageBackground, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import ButtonCustom from '../components/ButtonCustom';
import GlobalStyle from '../styles/style/GlobalStyle';

export default Profile =({navigation , route})=>{
    const [pressed, setPressed] = useState(false);
    const item = route.params.item
    // change headerTitle dynamically: 
    useLayoutEffect( () =>{
      navigation.setOptions({
        headerTitle: ()=>{
          return (
            <View>
              <Image 
                source = {{uri : item.img}}
                style = {{
                  width:150, 
                  height:150, 
                  borderRadius:100, 
                  borderWidth:5,
                  borderColor:'white',
                  overflow:'hidden'
                }}
                />
              <Text style={{fontSize:20, textAlign:'center', color:'white'}}>{item.name}</Text>
            </View>
          )
        },
        headerStyle: {backgroundColor: item.favColor, height:270},
        headerLeft:() => (
            <ButtonCustom 
                navigation={navigation}
                pressed={pressed}
                screen='Home'
                handelPress={setPressed}
                iconName="images"
            />
        )
        
      })
    })
    return(
      <ScrollView>
        <Text style={{fontSize:20, textAlign:'left',fontWeight:'bold'}}>Bio</Text>
        <Text style={{fontSize:15, textAlign:'left'}}>{item.desc}</Text>
        {item.photos.map((subItem) => (
            <TouchableOpacity
                onPress={()=>navigation.navigate('Photo',{item:subItem})}
                style={{alignItems:'center',marginBottom:10}}
                activeOpacity={0.7}
                key={subItem.id}
            >
                <ImageBackground 
                    source={{uri:subItem.url}}
                    style={{
                    justifyContent:'flex-end',
                    alignContent:'flex-end',
                    width:'100%',
                    height:350,
                    }}
                    resizeMode="cover"
                    >
                    <Text 
                        style={{
                            color:'white',
                            backgroundColor:'rgba(0, 0, 0, 0.5)',
                            padding: 10,fontSize:20 ,textAlign:'center'
                        }}
                        >
                        {subItem.title}
                    </Text>
                </ImageBackground>
            </TouchableOpacity>
            )
        )
        }
        
    </ScrollView>
      
    )
  };