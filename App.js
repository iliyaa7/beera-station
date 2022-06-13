import React from 'react';
import { MyStack} from './src/components';
import {decode, encode} from 'base-64'


const App = () => {

  
  // solution for "ReferenceError: Can't find variable: btoa" while remote debug disconeted
  if (!global.btoa) {  global.btoa = encode }
  
  if (!global.atob) { global.atob = decode } 

  return (
    <>
      <MyStack/>
    </>
  );
};

export default App;
