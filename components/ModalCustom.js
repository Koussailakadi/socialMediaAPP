import { useState, useEffect } from'react';
import { Modal, StyleSheet, Text, View, Alert} from 'react-native'
import { SimpleLineIcons } from '@expo/vector-icons';
import SwitchCustom from '../components/SwitchCustom';
import { useSelector, useDispatch  } from'react-redux';
import { setCategory } from '../redux/reducers/AppReducer';


const ModalCustom = ({modalVisible, handleModalVisible}) => {  
    const category = useSelector((state) => state.filters.category);
    const dispatch = useDispatch();

    const [selectedCategory, setSelectedCategory] = useState(category);

    const updateCategory = (categoryName, value) => {
        setSelectedCategory((prevState)=> ({
            ...prevState, 
            [categoryName]: value
            })
        );
    }

    useEffect(() => {
        // Vérifiez si selectedCategory a changé avant de déclencher la mise à jour dans le store Redux
        if (selectedCategory !== category) {
          dispatch(setCategory(selectedCategory));
        }
      }, [selectedCategory, category, dispatch]);


  return (
    <Modal 
        visible = {modalVisible}
        style={{backgroundColor:'green'}}
        transparent = {true}
        onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            handleModalVisible(!modalVisible);
        }}
        >
        <View style={styles.modalView}>
            <View style={styles.header}>
                <Text style={{fontSize:25, fontWeight:'bold'}}>Settings</Text>
                <SimpleLineIcons 
                    name="close" 
                    size={24} 
                    color={modalVisible ? "black" : 'red'} 
                    onPress={()=>handleModalVisible(false)}
            />
            </View>
            <View style={styles.body}>
                <Text style={styles.bodyText}>
                    Filter by category ! at least on category shall be selected.
                </Text>
                <SwitchCustom 
                    switchName="Animals" 
                    value={category.animals} 
                    onValueChange={(value)=>updateCategory("animals", value)}
                />
                <SwitchCustom 
                    switchName="Cars" 
                    value={category.cars} 
                    onValueChange={(value)=>updateCategory("cars", value)}
                />
                <SwitchCustom 
                    switchName="Travel" 
                    value={category.travel} 
                    onValueChange={(value)=>updateCategory("travel", value)}
                />
            </View>
        </View>
    </Modal>
  )
}

export default ModalCustom

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        marginTop:200,
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        height:400,
      },
    header:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        width:'100%',
        marginBottom:20,
    },
    bodyText:{
        fontSize:15, 
        color:'grey',
        marginBottom:50,
    }
})