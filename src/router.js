import React from 'react';
import {NavigationContainer, useIsFocused} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {StatusBar} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import pages from './pages';

const Stack = createStackNavigator();
const stacks = Object.keys(pages).map((name) => ({
  name: name,
  component: pages[name],
  options: pages[name].options,
}));

const safe = (item) => {
  const FocusAwareStatusBar = (props) => {
    const isFocused = useIsFocused();
    return isFocused ? <StatusBar {...props} /> : null;
  };

  return () => (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <FocusAwareStatusBar
        barStyle={`${item.options?.statusBarStyle || 'dark'}-content`}
        backgroundColor={item.options?.statusBarColor || 'transparent'}
        translucent={true}
      />
      <item.component />
    </SafeAreaView>
  );
};

export default () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={stacks[0].name} headerMode="none">
          {stacks.map((item, index) => (
            <Stack.Screen
              options={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              }}
              key={index}
              name={item.name}
              component={safe(item)}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
