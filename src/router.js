import React from 'react';
import {NavigationContainer, useIsFocused} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {StatusBar, View} from 'react-native';
import pages from './pages';

const Stack = createStackNavigator();
const stacks = Object.keys(pages).map((name) => ({
  name: name,
  component: pages[name],
  options: pages[name].options,
}));

const SafeStack = ({stack}) => {
  // const FocusAwareStatusBar = (props) => {
  //   const isFocused = useIsFocused();
  //   return isFocused ? <StatusBar {...props} /> : null;
  // };

  return (
    <>
      <StatusBar
        barStyle={`${stack.options?.statusBarStyle || 'dark'}-content`}
        backgroundColor={stack.options?.statusBarColor || 'transparent'}
        translucent={true}
      />
      <View
        style={{
          height: StatusBar.currentHeight,
          backgroundColor: 'transparent',
        }}
      />
      <stack.component />
    </>
  );
};

export default () => {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={stacks[0].name} headerMode="none">
          {stacks.map((item, index) => {
            const safeStack = () => <SafeStack stack={item} />;
            return (
              <Stack.Screen
                options={{
                  cardStyleInterpolator:
                    CardStyleInterpolators.forHorizontalIOS,
                    cardStyle: {flex: 1, backgroundColor: '#fff'},
                }}
                key={index}
                name={item.name}
                component={safeStack}
              />
            );
          })}
        </Stack.Navigator>
      </NavigationContainer>
  );
};
