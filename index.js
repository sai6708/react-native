/** @format */
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/commoncomponents/header';
import PEventsList from './src/components/PEventsList';

const App = () =>
(
  <View>
    <Header headerText={'Placements'} />
    <PEventsList />
  </View>
);

AppRegistry.registerComponent('main', () => App);
