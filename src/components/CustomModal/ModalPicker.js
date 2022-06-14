import { View, Text,StyleSheet,TouchableOpacity, Dimensions, ScrollView, Image } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { setUserImageData } from '../../redux/Actions/SecretKeyActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
const Options = [{application_name:'drishti',image:require('../../assets/images/drishti.png')},{application_name:'aristi',image:require('../../assets/images/aristi.jpg')},{application_name:'collaxy',image:require('../../assets/images/collaxy.jpg')}]
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const ModalPicker = (props) => {
    const onPressItem = data => {
        props.changeModalVisibility(false)
        props.setData(data)
        props.setUserImageData(data);
    }
    const option = Options.map((item,index)=>{
        return(
            <TouchableOpacity
                style={styles.option}
                onPress={()=> onPressItem(item)}
                key={index}
            >
                <Text style={styles.text}>{item.application_name}</Text>
                <Image source={item.image}style={styles.image}/>

            </TouchableOpacity>
        )
    })
  return (
    <TouchableOpacity
    style={styles.contianer}
    onPress={()=>props.changeModalVisibility(false)}
    >
      <Ionicons name="close-outline" size={32} onPress={(e)=>{e.stopPropagation(),props.changeModalVisibility(false)}} style={{alignSelf:'flex-end',backgroundColor:'#a3bfe6',borderRadius:16}}/>
        <View style={[styles.modal,{width:WIDTH - 20, height:HEIGHT/2}]}>
            {option}
        </View>
        
    </TouchableOpacity>
  )
}
const mapDispatchToProps = dispatch =>({
  ...bindActionCreators({setUserImageData},dispatch)
})
const mapStateToProps = state =>({

})
export default connect(mapStateToProps, mapDispatchToProps)(ModalPicker)
const styles = StyleSheet.create({
    contianer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        // backgroundColor:"#a3bfe6"
    },
    modal:{
        backgroundColor:'#a3bfe6',
        borderRadius:10,
    },
    option:{
        alignItems:'flex-start',
        flexDirection:'row',
        justifyContent:'space-around',
        flex:1,
        padding:10
    },
    text:{
        margin:20,
        fontSize:20,
        fontWeight:'bold',
        color:'white',
        fontWeight:''
    },
    image:{
        borderRadius:10,
        width:50,
        height:50,
        resizeMode: 'cover'
    }
})