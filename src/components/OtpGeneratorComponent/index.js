import {ScrollView, FlatList, View, Text, Button} from 'react-native';
import React from 'react';
import {connect, useSelector} from 'react-redux';
import OtpGenerator from './OtpGnerator';
import {bindActionCreators} from 'redux';
import {
  setSecretKeyUserData,
  deleteSecretKeyUserData,
} from '../../redux/Actions/SecretKeyActions';
const OtpGeneratorComponent = props => {
  const userDetails = useSelector(state => state.secreteData.userDetails);
  const state = useSelector(state => state);
  console.log(userDetails, 'userDetails');
  console.log(state, 'state');

  // const renderItem = ({ item }) => (
  //     <OtpGenerator userData={item} />
  //   );
  let data = {
    secret_key: 'ILQYFDXK4RZJMUWWPNWYJI2P4TK6H64U',
  };
  return (
    <ScrollView>
      {userDetails.length > 0 ? (
        userDetails.map((item, index) => (
          <OtpGenerator key={index} userData={item} />
        ))
      ) : (
        <View>
          <Text>No Otp's</Text>
        </View>
      )}
      <Button title='Add' onPress={()=>props.setSecretKeyUserData(data)}/>
        <Button title='delete' onPress={()=>props.deleteSecretKeyUserData()}/>
    </ScrollView>
  );
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {setSecretKeyUserData, deleteSecretKeyUserData},
    dispatch,
  ),
});
const mapStateToProps = state => ({});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OtpGeneratorComponent);
