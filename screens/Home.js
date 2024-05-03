import { useLayoutEffect, useState } from 'react';
import {View, TouchableOpacity, Pressable, Text, FlatList, ImageBackground} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// Custom imports:
import ModalCustom from '../components/ModalCustom';
import GlobalStyle from '../styles/style/GlobalStyle';
import Data from '../data/data';

export default Home =({navigation})=>{
    const [pressed, setPressed] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    useLayoutEffect(()=>{
        navigation.setOptions(
            {
                headerRight:()=>{
                    return (
                        <Pressable
                            onPress={()=>(setModalVisible(true))}
                            onPressIn={()=>setPressed(true)}
                            onPressOut={()=>setPressed(false)}
                            style={{marginRight:15}}
                        >
                            <MaterialCommunityIcons name="filter-menu" size={24} color={pressed ? 'red':'white'}/>
                        </Pressable>
                    )
                }            
            }
        ), 
        [navigation]}
    );
    const userData = Data;
    const renderItem = ({item})=>{
      return(
        <TouchableOpacity
          onPress={()=>navigation.navigate('Profile',{item:item})}
          style={{marginBottom:20}}
          activeOpacity={0.7}
        >
            <ImageBackground 
                source={{uri:item.img}}
                style={GlobalStyle.imageBackGroundHome}
                resizeMode="cover"
            >
                <Text style={GlobalStyle.textHome}>
                    {item.name} prefers {item.category}
                </Text>
            </ImageBackground>
        </TouchableOpacity>
      );
    }
    return(  
        <View>
            <ModalCustom
                modalVisible={modalVisible}
                handleModalVisible={setModalVisible}
            />
            <FlatList
                data={userData}
                renderItem={renderItem}
                keyExtractor={(item)=>item.id}
                contentContainerStyle={{alignItems:'stretch'}}
            />  
        </View>
        
    )
  };