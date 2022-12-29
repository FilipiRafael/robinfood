import React from 'react';

import StackRoutes from './src/StackRoutes';
import TelaPadrao from './src/Components/TelaPadrao';

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import Reactotron from 'reactotron-react-native';

Reactotron.configure().useReactNative().connect();
console.tron = Reactotron;

export default function App() {

  return (
    <TelaPadrao>
      <StackRoutes />
    </TelaPadrao>
  );
}
