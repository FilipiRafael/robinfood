import React, { useContext } from 'react';
import { FlatList } from 'react-native';

import StatusCarrinho from '../../Components/StatusCarrinho';
import Item from './Item';

import { CarProductsContext } from '../../contexts/carproducts';

export default function Carrinho() {

  const { cartProducts } = useContext(CarProductsContext);

  const total = cartProducts.reduce((soma, {preco, quantidade}) => soma + (preco * quantidade), 0);

  return (
    <>
      <StatusCarrinho total={total} />
      <FlatList
        removeClippedSubviews={false}
        data={cartProducts}
        renderItem={({ item }) => (
          <Item {...item} />
        )}
        keyExtractor={({id}) => String(id)}
      />
    </>
  )
}