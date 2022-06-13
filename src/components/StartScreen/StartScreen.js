import {StyleSheet, View, Text, Button} from 'react-native';
import IdenfyReactNative from '@idenfy/react-native-sdk';
import React, {useState} from 'react';
import IdenfyApiService from '../../services/iDenfy';


const StartScreen = ({navigation}) => {
  const [title, setTitle] = useState('Welcome to Beera Station');
  const [subtitle, setSubtitle] = useState(
    'Press the button to begin identification!',
  );
  const [buttonTitle, setButtonTitle] = useState('START IDENTIFICATION');
  const [message, setMessage] = useState('--');
  const [sdkFlowComplete, setSdkFlowComplete] = useState(false);

  const handleIdenfyAuthToken = async () => {
    try {
      const response = await IdenfyApiService.getAuthToken()
      if (!response) {
        setMessage(
          'Error getting authToken, status code is: ' +
            response.status.toString() +
            '\n \n Response: ' +
            response.data.message,
        );
        setSdkFlowComplete(true);
      }
      startSDK(response.data.authToken, response.data.scanRef);
      return;
    } catch (error) {
      setMessage(error.message);
      setSdkFlowComplete(true);
    }
  };

  const startSDK = (authToken, scanRef) => {
    IdenfyReactNative.start({
      authToken: authToken,
    })
      .then(async response => {
        setMessage(JSON.stringify(response));
        setSdkFlowComplete(true);
        if (response.autoIdentificationStatus === 'APPROVED') {
          navigation.navigate('Wating', { scanRef: scanRef });
          return;
        }
      })
      .catch(error => {
        setMessage(error.code + ': ' + error.message);
        setSdkFlowComplete(true);
      });
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Button
        style={styles.button}
        onPress={async () => await handleIdenfyAuthToken()}
        title={buttonTitle}>
        AAA
      </Button>
      {sdkFlowComplete ? (
        <Text style={styles.resultMessage}>
          Identification result: {message}
        </Text>
      ) : null}
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

export default StartScreen;
