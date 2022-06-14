import React from 'react';
import {Provider } from 'react-redux';
import store from './src/redux/Store/store';
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './src/redux/Store/store';
import {NavigationContainer} from '@react-navigation/native';
import {DrawerNavigation} from './src/Navigations/DrawerNavigation';
import { StatusBar } from 'react-native';
import colors from './src/assets/theme/colors';
const App = () => {
  return (
    <Provider store={store}>
     <StatusBar backgroundColor={colors.primary1}/>
     <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
        <DrawerNavigation/>
      </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}

export default App
