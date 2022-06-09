import { View, Text } from 'react-native'
import React from 'react'
import QrCodeScannerComponent from '../components/ScannerComponent/QrCodeScannerComponent'

const QrScannerScreen = () => {
  return (
    <View>
      <QrCodeScannerComponent />
    </View>
  )
}

export default QrScannerScreen