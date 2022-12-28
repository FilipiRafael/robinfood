import React from 'react';
import { View, Text } from 'react-native';

import estilos from './estilos';

export default function Banner(){
  return (
    <View style={estilos.banner}>
      <Text style={estilos.texto}>Pedido adicionado ao carrinho!</Text>
    </View>
  )
}