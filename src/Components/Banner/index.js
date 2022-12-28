import React from 'react';
import { View, Text } from 'react-native';

import estilos from './estilos';

export default function Banner({ mensagem }){
  return (
    <View style={estilos.banner}>
      <Text style={estilos.texto}>{mensagem}</Text>
    </View>
  )
}