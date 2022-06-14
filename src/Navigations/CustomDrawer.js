import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const CustomDrawer = (props) => {
  return (
    <View style={{flex:1}}>
      <DrawerContentScrollView {...props}
        contentContainerStyle={{
            backgroundColor:"#8200d6"
        }}
      >
          <ImageBackground source={require('../assets/images/menu-bg.jpeg')} style={{ padding:20}}>
              <Image source={require('../assets/images/avatar.png')}
                style={{width:80, height:80, borderRadius:40, marginBottom:10}}
              />
              <Text style={{color:'#fff', fontSize:18}}>Thrinadh VagiCherla</Text>
              <Text style={{fontSize:16,color:'grey'}}>+91 9395876583</Text>
              {/* <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                <Text style={{color:'#fff'}}>280 coins</Text> 
                <FontAwesome5 name="coins" size={14} color="#fff"/> 
              </View> */}
          </ImageBackground>
          {/* <View style={{backgroundColor:"#fff"}}>
            <DrawerItemList {...props} />
          </View> */}
      </DrawerContentScrollView>
      <View style={{padding:20, borderTopColor:'#ccc',borderTopWidth:2}}>
          {/* <TouchableOpacity style={{paddingVertical:15}}>
              <View style={{flexDirection:'row', alignItems:'center'}}>
                <Ionicons name='share-social-outline' size={22}/>

                <Text style={{fontSize:15,marginLeft:5}}>
                    out text
                </Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity style={{paddingVertical:15}}>
              <View style={{flexDirection:'row', alignItems:'center'}}>
                <Ionicons name='exit-outline' size={22}/>

                <Text style={{fontSize:15,marginLeft:5}}>
                    Sign out
                </Text>
              </View>
          </TouchableOpacity> */}
          <Text>POWERED BY TALENTPACE</Text>
      </View>
    </View>
  )
}

export default CustomDrawer