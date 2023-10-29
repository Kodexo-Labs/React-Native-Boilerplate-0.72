import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {Button} from '../../components';
import {useTranslation} from 'react-i18next';
import i18n from '../../translation/i18next';
import {useDispatch} from 'react-redux';
import {changeLanguage} from '../../store/slices/auth';

const Settings = () => {
  const {t} = useTranslation();
  const dispatch = useDispatch();

  const onChangeLanguage = (lang = '') => {
    i18n.changeLanguage(lang);
    dispatch(changeLanguage(lang));
  };

  return (
    <View style={styles.flex}>
      <Text>Change Language</Text>
      <Button onPress={() => onChangeLanguage('en')} text="Change to english" />
      <Button onPress={() => onChangeLanguage('sp')} text="Change to spanish" />
      <Text>{t('Hello')}</Text>
    </View>
  );
};

export default Settings;
