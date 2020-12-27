import React from 'react';
import {Dimensions} from 'react-native';

class MYAPI {
  constructor() {}
  getSize() {
    const {width, height} = Dimensions.get('window');
    return {width, height};
  }
}

const $API = new MYAPI();

export default $API;

