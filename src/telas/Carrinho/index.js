import React from 'react';
import { FlatList } from 'react-native';

import StatusCarrinho from '../../Components/StatusCarrinho';
import Item from './Item';

const servicos = [
  {
    id: 1,
    nome: 'Banho',
    preco: 79.9,
    descricao: 'NÃO DE BANHO NO SEU GATO! Mas se precisar nós damos.',
    quantidade: 1
  },
  {
    id: 2,
    nome: 'Vacina v4',
    preco: 89.9,
    descricao: 'Uma dose da vacina v4. Seu gato precisa de duas.',
    quantidade: 2
  },
  {
    id: 3,
    nome: 'Vacina Antirrábica',
    preco: 99.9,
    descricao: 'Uma dose da vacina antirrábica. Seu gato precisa de uma por ano.',
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