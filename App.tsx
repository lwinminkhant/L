/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import {Text, TouchableOpacity, useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {SCREENS} from './ScreenRouters';
import {navigationRef} from './nav/nav_helper';
import {Provider, useDispatch, useSelector} from 'react-redux';
import counterReducer from './app/counterReducer';
import {combineReducers, createStore} from 'redux';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const RootNavigation = () => {
  return (
    <>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName={SCREENS.LOGIN.name}>
          <Stack.Screen
            options={{headerShown: true}}
            name={SCREENS.LOGIN.name}
            component={SCREENS.LOGIN.component}></Stack.Screen>

          <Stack.Screen
            options={{headerShown: true}}
            name={SCREENS.SIGNUP.name}
            component={SCREENS.SIGNUP.component}></Stack.Screen>

          <Stack.Screen
            name="BottomNav"
            component={BottomNavigator}
            options={{
              gestureEnabled: false,
            }}
          />

          <Stack.Screen
            name={SCREENS.HOME_TAB.name}
            component={SCREENS.HOME_TAB.component}></Stack.Screen>

          <Stack.Screen
            name={SCREENS.MID_TAB.name}
            component={SCREENS.MID_TAB.component}></Stack.Screen>

          <Stack.Screen
            name={SCREENS.LOGOUT_TAB.name}
            component={SCREENS.LOGOUT_TAB.component}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const BottomNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: true}}>
      <Tab.Screen
        name={SCREENS.HOME_TAB.name}
        component={SCREENS.HOME_TAB.component}
      />
      <Tab.Screen
        name={SCREENS.MID_TAB.name}
        component={SCREENS.MID_TAB.component}
      />
      <Tab.Screen
        name={SCREENS.LOGOUT_TAB.name}
        component={SCREENS.LOGOUT_TAB.component}
      />
    </Tab.Navigator>
  );
};

function MyTabBar(state: any, descriptors: any, navigation: any) {
  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map((route: any, index: any) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1}}>
            <Text style={{color: isFocused ? '#673ab7' : '#222'}}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const rootReducer = combineReducers({
    counter: counterReducer,
  });

  const store = createStore(rootReducer);
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
}

export default App;
