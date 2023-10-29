import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HomeScreen2 = ({navigation, route}) => {
  const {message} = route?.params;
  return (
    <View style={styles.flex}>
      <Text style={styles.heading}>Message from Home Screen:</Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

export default HomeScreen2;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 15,
  },
  message: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
