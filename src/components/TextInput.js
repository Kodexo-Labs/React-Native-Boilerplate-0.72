import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../constants';
import Entypo from 'react-native-vector-icons/Entypo';

const CustomTextInput = ({
  _ref,
  icon = null,
  value,
  onChangeText,
  secureTextEntry = false,
  containerStyle,
  onFocus,
  onBlur,
  textInputStyle,
  placeholder,
  type,
  returnKeyType,
  onSubmitEditing,
  error = null,
}) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <View style={[styles.container, containerStyle]}>
        {icon}
        <TextInput
          ref={_ref}
          inputMode={type}
          onFocus={onFocus}
          returnKeyType={returnKeyType}
          value={value}
          onBlur={onBlur}
          onSubmitEditing={onSubmitEditing}
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={visible ? false : secureTextEntry}
          style={[
            secureTextEntry
              ? styles.secureInputContainer
              : styles.inputContainer,
            textInputStyle,
          ]}
        />
        {secureTextEntry ? (
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => setVisible(val => !val)}>
            {visible ? (
              <Entypo name="eye" style={styles.icon} />
            ) : (
              <Entypo name="eye-with-line" style={styles.icon} />
            )}
          </TouchableOpacity>
        ) : null}
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: COLORS.grey,
  },
  secureInputContainer: {
    borderRadius: 30,
    padding: 0,
    paddingHorizontal: 12,
    width: '75%',
    height: 50,
  },
  inputContainer: {
    borderRadius: 30,
    paddingHorizontal: 12,
    padding: 0,
    width: '90%',
    height: 50,
  },
  iconContainer: {
    justifyContent: 'center',
  },
  icon: {
    fontSize: 22,
    paddingHorizontal: 12,
    paddingRight: 20,
  },
  error: {
    color: 'red',
    marginTop: -8,
    marginLeft: 12,
  },
});
