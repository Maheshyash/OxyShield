import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'
const HeaderComponent = ({title}) => {
    const navigation = useNavigation();
  return (
    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', backgroundColor:'#669db3ff',padding:10}}>
        <Text style={{fontSize:16, color:'#000'}}>{title}</Text>
        <TouchableOpacity onPress={()=>navigation.openDrawer()}>
            <ImageBackground source={require('../../assets/images/avatar.png')} style={{width:35,height:35}} imageStyle={{borderRadius:25}}/>
            {/* <Ionicons name='contact' size={24} style={{width:35,height:35}}/>
            <ion-icon name="contact"></ion-icon> */}
        </TouchableOpacity>
    </View>
  )
}

export default HeaderComponent