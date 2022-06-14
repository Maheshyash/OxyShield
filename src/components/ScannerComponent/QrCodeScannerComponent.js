import { View, Text } from 'react-native'
import React from 'react'
import QrScanner from './QrScanner'
import FloatingButton from '../ActionComponent/FloatingButton'

const QrCodeScannerComponent = () => {
  return (
    <>
      <QrScanner />
      <FloatingButton />
    </>
  )
}

export default QrCodeScannerComponent