import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

export default ({state, dispatch}) => {
  
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const {themeColor}=state


  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#fff',
      }}>
      <View
        style={{
          width: '10%',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          paddingLeft: 15,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name="close-outline" size={26} />
        </TouchableOpacity>
      </View>

      <View
        style={{
          width: '77%',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <View
          style={{
            height: 40,
            width: '92%',
            marginLeft: 10,
            backgroundColor: '#eee',
            borderRadius: 50,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          <Icon
            name="search-outline"
            size={20}
            style={{marginLeft: 12, color: '#333'}}
          />

          <TextInput
            style={{
              paddingHorizontal: 8,
              width: '78%',
            }}
            placeholder="请输入你要搜索的内容"
            onChangeText={setSearchText}
            value={searchText}
          />

          {searchText.length > 0 ? (
            <Icon
              name="close-circle"
              size={20}
              style={{color: '#ddd'}}
              onPress={() => {
                setSearchText('');
              }}
            />
          ) : null}
        </View>
      </View>

      <View
        style={{
          width: '13%',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          paddingRight: 15,
        }}>
        <TouchableOpacity
          onPress={() => {
            // navigation.goBack();
          }}>
          <Text style={{color: themeColor, fontWeight: 'bold', fontSize: 16}}>
            搜索
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
