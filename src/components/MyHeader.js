import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

export default ({title = '标题', left, right}) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#fff',
        borderBottomColor: '#eee',
        borderBottomWidth: 0.2,
      }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          paddingLeft: 15,
        }}>
        {left ? (
          left
        ) : (
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon name="close-outline" size={26} />
          </TouchableOpacity>
        )}
      </View>

      <View
        style={{
          flex: 3,

          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
        }}>
        <Text style={{color: '#000', fontSize: 16}}>{title}</Text>
      </View>

      <View
        style={{
          flex: 1,

          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
          paddingRight: 15,
        }}>
        {right ? right : null}
      </View>
    </View>
  );
};
