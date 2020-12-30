import React, {useEffect} from 'react';
import {View, Text, StyleSheet, BackHandler, ToastAndroid} from 'react-native';
import {action} from '../store';
import {useNavigation} from '@react-navigation/native';
import components from '../components';

const {MyHomeHeader, MyTabView, MyListView, MyPostCard} = components;

export default ({state, dispatch}) => {
  const navigation = useNavigation();
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', onBackButtonPressAndroid);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        onBackButtonPressAndroid,
      );
    };
  }, []);

  let lastBackPressed;

  const onBackButtonPressAndroid = () => {
    if (navigation.isFocused()) {
      if (lastBackPressed && lastBackPressed + 2000 >= Date.now()) {
        return false;
      } else {
        lastBackPressed = Date.now();
        ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
        return true;
      }
    }
  };

  return (
    <>
      <MyHomeHeader />
      <MyTabView
        tabNames={['推荐', '最新', '榜单', '推荐', '最新', '榜单']}
        tabComponents={[
          <MyListView renderItem={() => <MyPostCard />} data={arr} />,
          <MyListView renderItem={() => <MyPostCard />} data={arr} />,
          <MyListView renderItem={() => <MyPostCard />} data={arr} />,
          <MyListView renderItem={() => <MyPostCard />} data={arr} />,
          <MyListView renderItem={() => <MyPostCard />} data={arr} />,
          <MyListView renderItem={() => <MyPostCard />} data={arr} />,
        ]}
      />
    </>
  );
};
