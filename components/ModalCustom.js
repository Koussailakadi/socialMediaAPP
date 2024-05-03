import { useState } from'react';
import { Modal, StyleSheet, Text, View, Switch } from 'react-native'
import { SimpleLineIcons } from '@expo/vector-icons';
import SwitchCustom from '../components/SwitchCustom';


const ModalCustom = ({modalVisible, handleModalVisible}) => {   
    const [isEnabledAnimal, setIsEnabledAnimal] = useState(false);
    const [isEnabledCars, setIsEnabledCars] = useState(false);
    const [isEnabledTravel, setIsEnabledTravel] = useState(false);

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
                        value={isEnabledAnimal} 
                        onValueChange={setIsEnabledAnimal}
                    />
                    <SwitchCustom 
                        switchName="Cars" 
                        value={isEnabledCars} 
                        onValueChange={setIsEnabledCars}
                    />
                    <SwitchCustom 
                        switchName="Travel" 
                        value={isEnabledTravel} 
                        onValueChange={setIsEnabledTravel}
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