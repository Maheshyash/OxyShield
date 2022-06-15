import { View, Text } from 'react-native'
import React from 'react'
import QrScanner from './QrScanner'
import FloatingButton from '../ActionComponent/FloatingButton'

const QrCodeScannerComponent = ({props}) => {
  console.log(props,'props inside QrCodeScannerComponent')
  return (
    <>
      <QrScanner navigation={props.navigation}/>
      {/* <FloatingButton /> */}
    </>
  )
}

export default QrCodeScannerComponent