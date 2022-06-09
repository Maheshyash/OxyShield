import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import OnBordingScreen from '../screens/OnBoardingScreen';
// import LoginScreen from '../screens/LoginScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'
const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
        initialRouteName="Onbording"
        screenOptions={{headerShown: false}}>
    <Stack.Screen name="Onbording" component={OnBordingScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
  </Stack.Navigator>
  );
};

export default AppStack;

const OnBordingScreen = () =>{
    return(
        <View>
            <Text>OnBordingScreen</Text>
            <Ionicons name='add-outline' size={22}/>
        </View>
    )
}
const LoginScreen = () =>{
    return(
        <View>
            <Text>LoginScreen</Text>
        </View>
    )
}
