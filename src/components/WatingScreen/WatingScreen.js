import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {varifayAge} from './utils';
import IdenfyApiService from '../../services/iDenfy';

const WatingScreen = ({navigation, route}) => {
  const [message, setMessage] = useState('You will be redirected in a moment');
  const scanRef = route.params.scanRef;

  useEffect(() => {
    const getVerificatedResponse = async () => {

      const response = await IdenfyApiService.getVerificationData(scanRef);
      if (!response.data.docDob) {
          throw new Error('something went wrong please try again');
      }
      userAgeVerified = varifayAge(response.data.docDob);
      if (userAgeVerified) {
        navigation.navigate('Success');
      } else {
        setMessage('You are not 18');
      }
    };
    try {
      getVerificatedResponse();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Wating for age varefication</Text>
      <Text style={styles.subtitle}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FBFBFB',
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    color: '#353B4E',
    marginTop: 64,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#353B4E',
    marginTop: 24,
  },
  resultMessage: {
    textAlign: 'center',
    color: '#536DFE',
    marginTop: 36,
    margin: 12,
  },
});

export default WatingScreen;
