import React, {useState} from 'react';
import {TextInput, SafeAreaView, StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {getAsteroidById, getAsteroidRandomly} from '../../actions/asteroidAction';

const InitialScreen = () => {

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const getValue = (value) => setValue(value);

  const searchById = () => {
    dispatch(getAsteroidById(value, () => navigation.navigate('ResultScreen')));
  };

  const searchRandomly = () => {
    dispatch(getAsteroidRandomly(() => navigation.navigate('ResultScreen')));
  };

  return (
    <SafeAreaView
      style={styles.safeArea}
    >
      <TextInput
        onChangeText={getValue}
        placeholderTextColor={'#828282'}
        autoCorrect={false}
        style={styles.input}
        placeholder={'Enter Asteroid ID'}
      />
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}>
        <TouchableOpacity
          disabled={!value}
          onPress={searchById}
          style={[styles.button, !value ? styles.disabled : null]}
        >
          <Text
            style={[styles.buttonText, !value ? styles.disabled : null]}
          >
            Search by id
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={searchRandomly}
          style={styles.button}
        >
          <Text
            style={styles.buttonText}
          >
            Random Asteroid
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default InitialScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#4C4C4C',
  },
  button: {
    height: 50,
    width: '40%',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    margin: 20,
    color: '#828282',
    fontSize: 25,
    height: 50,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: '#868686',
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
    fontSize: 15,
  },
  disabled: {
    color: 'grey',
    borderColor: 'grey',
  }
});
