import { View, Text } from 'react-native'
import React from 'react'
import AddAccountComponent from '../components/AddAccountComponent'
import FloatingButton from '../components/ActionComponent/FloatingButton'
const AddAccountScreen = (props) => {
  return (
    <>
    <AddAccountComponent/>
    <FloatingButton 
        navigation={props.navigation}
      />
    </>
  )
}

export default AddAccountScreen