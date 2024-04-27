import { TouchableOpacity, Text, View , FlatList, ImageBackground} from 'react-native';
import Data from '../data/data';

export default Home =({navigation})=>{
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
                style={{
                    justifyContent:'flex-end',
                    alignContent:'flex-end',
                    width:'100%',
                    height: 350,
                    overflow: 'hidden',
                    backgroundColor:'red',
                    alignSelf:'center',
                    }}
                    resizeMode="cover"
                >
                <Text style={{
                    backgroundColor:'rgba(0 , 0, 0, 0.5)',
                    fontSize:20, 
                    textAlign:'center', 
                    color:'white'}}
                    >
                    {item.name} prefers {item.category}
                 </Text>
            </ImageBackground>
        </TouchableOpacity>
      );
    }
    return(  
        <FlatList
            data={userData}
            renderItem={renderItem}
            keyExtractor={(item)=>item.id}
            contentContainerStyle={{alignItems:'stretch'}}
        />
    )
  };