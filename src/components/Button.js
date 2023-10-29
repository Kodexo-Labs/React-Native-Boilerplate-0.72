import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {COLORS} from '../constants';

const Button = ({onPress, text = 'Press Me', style, loading, textStyle}) => {
  return (
    <TouchableOpacity
      disabled={loading}
      onPress={onPress}
      style={[styles.container, style]}>
      {loading ? (
        <ActivityIndicator size={'small'} />
      ) : (
        <Text style={[styles.text, textStyle]}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.black,
    borderRadius: 30,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: COLORS.white,
    fontSize: 20,
  },
});
