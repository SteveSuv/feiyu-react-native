import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

export default () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        height: 50,
        paddingHorizontal: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View
        style={{
          flex: 4,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 16,marginRight:3}}>中国海洋大学</Text>
        <Icon name="chevron-down-outline" size={20} />
      </View>
      <View
        style={{
          flex: 2,
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Search');
          }}>
          <Icon name="search-outline" size={25} />
        </TouchableOpacity>
        <View style={{marginRight: 15}}></View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Edit');
          }}>
          <Icon name="add-circle-outline" size={25} />
        </TouchableOpacity>
        <View style={{marginRight: 15}}></View>
        <Avatar
          onPress={() => navigation.navigate('Zone')}
          size={25}
          rounded
          source={{
            uri:
              'https://pic2.zhimg.com/v2-da35ca7534692402d1a492082f64c3d8_is.jpg',
          }}
        />
      </View>
    </View>
  );
};
