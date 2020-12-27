import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import components from '../components';

const {MyHeader}=components

export default ({state, dispatch}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const {themeColor}=state


  const navigation = useNavigation();
  return (
    <>
      <MyHeader
        title="发个帖子"
        right={
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Text style={{color: themeColor, fontWeight: 'bold', fontSize: 16}}>
              发布
            </Text>
          </TouchableOpacity>
        }
      />

      {/* 工具栏 */}
      <View></View>

      {/* 标题 */}
      <View
        style={{
          paddingHorizontal: 15,
          borderBottomColor: '#eee',
          borderBottomWidth: 0.2,
        }}>
        <TextInput
          multiline
          style={{
            fontWeight: 'bold',
            fontSize: 20,
          }}
          placeholder="请输入标题"
          onChangeText={setTitle}
          value={title}
        />
      </View>

      {/* 正文 */}
      <View
        style={{
          paddingHorizontal: 15,
        }}>
        <TextInput
          multiline
          style={{
            fontSize: 17,
          }}
          placeholder="请输入正文"
          onChangeText={setContent}
          value={content}
        />
      </View>
    </>
  );
};
