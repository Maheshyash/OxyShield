import { View, Text, TouchableOpacity,StyleSheet, } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useRoute } from '@react-navigation/native'
import Container from '../components/common/container/Container'
// import CustomButton from '../components/common/CustomButton'
import FloatingButton from '../components/ActionComponent/FloatingButton'
import OtpGeneratorComponent from '../components/OtpGeneratorComponent'
// import OtpGeneratorComponent from '../components/OtpGeneratorComponent'
// import { GlobalContext } from '../context/Provider'
const HomeScreen = () => {
    const navigation = useNavigation()
    const route = useRoute();

  return (
      <>
    <Container>
      <Text style={styles.textBold}>Otp Generator</Text>
      <OtpGeneratorComponent/>
    </Container>
          <FloatingButton />
    </>
  )
}

export default HomeScreen
const styles = StyleSheet.create({
    textBold: {
      fontWeight: '500',
      fontSize:40,
      color: '#000',
    },
    buttonText: {
      fontSize: 21,
      color:'black'
    },
  });