import { StyleSheet } from 'react-native';
import { cores } from '../../../estilos';

export default StyleSheet.create({
  informacao: {
    width: '80%',
    padding: 24,
    flexDirection: 'row'
  },
  imagem: {
    width: 80,
    height: 80,
    borderRadius: 5,
    marginRight: 10
  },
  nome: {
    color: cores.escuro,
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5
  },
  calculo: {
    color: cores.escuro,
    fontSize: 14,
    marginVertical: 8
  },
  preco: {
    color: cores.roxo,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right'
  },
  divisor: {
    marginHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: cores.cinza
  },
  carrinho: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  valor: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    flexWrap: 'wrap',
  },
  descricao: {
    color: cores.escuro,
    fontSize: 16,
    marginRight: 8,
  },
  quantidade: {
    width: 42,
  }
});