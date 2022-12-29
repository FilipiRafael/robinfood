import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Servicos from './telas/Servicos';
import Carrinho from './telas/Carrinho';

import CarProductsProvider from './contexts/carproducts';

import { cores } from './estilos';

export default function AppRoutes() {

  const Tab = createBottomTabNavigator();

  return (
    <CarProductsProvider>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: cores.roxo,
          inactiveTintColor: cores.escuro,
          activeBackgroundColor: cores.roxo,
          inactiveBackgroundColor: cores.laranja,
          style: {
            height: 70
          },
          labelStyle: {
            width: '100%',
            flex: 1,
            fontWeight: 'bold',
            fontSize: 16,
            lineHeight: 21,
            marginTop: 3,
            paddingTop: 21,
            backgroundColor: cores.claro
          },
          keyboardHidesTabBar: true
        }}
      >
        <Tab.Screen name='Produtos' component={Servicos} />
        <Tab.Screen name='Carrinho' component={Carrinho} />
    </Tab.Navigator>
  </CarProductsProvider>
  )
}