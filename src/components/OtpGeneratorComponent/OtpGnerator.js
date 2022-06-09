import {ScrollView, View, Text, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';


const OtpGnerator = ({userData})=> {
    // const secret_key = "ILQYFDXK4RZJMUWWPNWYJI2P4TK6H64U"
  const userDetails = useSelector(state => state);
  const [sec, setsec] = useState()
  const totp = require('totp-generator');
  const date = new Date();
  const time1 = date.getTime();
  const token = userData.secret_key
    ? totp(userData.secret_key, {timestamp: time1})
    : '';
  const useProgress = () => {
    useEffect(() => {
      const intervalId = setInterval(() => {
        if (new Date().getSeconds() > 30) {
          setsec(new Date().getSeconds() - 30);
        } else {
          if (new Date().getSeconds() == 0) {
            return setsec(30);
          }
          setsec(new Date().getSeconds());
        }
      }, 1000);
      return () => clearInterval(intervalId);
    }, []);
    return sec;
  };
  const getTimerColor = sec => {
    return sec > 20 ? 'red' : 'green';
  };
  var progress = useProgress();
  return (
      <View style={styles.itemlist}>
        <View>
          <Text style={[styles.timer, {color: getTimerColor(sec)}]}>{progress}</Text>
        </View>
        <Text style={styles.datas}>{token}</Text>
      </View>
  );
};

export default OtpGnerator;

const styles = StyleSheet.create({
  itemlist: {
    minHeight: 100,
    backgroundColor: 'yellow',
    width: '100%',
    marginVertical: 5,
    borderRadius: 20,
    elevation: 5,
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 10},
    shadowRadius: 20,
    padding: 10,
    textAlign: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  datas: {
    letterSpacing: 20,
    fontSize: 30,
    color: '#000',
  },
  timer: {
    fontSize: 30,
    color: '#000',
  },
});
