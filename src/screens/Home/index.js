import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {Button} from '../../components';

const Home = ({navigation, route}) => {
  return (
    <View style={styles.flex}>
      <Text style={styles.text}>Home Screen 1</Text>
      <Button
        style={styles.button}
        text="Navigate to Home Screen 2"
        onPress={() =>
          navigation.navigate('HomeScreen2', {
            message: 'Hello from Home Screen',
          })
        }
      />
    </View>
  );
};

export default Home;
