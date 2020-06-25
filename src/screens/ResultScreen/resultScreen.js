import React from 'react';
import {SafeAreaView, Text, StyleSheet, View, Linking} from 'react-native';
import {useSelector} from 'react-redux';

const Albums = () => {

  const asteroid = useSelector(state => state.asteroid.asteroid);

  const goTo = () => Linking.openURL(asteroid.nasa_jpl_url);

  return (
    <SafeAreaView
      style={styles.safeArea}
    >
      <View
        style={styles.item}
      >
        <Text>
          {`Name: `}
        </Text>
        <Text>{asteroid.name}</Text>
      </View>
      <View
        style={styles.item}
      >
        <Text>
          {`Nasa Url: `}
        </Text>
        <Text
          style={styles.link}
          onPress={goTo}
        >{asteroid.nasa_jpl_url}</Text>
      </View>
      <View
        style={styles.item}
      >
        <Text>
          {`Potentially hazardous asteroid: `}
        </Text>
        <Text>{asteroid.is_potentially_hazardous_asteroid ? 'Yes' : 'No'}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Albums;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#4C4C4C',
  },
  link: {
    color: 'aqua',
  },
  item: {
    flexDirection: 'row',
    marginVertical: 10,
  },
});
