import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

import Item from './Item';
import Banner from '../../Components/Banner';

const servicos = [
  {
    id: 1,
    nome: 'Large Big tasty meal',
    preco: 79.9,
    descricao: '1 big tasty, 1 large french fries, 1 large drink.',
    imagem: require('../../assets/images/hamburger1.png')
  },
  {
    id: 2,
    nome: 'Hamburger',
    preco: 89.9,
    descricao: '1 Hamburger, 1 large french fries, 1 large drink.',
    imagem: require('../../assets/images/hamburger2.png')
  },
  {
    id: 3,
    nome: 'Cheeseburger',
    preco: 99.9,
    descricao: '1 Cheeseburger, 1 large french fries, 1 large drink.',
    imagem: require('../../assets/images/hamburger3.png')
  },
  {
    id: 4,
    nome: 'Chickenburger',
    preco: 59.9,
    descricao: '1 Chickenburger, 1 large french fries, 1 large drink.',
    imagem: require('../../assets/images/hamburger4.png')
  },
  {
    id: 5,
    nome: 'Japanese Food',
    preco: 129.9,
    descricao: '1 Chickenburger, 1 large french fries, 1 large drink.',
    imagem: require('../../assets/images/japanesefood.png')
  },
  {
    id: 6,
    nome: 'French Food',
    preco: 159.9,
    descricao: '1 Chickenburger, 1 large french fries, 1 large drink.',
    imagem: require('../../assets/images/frenchfood.png')
  }
];

export default function Servicos() {

  const [exibeMensagem, setExibeMensagem] = useState(false);

  useEffect(() => {
    if (exibeMensagem) {
      setTimeout(() => {
        setExibeMensagem(false);
      }, 1000);
    }
  }, [exibeMensagem]);

  return (
    <>
      {exibeMensagem && <Banner />}
      <FlatList
        removeClippedSubViews={false}
        data={servicos}
        renderItem={({ item }) => (
          <Item {...item} exibirMensagem={setExibeMensagem} />
        )}
        keyExtractor={({id}) => String(id)}
      />
    </>
  )
}
