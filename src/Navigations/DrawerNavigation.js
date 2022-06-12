import React from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import Home from '../Screens/HomeScreen';
import QrScannerScreen from '../Screens/QRScannerScreen';
import AddAccountScreen from '../Screens/AddAccountScreen';
const Drawer = createDrawerNavigator();

export function DrawerNavigation() {
  return (
    <Drawer.Navigator
        initialRouteName="Onbording"
        screenOptions={{headerShown: false,
                        drawerActiveBackgroundColor:"#aa18ea",
                        drawerActiveTintColor:'#fff',
                        drawerInactiveTintColor:'#333',
                        drawerLabelStyle:{marginLeft:-25,fontSize:15}}}
        drawerContent={(props)=> <CustomDrawer {...props}/>}
        >
        <Drawer.Screen name="Home" component={Home} 
            options={{
                drawerIcon:({color})=>(
                    <Ionicons name="home-outline" size={22} color={color}/>
                )
            }}
        />
        <Drawer.Screen name="scanner" component={QrScannerScreen} 
            options={{
                drawerIcon:({color})=>(
                    <Ionicons name="qr-code-outline" size={22} color={color}/>
                )
            }}
        />
        <Drawer.Screen name="addAccount" component={AddAccountScreen} 
            options={{
                drawerIcon:({color})=>(
                    <Ionicons name="create" size={22} color={color}/>
                )
            }}
        />
        {/* <Drawer.Screen name="moments" component={MomentsScreen} 
            options={{
                drawerIcon:({color})=>(
                    <Ionicons name="timer-outline" size={22} color={color}/>
                )
            }}
        />
        <Drawer.Screen name="settings" component={SettingsScreen} 
            options={{
                drawerIcon:({color})=>(
                    <Ionicons name="settings-outline" size={22} color={color}/>
                )
            }}
        /> */}
      </Drawer.Navigator>
  );
}