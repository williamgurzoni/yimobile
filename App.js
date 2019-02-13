import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Header from './src/components/header';
import Invite from './src/pages/invite';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Invite />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
