import {StyleSheet, View, Text, TouchableOpacity, Linking, Alert} from 'react-native';
import React from 'react';
import { bindActionCreators } from 'redux';
import { setSecretKeyUserData } from '../../redux/Actions/SecretKeyActions';
import { connect } from 'react-redux';
import { RNCamera } from 'react-native-camera'
import BarcodeMask from 'react-native-barcode-mask';
import { useNavigation } from '@react-navigation/native';
import { URL, URLSearchParams } from 'react-native-url-polyfill';
import QRCodeScanner from 'react-native-qrcode-scanner';
// import { RNCamera } from 'react-native-camera';
class QrScanner extends React.Component{
  constructor(props){
    super(props)
    this.camera=null
    this.state={
      isError:false,
    }
  }
  onFailure = () => {
    this.setState({isError:true})
    this.setState({isActive:false})
    return Alert.alert(
      "Alert",
      "Invalid URL",
      [
        { text: "OK", onPress: () =>{ this.setState({isError:false})} }
      ]
    );
  }
  onSuccess = e => {
    this.setState({isError:true})
    if(e.hasOwnProperty('data')){
      if(!e.data.includes('otpauth://totp/Oxyshield'))return this.onFailure()
        var URLData = e.data;
        var URLInfo = new URL(URLData);
        const secret_key = URLInfo.searchParams.get('secret');
        const application_name = URLInfo.searchParams.get('AppName');
        const company_name = URLInfo.searchParams.get('appowner');
        let userData = {
          secret_key,
          application_name,
          company_name,
        };
        console.log(userData,'userData')
        if(secret_key==null) return this.onFailure();
        else if(application_name==null) return this.onFailure();
        else if(company_name==null) return this.onFailure();
        // this.props.setSecretKeyUserData(userData);
        Alert.alert(
          "Alert",
          "Success",
          [
            { text: "OK", onPress: () =>{ this.setState({isError:false}),this.props.setSecretKeyUserData(userData),this.props.navigation.navigate('Home')} }
          ]
        );
        // this.props.navigation.navigate('Home');
        // this.setState({isError:true})
        // Alert.alert(
        //   "Alert",
        //   "Invalid URL",
        //   [
        //     // {
        //     //   text: "Cancel",
        //     //   onPress: () => this.setState({isError:false}),
        //     //   style: "cancel"
        //     // },
        //     { text: "OK", onPress: () => this.setState({isError:false}) }
        //   ]
        // );
    } 
    
  };
  render(){
    console.log(this.props,'this.props inside Qr Scanner')
    return(
      <View style={styles.container}>
        {this.state.isError ==! true && <RNCamera
          style={{ flex: 1, alignItems: 'center' }}
          ref={ref => {
            this.camera = ref
          }}
          onBarCodeRead={this.state.isError ==! true && this.onSuccess}
        >
          <BarcodeMask width={300} height={300} showAnimatedLine={true} outerMaskOpacity={0.5} animatedLineColor="green"/>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
            <View  style={styles.capture}>
              <Text style={{ fontSize: 24,color:'white' }}> Scan Qr-code </Text>
            </View>
        </View>
        </RNCamera>}
      </View>
      // <View style={{flex:1}}>
      // <QRCodeScanner
      //   onRead={this.onSuccess}
      //   // flashMode={RNCamera.Constants.FlashMode.torch}
      //   topContent={
      //     <Text style={{fontSize:18,fontWeight:'600'}}>
      //       Scan Qr-Code
      //     </Text>
      //   }
      //   // bottomViewStyle={{display:'none'}}
      //   // topViewStyle={{display:'none'}}
      //   showMarker={true}
      //   reactivate={this.state.isActive}
      //   cameraTimeout={5000}
      // />
      // </View>
    )
  }
}
const mapStateToProps = state =>({
    
})
const mapDispatchToProps = dispatch =>({
    ...bindActionCreators({setSecretKeyUserData},dispatch)
})
const NavigationProvider = (Component) => {
  const Wrapper = (props) => {
    const navigation = useNavigation();
    return (
      <Component
        navigation={navigation}
        {...props}
        />
    );
  };
  
  return Wrapper;
};
export default connect(mapStateToProps, mapDispatchToProps)(NavigationProvider(QrScanner));
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  capture: {
    flex: 1,
    backgroundColor: 'grey',
    // borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'flex-start',
    // margin: 20,
  },
})



