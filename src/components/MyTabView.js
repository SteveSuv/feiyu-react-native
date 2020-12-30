import React from 'react';
import {Text, View} from 'react-native';
import {
  TouchableOpacity,
} from 'react-native-gesture-handler';
import ScrollableTabView from 'react-native-scrollable-tab-view';

const renderTabOption = (props, i) => {
  const isActive = props.activeTab == i;
  return (
    <View key={i}  style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomWidth:1,
      borderBottomColor: isActive ? '#000' : '#f8f8f8',
    }}>
      <TouchableOpacity
      activeOpacity={1}
        onPress={() => props.goToPage(i)}
       >
        <Text
          style={{
            fontSize:17,
            color: isActive ? '#000' : '#aaa',
            fontWeight: isActive ? 'bold' : 'normal',
          }}>
          {props.tabNames[i]}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const MyTabBar = (props) => {
  return (
    <View
      style={{
        height: 40,
        // borderBottomColor: '#eee',
        // borderBottomWidth: 0.2,
      }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
        }}>
        {props.tabs.map((tab, i) => renderTabOption(props, i))}
      </View>
    </View>
  );
};

export default ({tabNames, tabComponents}) => {
  return (
    <ScrollableTabView
      prerenderingSiblingsNumber={Infinity}
      renderTabBar={() => <MyTabBar tabNames={tabNames} />}>
      {tabComponents.map((item, index) => (
        <View style={{flex: 1}} key={index}>
          {item}
        </View>
      ))}
    </ScrollableTabView>
  );
};
