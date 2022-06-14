import {StyleSheet, View, Text, TouchableOpacity, Linking, Alert} from 'react-native';
import React from 'react';
import { bindActionCreators } from 'redux';
import { setSecretKeyUserData } from '../../redux/Actions/SecretKeyActions';
import { connect } from 'react-redux';
import { RNCamera } from 'react-native-camera'
import BarcodeMask from 'react-native-barcode-mask';
import { useNavigation } from '@react-navigation/native';
import { URL, URLSearchParams } from 'react-native-url-polyfill';
class QrScanner extends React.Component{
  constructor(props){
    super(props)
    this.camera=null
    this.state={
      isError:false
    }
  }
  onFailure = () => {
      this.setState({isError:true})
      return Alert.alert(
        "Alert",
        "Invalid URL",
        [
          { text: "OK", onPress: () => this.setState({isError:false}) }
        ]
      );
    }
  onSuccess = e => {
    if(e.hasOwnProperty('data')){
      try{
        var URLData = e.data;
      var URLInfo = new URL(URLData);
      const secret_key = URLInfo.searchParams.get('secret');
      const application_name = URLInfo.searchParams.get('AppName');
      const company_name = URLInfo.searchParams.get('appowner');
      if(secret_key==null) return this.onFailure();
      else if(application_name==null) return this.onFailure();
      else if(company_name==null) return this.onFailure();
      let userData = {
        secret_key,
        application_name,
        company_name,
      };
      console.log(userData,'userData')
      props.setSecretKeyUserData(userData);
      this.props.navigation.navigate('Home'); 

      }
      catch(err){
        console.log('invalid url')
        this.setState({isError:true})
        Alert.alert(
          "Alert",
          "Invalid URL",
          [
            // {
            //   text: "Cancel",
            //   onPress: () => this.setState({isError:false}),
            //   style: "cancel"
            // },
            { text: "OK", onPress: () => this.setState({isError:false}) }
          ]
        );
      }
    } 
  };
      
      
  render(){
    return(
      <View style={styles.container}>
        {this.state.isError ==! true && <RNCamera
          style={{ flex: 1, alignItems: 'center' }}
          ref={ref => {
            this.camera = ref
          }}
          onBarCodeRead={this.onSuccess}
        >
          <BarcodeMask width={300} height={300} showAnimatedLine={true} outerMaskOpacity={0.5} animatedLineColor="green"/>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
            <View  style={styles.capture}>
              <Text style={{ fontSize: 24,color:'white' }}> Scan Qr-code </Text>
            </View>
        </View>
        </RNCamera>}
      </View>
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



