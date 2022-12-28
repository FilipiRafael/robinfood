import React, { useState, useContext } from 'react';

import { Text, View, TouchableOpacity, Image } from 'react-native';
import CampoInteiro from '../../../Components/CampoInteiro';
import Botao from '../../../Components/Botao';

import estilos from './estilos';

import { CarProductsContext } from '../../../contexts/carproducts';

export default function Item({ id, nome, preco, descricao, imagem, exibirMensagem }) {
  const [quantidade, setQuantidade] = useState(1);
  const [total, setTotal] = useState(preco);
  const [expandir, setExpandir] = useState(false);

  const atualizaQuantidadeTotal = (novaQuantidade) => {
    setQuantidade(novaQuantidade);
    calculaTotal(novaQuantidade);
  };

  const calculaTotal = (novaQuantidade) => {
    setTotal(novaQuantidade * preco);
  };

  const inverteExpandir = () => {
    setExpandir(!expandir);
    atualizaQuantidadeTotal(1);
  };

  const { cartProducts, setCartProducts } = useContext(CarProductsContext);

  return (
    <>
      <TouchableOpacity style={estilos.informacao} onPress={inverteExpandir}>
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
      </TouchableOpacity>
      {expandir && <View style={estilos.carrinho}>
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
        <Botao
          valor='Adicionar ao Carrinho'
          acao={() => {
            exibirMensagem(true);
            if (!cartProducts.find((product) => product.id === id)) {
              const product = {
                id,
                nome,
                preco,
                descricao,
                imagem,
                quantidade
              };
              setCartProducts([...cartProducts, product]);
            }
          }}
        />
      </View>}
      <View style={estilos.divisor} />
    </>
  )
}