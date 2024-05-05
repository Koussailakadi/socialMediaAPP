import { useLayoutEffect, useState } from 'react';
import {View, TouchableOpacity, Pressable, Text, FlatList, ImageBackground} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// Custom imports:
import ModalCustom from '../components/ModalCustom';
import GlobalStyle from '../styles/style/GlobalStyle';
import { useSelector } from'react-redux';

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
    const userData = useSelector((state) => state.filters.selectedData);
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
    if (!userData.length){
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <ModalCustom
                modalVisible={modalVisible}
                handleModalVisible={setModalVisible}
                />
                <Text style={{fontSize:20, fontWeight:'bold'}}>No Data Found</Text>
            </View>
        )
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