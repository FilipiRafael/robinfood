import React from 'react';
import { FlatList } from 'react-native';

import StatusCarrinho from '../../Components/StatusCarrinho';
import Item from './Item';

const servicos = [
  {
    id: 1,
    nome: 'Large Big tasty meal',
    preco: 79.9,
    descricao: '1 big tasty, 1 large french fries, 1 large drink.',
    imagem: require('../../assets/images/hamburger1.png'),
    quantidade: 1
  },
  {
    id: 2,
    nome: 'Hamburger',
    preco: 89.9,
    descricao: '1 Hamburger, 1 large french fries, 1 large drink.',
    imagem: require('../../assets/images/hamburger2.png'),
    quantidade: 1
  },
  {
    id: 3,
    nome: 'Cheeseburger',
    preco: 99.9,
    descricao: '1 Cheeseburger, 1 large french fries, 1 large drink.',
    imagem: require('../../assets/images/hamburger3.png'),
    quantidade: 1
  },
  {
    id: 4,
    nome: 'Chickenburger',
    preco: 59.9,
    descricao: '1 Chickenburger, 1 large french fries, 1 large drink.',
    imagem: require('../../assets/images/hamburger4.png'),
    quantidade: 1
  },
  {
    id: 5,
    nome: 'Japanese Food',
    preco: 129.9,
    descricao: '1 Chickenburger, 1 large french fries, 1 large drink.',
    imagem: require('../../assets/images/japanesefood.png'),
    quantidade: 1
  },
  {
    id: 6,
    nome: 'French Food',
    preco: 159.9,
    descricao: '1 Chickenburger, 1 large french fries, 1 large drink.',
    imagem: require('../../assets/images/frenchfood.png'),
    quantidade: 1
  }
];

export default function Carrinho() {

  const total = servicos.reduce((soma, {preco, quantidade}) => soma + (preco * quantidade), 0);

  return (
    <>
      <StatusCarrinho total={total} />
      <FlatList
        removeClippedSubviews={false}
        data={servicos}
        renderItem={({ item }) => (
          <Item {...item} />
        )}
        keyExtractor={({id}) => String(id)}
      />
    </>
  )
}