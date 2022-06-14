import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';


const SuccessScreen = ({navigation}) => {


  return (
    <View style={styles.root}>
      <Text style={styles.title}>Success</Text>
      <Text style={styles.subtitle}>
        The identification process was completed successfully
      </Text>
      <Button style={styles.button} onPress={() => navigation.navigate('Payment')} title="Add credit card">
        AAA
      </Button>
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

export default SuccessScreen;
