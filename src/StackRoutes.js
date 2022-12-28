import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Servicos from './telas/Servicos';
import CompraFinalizada from './telas/CompraFinalizada';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='ServicosScreen' component={Servicos} />
      <Stack.Screen name='CompraFinalizada' component={CompraFinalizada} />
    </Stack.Navigator>
  )
}