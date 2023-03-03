import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '@Screens/Home';
import { Image } from 'react-native';
import { Icons } from '@Assets';

type BottomTabParamList = {
  Home: undefined;
  Notification: undefined;
  Payment: undefined;
  User: undefined;
};

type GetTabBarIconProps = {
  color: string;
  size: number;
};

export const BottomTab = createBottomTabNavigator();

const getTabBarIcon =
  (name: keyof BottomTabParamList) =>
  ({ size }: GetTabBarIconProps) => {
    const props = { width: size, height: size };
    switch (name) {
      case 'Home':
        return <Image {...props} source={Icons.home} />;
      case 'Notification':
        return <Image {...props} source={Icons.notification} />;
      case 'Payment':
        return <Image {...props} source={Icons.payment} />;
      case 'User':
        return <Image {...props} source={Icons.user} />;
      default:
        return <></>;
    }
  };

const MainTabNavigator: React.FC = (): React.ReactElement => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 100,
        },
      }}
      initialRouteName={'Home'}
    >
      <BottomTab.Screen
        component={Home}
        name={'Home'}
        options={{
          tabBarIcon: getTabBarIcon('Home'),
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        component={Home}
        name={'Notification'}
        options={{
          tabBarIcon: getTabBarIcon('Notification'),
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        component={Home}
        name={'Payment'}
        options={{
          tabBarIcon: getTabBarIcon('Payment'),
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        component={Home}
        name={'User'}
        options={{
          tabBarIcon: getTabBarIcon('User'),
          headerShown: false,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default MainTabNavigator;
