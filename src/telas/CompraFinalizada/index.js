import React, { useContext } from 'react';
import { View, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { CarProductsContext } from '../../contexts/carproducts';

import Botao from '../../Components/Botao';

import estilos from './estilos';

export default function CompraFinalizada() {

  const navigation = useNavigation();
  const { setCartProducts } = useContext(CarProductsContext)

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Muito obrigado!</Text>
      <Text style={estilos.subtitulo}>
        Agradecemos a preferência, seu pedido chegará em breve.
      </Text>
      <Botao
        valor='Retornar aos produtos'
        estilos={estilos.botao}
        acao={() => {
          setCartProducts([]);
          navigation.navigate('ServicosScreen');
        }}
      />
    </View>
  )
}