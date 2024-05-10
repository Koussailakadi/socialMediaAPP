import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import Home from './screens/Home';
import Profile from './screens/Profile';
import Photo from './screens/Photo';
import About from './screens/About';

//redux store 
import store  from './redux/Store';
import { Provider } from'react-redux';




const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const MyStack =() =>{
  return(
    <Stack.Navigator
      screenOptions={{
          headerStyle: {backgroundColor: 'lightblue',height:100},
          headerTintColor: 'white',
          headerTitleStyle: {fontWeight: 'bold'},
        }
      } 
    >
      <Stack.Screen name="Home" component={Home} options={{}}/>
      <Stack.Screen name="Profile" component={Profile} options={{}}/>
      <Stack.Screen name="Photo" component={Photo} options={{}}/>
    </Stack.Navigator>
  )
}

const MyTabs =()=>{
  return(
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerStyle: { backgroundColor:'lightblue', height:100 },
          headerTintColor: 'white',
          headerTitleStyle: {fontWeight: 'bold'},
        }}
      > 
        <Tab.Screen 
        name="MyStack" 
        component={MyStack} 
        options={{
          headerShown:false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) =>{ return (
            <MaterialCommunityIcons name="home" color={color} size={size}/>
          )}
        }}
        />
        <Tab.Screen 
          name="About" 
          component={About} 
          options={
            {headerShown: true,
            lazy:true,
            tabBarIcon:({color, size})=>(
              <MaterialCommunityIcons name="account" color={color} size={size}/>
            )
          }}
          />
      </Tab.Navigator>
    </NavigationContainer>
  )
};



export default function App() {
  return (
    <Provider store={store}>
      <MyTabs/>
    </Provider>
  );
}

