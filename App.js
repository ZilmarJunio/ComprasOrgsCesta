import {StatusBar, SafeAreaView } from 'react-native';
import React from 'react';
import Cesta from './src/telas/cesta';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar/>
      <Cesta/>
    </SafeAreaView>
 );
}