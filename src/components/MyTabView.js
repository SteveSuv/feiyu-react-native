import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity, Dimensions} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

const MyTabBar = (props) => {
  const renderTabOption = (tab, i) => {
    const isActive = props.activeTab == i;
    return (
      <TouchableOpacity
        key={i}
        onPress={() => props.goToPage(i)}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: isActive ? '#000' : '#fff',
        }}>
        <Text
          style={{
            fontSize: 17,
            color: isActive ? '#000' : '#AAA',
            fontWeight: isActive ? 'bold' : 'normal',
          }}>
          {props.tabNames[i]}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        height: 40,
        borderBottomColor: '#eee',
        borderBottomWidth: 0.2,
      }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
        }}>
        {props.tabs.map((tab, i) => renderTabOption(tab, i))}
      </View>
    </View>
  );
};

export default ({tabNames, tabComponents}) => {
  return (
    <>
      <ScrollableTabView
        prerenderingSiblingsNumber={Infinity}
        renderTabBar={() => <MyTabBar tabNames={tabNames} />}>
        {tabComponents.map((item, index) => (
          <View tablabel={index} key={index}>
            {item}
          </View>
        ))}
      </ScrollableTabView>
    </>
  );
};
