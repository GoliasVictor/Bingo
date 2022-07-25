import vuex from 'vuex';
import Cartela from './classes/cartela';

export default new vuex.Store({
  state: {
    numeros: [1, 534, 45, 23],
    cartelas : <Cartela[]>[],
  },
  getters: {
    contemNumero: (state) => (numero: number) => {
      return state.numeros.includes(numero);
    }
  },
  mutations: {
    novaCartela(state){
      state.cartelas.push(new Cartela());
    },

    mudarNumero(state, {cartela,i, j, novoValor} ) {
      console.log(cartela);
      const c = state.cartelas.find((c) => c == cartela );
      if(c){
        c.numeros[i][j] = novoValor;
      }
    },
    removerNumero(state, numero) {
      const index = state.numeros.indexOf(numero);
      if (index > -1) {
       state.numeros.splice(index, 1);
      }
    },
    novoNumero(state, numero) {
      state.numeros.push(numero)
    }
  }
})