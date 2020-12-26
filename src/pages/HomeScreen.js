import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {action} from '../store';
import {useNavigation} from '@react-navigation/native';

import {FloatingAction} from 'react-native-floating-action';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';

export default ({state, dispatch}) => {
  const navigation = useNavigation();

  return (
    <View>
      {/* header */}
      <View></View>

      <Text
        onPress={() => {
          navigation.navigate('Detail');
        }}>
        跳转Detail
      </Text>

      {/* search */}
      <View></View>

      {/* tabs */}
      <View></View>

      {/* content */}
      <View></View>

      {/* fab */}

      <View style={{marginTop: 600}}>
        <FloatingAction
          position="right"
          actions={[
            {
              icon: <Icon name="add" />,
              name: 'add',
            },
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});
