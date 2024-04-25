import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const Home =()=>{
  return(
    <View style={styles.container}>
      <Text>Home!</Text>
    </View>
  )
};
const Profile =()=>{
  return(
    <View style={styles.container}>
      <Text>Profile!</Text>
    </View>
  )
};
const Photos = ()=>{
  return(
    <View style={styles.container}>
      <Text>Photos!</Text>
    </View>
  )
};
const MyDrawer = ()=> {
  return(
      <Drawer.Navigator 
        screenOptions={
          {drawerStyle:{width:250},
          }
        }
        >
        <Drawer.Screen name="Profile" component= {Profile}/>
        <Drawer.Screen name="Photos" component={Photos}/>
      </Drawer.Navigator>
  )
}; 
const MyTabs =()=>{
  return(
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: 'lightblue' },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      > 
        <Tab.Screen name="Home" component={Home}
        />
        <Tab.Screen name="Drawer" component={MyDrawer} options={{headerShown: true, lazy:true}}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
};


export default function App() {
  return (
    <MyTabs/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
