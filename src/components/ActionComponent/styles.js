import {
    StyleSheet,
  } from 'react-native';
import colors from '../../assets/theme/colors';
const styles = StyleSheet.create({
    wrapper: {
      alignItems: 'center',
      position: 'absolute',
      bottom: 100,
      right: 50,
    },
    button: {
        
      position:'absolute',
      width: 60,
      height: 60,
      borderRadius: 60 / 2,
      alignItems: 'center',
      justifyContent: 'center',
      shadowRadius: 10,
      shadowColor: '#f02a4b',
      shadowOpacity: 0.3,
      shadowOffset: {height: 10},
    },
    menu: {
      backgroundColor: colors.secondary1,
    },
    secondary: {
      width: 50,
      height: 50,
      borderRadius: 50 / 2,
      backgroundColor: '#FF9F45',
    },
    additioncolor1: {
      backgroundColor: '#FF9F45',
    },
    additioncolor2: {
      backgroundColor: '#FF9F45',
    },
  });

  export default styles;