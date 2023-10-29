import {Text, StyleSheet} from 'react-native';
import React from 'react';

const BottomTab = ({focused, activeIcon = null, inactiveIcon = null, name}) => {
  return (
    <>
      {focused ? activeIcon() : inactiveIcon()}
      <Text style={[styles.tabName, focused ? styles.active : styles.inactive]}>
        {name}
      </Text>
    </>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  tabName: {
    fontSize: 14,
  },
  active: {
    color: 'black',
  },
  inactive: {
    color: 'gray',
  },
});
