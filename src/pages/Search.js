import React from 'react';
import {Text, View} from 'react-native';
import components from '../components';

const {MySearchHeader}=components


export default () => {
  return (
    <View style={{flex:1,backgroundColor:'#fff'}}>
      <MySearchHeader />
    </View>
  );
};