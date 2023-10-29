import React, {useRef, useState} from 'react';
import {View, Text, KeyboardAvoidingView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useFormik} from 'formik';
import {Button, KeyboardActionBar, TextInput} from '../../components';
import styles from './styles';
import {capitalizeFirstLetter, isIOS} from '../../utils';
import {signInDefault, signInSchema} from '../../utils/form/schema';
import {useLoginMutation} from '../../services/auth';
import Toast from 'react-native-toast-message';
import {CommonActions} from '@react-navigation/native';

const Login = ({navigation, route}) => {
  const [inputType, setInputType] = useState('Email');
  const [inputId, setInputId] = useState('email');

  const emailRef = useRef();
  const passwordRef = useRef();

  const [login, {isLoading}] = useLoginMutation();

  const setActionBarProps = (textInputType = '') => {
    setInputId(textInputType);
    setInputType(capitalizeFirstLetter(textInputType));
    switch (textInputType?.toLowerCase()) {
      case 'email':
        emailRef.current?.focus();
        break;
      case 'password':
        passwordRef.current?.focus();
        break;
      default:
        break;
    }
  };

  const callApi = async (values, onSuccess = () => {}, onError = () => {}) => {
    await login(values)
      .unwrap()
      .then(response => {
        console.log(response);
        Toast.show({
          type: 'success',
          position: 'bottom',
          text1: 'Success',
          text2: response?.message,
        });
        onSuccess();
      })
      .catch(error => {
        console.log(error);
        onError();
        Toast.show({
          type: 'error',
          position: 'bottom',
          text1: 'Error',
          text2: error?.data?.message,
        });
      });
  };

  const {
    errors,
    values,
    handleSubmit,
    resetForm,
    handleChange,
    handleBlur,
    touched,
  } = useFormik({
    validationSchema: signInSchema,
    initialValues: signInDefault,
    enableReinitialize: true,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: data => {
      callApi(
        {email: data.email.toLowerCase(), password: data.password},
        () => {
          resetForm();
          navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [{name: 'BottomTabStack'}],
            }),
          );
        },
      );
    },
  });

  return (
    <>
      <KeyboardAvoidingView behavior={isIOS && 'padding'} style={styles.flex}>
        <Text style={styles.heading}>Login</Text>
        <View style={styles.inputContainer}>
          <TextInput
            _ref={emailRef}
            containerStyle={styles.input}
            placeholder={'Email'}
            value={values.email}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            onFocus={() => setActionBarProps('email')}
            onSubmitEditing={() => passwordRef.current?.focus()}
            icon={<AntDesign name={'mail'} style={styles.icon} />}
            error={touched?.email && errors?.email ? errors?.email : null}
          />
          <TextInput
            _ref={passwordRef}
            containerStyle={styles.input}
            onChangeText={handleChange('password')}
            value={values.password}
            placeholder={'Password'}
            onBlur={handleBlur('password')}
            onFocus={() => setActionBarProps('password')}
            secureTextEntry
            icon={<AntDesign name={'lock'} style={styles.icon} />}
            error={
              touched?.password && errors?.password ? errors?.password : null
            }
          />
        </View>
        <Button
          loading={isLoading}
          onPress={() => handleSubmit()}
          style={styles.button}
          text="Sign In"
        />
      </KeyboardAvoidingView>
      <KeyboardActionBar
        inputType={inputType}
        nativeID={inputId}
        // onPressDone={() => onPressDone()}
        // onPressNext={() => setNextActionBarController()}
        // onPressPrev={() => setPrevActionBarController()}
      />
    </>
  );
};

export default Login;
