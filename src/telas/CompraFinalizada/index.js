import React, { useContext, useEffect } from 'react';
import { View, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { CarProductsContext } from '../../contexts/carproducts';

import Botao from '../../Components/Botao';

import LottieView from 'lottie-react-native';
import estilos from './estilos';

export default function CompraFinalizada() {

  const navigation = useNavigation();
  const { setCartProducts } = useContext(CarProductsContext);
  const animation = React.createRef();

  const startAnimation = () => {
    animation.current.play();
  }

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <View style={estilos.container}>
      <LottieView
        source={require('../../assets/animations/cart.json')}
        style={{ width: 200, height: 200, marginBottom: 20 }}
        loop={true}
        ref={animation}
      />
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