import React, { useContext } from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import StatusCarrinho from '../../Components/StatusCarrinho';
import Item from './Item';
import Botao from '../../Components/Botao';

import { CarProductsContext } from '../../contexts/carproducts';

import estilos from './estilos';

export default function Carrinho() {

  const navigation = useNavigation();

  const { cartProducts } = useContext(CarProductsContext);

  const total = cartProducts.reduce((soma, {preco, quantidade}) => soma + (preco * quantidade), 0);

  return (
    <>
      <StatusCarrinho total={total} />
      {cartProducts.length === 0 ? 
      (
        <View style={estilos.container}>
          <Image
            source={require('../../assets/images/emptycart.png')}
            style={estilos.imagem}
          />
          <Text style={estilos.texto}>
            Nenhum produto ainda
          </Text>
          <Botao
            valor='Voltar para as comidas'
            estilos={estilos.botao}
            acao={() => navigation.navigate('Produtos')}
          />
        </View>
      )
      : (
        <FlatList
        removeClippedSubviews={false}
        data={cartProducts}
        renderItem={({ item }) => (
          <Item {...item} />
        )}
        keyExtractor={({id}) => String(id)}
        />
      )}
    </>
  )
}