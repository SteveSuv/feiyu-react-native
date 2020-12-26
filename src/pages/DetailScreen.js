import React, {useRef, useState} from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';
import {action} from '../store';
import {useNavigation} from '@react-navigation/native';

import {
  Modal,
  ModalButton,
  ModalContent,
  ModalFooter,
  ModalTitle,
  ScaleAnimation,
} from 'react-native-modals';


export default ({state, dispatch}) => {
  const navigation = useNavigation();

  const [visible, setVisible] = useState(false);

  return (
    <View>
      {/* header */}

      {/* content */}
      <Text
        onPress={() => {
          navigation.navigate('Home');
        }}>
        跳转Home
      </Text>

      <View>
        <Button
          title="Show Modal"
          onPress={() => {
            setVisible(true);
          }}
        />
        <Modal
          visible={visible}
          swipeDirection={['up', 'down']}
          swipeThreshold={200}
          onTouchOutside={() => {
            setVisible(false);
          }}
          onSwipeOut={(event) => {
            setVisible(false);
          }}
          modalAnimation={
            new ScaleAnimation({
              initialValue: 0, // optional
              useNativeDriver: true, // optional
            })
          }>
          <ModalTitle title="Modal Title" />
          <ModalContent>
            <View
              style={{
                width: 300,
                height: 150,
              }}>
              <Text>666</Text>
            </View>
          </ModalContent>
          <ModalFooter>
            <ModalButton
              text="CANCEL"
              onPress={() => {
                setVisible(false);
              }}
            />
            <ModalButton
              text="OK"
              onPress={() => {
                setVisible(false);
              }}
            />
          </ModalFooter>
        </Modal>
      </View>

      {/* comment */}
    </View>
  );
};
