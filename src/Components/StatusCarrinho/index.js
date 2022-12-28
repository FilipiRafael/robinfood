import React, { useContext, useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { CarProductsContext } from '../../contexts/carproducts';

import Botao from '../Botao';
import Banner from '../Banner';

import estilos from './estilos';

export default function StatusCarrinho({ total }){

  const [exibeMensagem, setExibeMensagem] = useState(false);

  const { cartProducts } = useContext(CarProductsContext);
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      if (exibeMensagem) {
        setExibeMensagem(false);
      }
    }, 1000);
  }, [exibeMensagem]);

  return (
    <>
      <View style={estilos.conteudo}>
        <View style={estilos.total}>
          <Text style={estilos.descricao}>Total do Carrinho:</Text>
          <Text style={estilos.valor}>
            {
              Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(total)
            }
          </Text>
        </View>
        <View style={estilos.botao}>
          <Botao
            valor='Concluir Pedido'
            invertido acao={() => {
              if (cartProducts.length > 0) {
                navigation.navigate('CompraFinalizada');
              } else {
                setExibeMensagem(true);

              }
            }}
          />
        </View>
      </View>
      {exibeMensagem && <Banner mensagem='Nenhum pedido para concluir!' />}
    </>
  )
}