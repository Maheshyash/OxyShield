import React from 'react';
import {Provider } from 'react-redux';
import store from './src/redux/Store/store';
// import Login from './src/screens/Login';
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './src/redux/Store/store';
import {NavigationContainer} from '@react-navigation/native';
// import AppNavigation from './src/Navigations';
// import AppStack from './src/Navigations/AppStack';
import {DrawerNavigation} from './src/Navigations/DrawerNavigation';
const App = () => {
  return (
    <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
        {/* <AppStack/> */}
        <DrawerNavigation/>
      </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}

export default App
