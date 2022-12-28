import {  StyleSheet } from 'react-native';
import { cores } from '../../estilos';

export default StyleSheet.create({
  conteudo: {
    backgroundColor: cores.roxo,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: 24
  },
  total: {
    alignItems: 'center',
  },
  descricao: {
    fontSize: 16,
    color: cores.claro,
    fontWeight: 'bold'
  },
  valor: {
    fontSize: 18,
    fontWeight: 'bold',
    color: cores.laranja,
    marginTop: 5
  }
});