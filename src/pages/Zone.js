import React from 'react';
import {View, Text} from 'react-native';
import {action} from '../store';
import {useNavigation} from '@react-navigation/native';
import components from '../components';
const {MyHeader} = components;

export default ({state, dispatch}) => {
  const navigation = useNavigation();

  return (
    <>
      <MyHeader title="空间" />

      {/* profile,setting */}

      {/* tabs */}

      {/* content */}
    </>
  );
};
