import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';

export const Welcome = () => (
  <View style={styles.container}>
    <View style={styles.titleContianer}>
      <Text style={styles.titleText}>
        SweatBook
      </Text>
    </View>
    <View style={styles.lastWorkoutContainer}>
      <Text style={styles.lastWorkoutTitleText}>
        Fitness log
      </Text>
    </View>
    <View style={{ padding: 30 }}>
      <TouchableOpacity
        style={styles.button}
      >
        <Text>Start Workout</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    alignItems: 'center',
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.2
  },
  titleText: {
    textAlign: 'center',
    fontSize: 48,
    fontWeight: 'bold',
    //color: 'blue',

  },
  lastWorkoutContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.3
  },
  lastWorkoutTitleText: {
    fontSize: 30,
    fontWeight: '100',
    // color: 'blue'
  },
  button: {
    flex: 0.3,
    padding: 10,
    borderWidth: 1,
    height: 40,
    //width: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#EADCDC',
    backgroundColor: 'blue',
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#EADCDC'
  }
});