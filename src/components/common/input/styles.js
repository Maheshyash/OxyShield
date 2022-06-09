import {StyleSheet} from 'react-native'
import colors from '../../../assets/theme/colors'
export default StyleSheet.create({
    textInput:{
        flex:1,
        width:"100%",
        fontSize:15
    },
    inputContainer:{
        paddingVertical:15
    },
    label:{
        fontSize:18
    },
    wrapper:{
        height:50,
        // borderWidth:1,
        borderBottomWidth:2,
        borderRadius:4,
        paddingHorizontal:5,
        // alignItems:'center',
        marginTop:5
    },
    error:{
        color:colors.danger
    }
})