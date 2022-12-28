import React, { useState, useContext } from 'react';

import { Text, View, Image } from 'react-native';
import CampoInteiro from '../../../Components/CampoInteiro';
import Botao from '../../../Components/Botao';

import { CarProductsContext } from '../../../contexts/carproducts';

import estilos from './estilos';

export default function Item({ id, nome, preco, descricao, imagem, quantidade: quantidadeInicial }) {
  const [quantidade, setQuantidade] = useState(quantidadeInicial);
  const [total, setTotal] = useState(preco * quantidadeInicial);

  const atualizaQuantidadeTotal = (novaQuantidade) => {
    setQuantidade(novaQuantidade);
    calculaTotal(novaQuantidade);
  };

  const calculaTotal = (novaQuantidade) => {
    setTotal(novaQuantidade * preco);
  };

  const { cartProducts, setCartProducts } = useContext(CarProductsContext);

  return (
    <>
      <View style={estilos.informacao}>
        <Image source={imagem} style={estilos.imagem} />
        <View>
          <Text style={estilos.nome}>{nome}</Text>
          <Text style={estilos.descricao}>{descricao}</Text>
          <Text style={estilos.preco}>
            {Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(preco)}
          </Text>
        </View>
      </View>
      <View style={estilos.carrinho}>
        <View>
          <View style={estilos.valor}>
            <Text style={estilos.descricao}>Quantidade:</Text>
            <CampoInteiro valor={quantidade} estilos={estilos.quantidade} acao={atualizaQuantidadeTotal} />
          </View>
          <View style={estilos.valor}>
            <Text style={estilos.descricao}>Preço:</Text>
            <Text style={estilos.preco}>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(total)}
            </Text>
          </View>
        </View>
        <Botao valor='Remover do Carrinho' acao={() => {
          const actualCartProducts = [...cartProducts];
          const productDeletedIndex = actualCartProducts.findIndex((product) => product.id === id);
          actualCartProducts.splice(productDeletedIndex, 1);
          setCartProducts(actualCartProducts);
        }} />
      </View>
      <View style={estilos.divisor} />
    </>
  )
}