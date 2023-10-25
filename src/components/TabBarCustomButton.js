import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

const TabBarCustomButton = ({children, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      style={styles.tab_bar_btn}>
      {children}
    </TouchableOpacity>
  );
};

export default TabBarCustomButton;

const styles = StyleSheet.create({
  tab_bar_btn: {
    flex: 1,
    justifyContent: 'center',
    width: 50,
    height: 70,
    alignItems: 'center',
  },
});
