import React, {useState} from 'react';
import {View, Text, Vibration, Dimensions} from 'react-native';
import {action} from '../store';
import {useNavigation} from '@react-navigation/native';
import Modal from 'react-native-modal';
import {Button} from 'react-native-elements';

import components from '../components';

const {MyHeader, MyListView, MyPostDetailCard} = components;

const {width, height} = Dimensions.get('window');

export default ({state, dispatch}) => {
  const navigation = useNavigation();

  const {themeColor} = state;

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff', width, height}}>
      <MyHeader title="帖子详情" />

      <MyListView renderItem={() => <MyPostDetailCard />} />

      <Button
        style={{borderRadius: 0, backgroundColor: themeColor}}
        title="分享"
        onPress={() => {
          Vibration.vibrate(10);
          toggleModal();
        }}
      />

      <Modal
        statusBarTranslucent
        isVisible={isModalVisible}
        animationIn="fadeIn"
        animationOut="fadeOut"
        useNativeDriver
        useNativeDriverForBackdrop
        hideModalContentWhileAnimating
        onBackdropPress={toggleModal}
        onBackButtonPress={toggleModal}
        backdropOpacity={0.5}
        animationInTiming={100}
        backdropTransitionInTiming={100}
        animationOutTiming={100}
        backdropTransitionOutTiming={100}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              width: 300,
              height: 180,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#fff',
              borderRadius: 15,
            }}>
            <Text>hello</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};
