import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import OnBordingScreen from '../screens/OnBoardingScreen';
// import LoginScreen from '../screens/LoginScreen';
import Home from '../Screens/HomeScreen';
import QrScannerScreen from '../Screens/QRScannerScreen';
import AddAccountScreen from '../Screens/AddAccountScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'
const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="scanner" component={QrScannerScreen} />
    <Stack.Screen name="addAccount" component={AddAccountScreen} />
  </Stack.Navigator>
  );
};

export default AppStack;
