import {StyleSheet, Text, TouchableOpacity, Linking} from 'react-native';
import React from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { useNavigation } from '@react-navigation/native';
import { bindActionCreators } from 'redux';
import { setSecretKeyUserData } from '../../redux/Actions/SecretKeyActions';
import { connect } from 'react-redux';
const QrScanner = (props) => {
    const navigation = useNavigation()
    const onSuccess = e => {
      var URLData =e.data
      var URLInfo = new URL(URLData);
      const secret_key = URLInfo.searchParams.get("secret")
      const application_name = URLInfo.searchParams.get("appName")
      const company_name = URLInfo.searchParams.get("appowner")
    let userData = {
        secret_key,
        application_name,
        company_name,
    }
    props.setSecretKeyUserData(userData)
      navigation.navigate("Home")
  };
    return (
      <QRCodeScanner
        onRead={onSuccess}
        // flashMode={RNCamera.Constants.FlashMode.torch}
        showMarker={true}
        containerStyle={{flex:1}}
        topContent={
          <Text style={styles.centerText}>
            <Text style={styles.textBold}>Scan the Qr code</Text>
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText} onPress={()=>navigation.navigate("SecretCode")}>Manual Typing</Text>
          </TouchableOpacity>
        }
      />
    );
}
const mapStateToProps = state =>({
    
})
const mapDispatchToProps = dispatch =>({
    ...bindActionCreators({setSecretKeyUserData},dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(QrScanner);
const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});



