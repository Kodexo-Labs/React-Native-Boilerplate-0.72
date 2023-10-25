import {StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Settings} from '../../screens';
import {BottomTab, TabBarCustomButton} from '../../components';
import {COLORS} from '../../constants';

const Tab = createBottomTabNavigator();

const tabScreens = [
  {
    name: 'HomeStack',
    component: HomeStack,
    inactiveIcon: () => <AntDesign name="home" style={styles.inactiveIcon} />,
    activeIcon: () => <AntDesign name="home" style={styles.activeIcon} />,
  },
  {
    name: 'Settings',
    component: Settings,
    inactiveIcon: () => (
      <AntDesign name="setting" style={styles.inactiveIcon} />
    ),
    activeIcon: () => <AntDesign name="setting" style={styles.activeIcon} />,
  },
];

const BottomTabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tab_bar,
      }}>
      {tabScreens.map(item => (
        <Tab.Screen
          key={item.name}
          name={item.name}
          component={item.component}
          options={{
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: ({focused}) => {
              return (
                <BottomTab
                  focused={focused}
                  activeIcon={item.activeIcon}
                  inactiveIcon={item.inactiveIcon}
                  name={item.name}
                />
              );
            },
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarButton: props => <TabBarCustomButton {...props} />,
            tabBarActiveTintColor: COLORS.black,
            tabBarInactiveTintColor: COLORS.grey,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabStack;

const styles = StyleSheet.create({
  tab_bar: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
  },
  inactiveIcon: {
    color: COLORS.grey,
    fontSize: 25,
  },
  activeIcon: {
    color: COLORS.black,
    fontSize: 25,
  },
});
