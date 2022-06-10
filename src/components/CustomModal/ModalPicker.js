import { View, Text,StyleSheet,TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import React from 'react'


// const Options = [{application_name:'drishti',image:require('../../assets/images/drishti.png')},{application_name:'aristi',image:require('../../assets/images/aristi.jpg')},{application_name:'collaxy',image:require('../../assets/images/collaxy.jpg')}]
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const ModalPicker = (props) => {
    const onPressItem = data => {
        props.changeModalVisibility(false)
        props.setData(data)
    }
    const option = props.Options.map((item,index)=>{
        return(
            <TouchableOpacity
                style={styles.option}
                onPress={()=> onPressItem(item)}
                key={index}
            >
                <Text style={styles.text}>{item.application_name}</Text>
            </TouchableOpacity>
        )
    })
  return (
    <TouchableOpacity
    // onPress={()=> props.changeModalVisibility(false)}
    style={styles.contianer}
    >
        <View style={[styles.modal,{width:WIDTH - 20, height:HEIGHT/2}]}>
            {option}
        </View>

    </TouchableOpacity>
  )
}

export default ModalPicker

const styles = StyleSheet.create({
    contianer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    modal:{
        backgroundColor:'yellow',
        borderRadius:10,
    },
    option:{
        alignItems:'flex-start'
    },
    text:{
        margin:20,
        fontSize:20,
        fontWeight:'bold'
    }
})