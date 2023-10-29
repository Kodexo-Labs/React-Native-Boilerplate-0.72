import React from 'react';
import {
  InputAccessoryView,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {isIOS} from '../utils';
import {COLORS} from '../constants';

const KeyboardActionBar = ({
  inputType,
  isButtonDisabled,
  nativeID,
  nextDisabled,
  onPressDone,
  onPressNext,
  onPressPrev,
  prevDisabled,
  style,
}) => {
  return (
    <>
      {isIOS && (
        <InputAccessoryView
          backgroundColor={'rgb(71,71,71,0.1)'}
          nativeID={nativeID}>
          <View style={[styles.container, style]}>
            <View style={styles.flexRow}>
              <TouchableOpacity
                disabled={prevDisabled}
                onPress={onPressPrev}
                style={styles.buttonContainer}>
                <AntDesign name="arrowup" style={{color: 'black'}} />
              </TouchableOpacity>

              <TouchableOpacity
                disabled={nextDisabled}
                onPress={onPressNext}
                style={styles.buttonContainer}>
                <AntDesign name="arrowdown" style={{color: 'black'}} />
              </TouchableOpacity>
            </View>
            {inputType && <Text style={styles.inputType}>{inputType}</Text>}
            <TouchableOpacity disabled={isButtonDisabled} onPress={onPressDone}>
              <Text
                style={
                  isButtonDisabled
                    ? styles.disableDoneButton
                    : styles.doneButton
                }>
                Done
              </Text>
            </TouchableOpacity>
          </View>
        </InputAccessoryView>
      )}
    </>
  );
};

export default KeyboardActionBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'red',
    height: 40,
    paddingHorizontal: 12,
  },
  flexRow: {
    flexDirection: 'row',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  inputType: {
    color: COLORS.grey,
    marginLeft: '-8%',
  },
  doneButton: {
    color: COLORS.black,
    fontSize: 16,
  },
  disableDoneButton: {
    color: COLORS.grey,
    fontSize: 16,
  },
});
