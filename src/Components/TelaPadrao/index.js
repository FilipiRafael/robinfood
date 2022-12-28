import React from 'react';
import { SafeAreaView, KeyboardAvoidingView, Platform, StatusBar } from 'react-native';

import estilosGlobais, { cores } from '../../estilos';
import estilos from './estilos';

export default function TelaPadrao({ children }) {
  return (
    <>
      <SafeAreaView style={estilos.ajusteTela}>
        <StatusBar backgroundColor={cores.roxo} barStyle='light-content' />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={estilosGlobais.preencher}
        >
        {children}
        </KeyboardAvoidingView>
      </SafeAreaView>
      <SafeAreaView style={estilos.ajusteTelaBaixo} />
    </>
  )
}