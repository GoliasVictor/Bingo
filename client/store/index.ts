import vuex from 'vuex';
import Cartela from '../classes/cartela';

type GlobalStore  = {
  numeros: number[];
  cartelas: Cartela[];
}
export const state  : GlobalStore =  {
  numeros: [1, 534, 45, 23],
  cartelas : <Cartela[]>[],
};
export const getters = {
    contemNumero: (state : GlobalStore) => (numero: number) => {
      return state.numeros.includes(numero);
    }
};
export const mutations = {
    novaCartela(state : GlobalStore){
      state.cartelas.push(new Cartela());
    },
    mudarNumero(state : GlobalStore, {cartela,i , j , novoValor}  : any ) {
      console.log(cartela);
      const c = state.cartelas.find((c) => c == cartela );
      if(c){
        c.numeros[i][j] = novoValor;
      }
    },
    removerNumero(state : GlobalStore, numero : number) {
      const index = state.numeros.indexOf(numero);
      if (index > -1) {
       state.numeros.splice(index, 1);
      }
    },
    novoNumero(state : GlobalStore, numero: number) {
      state.numeros.push(numero)
    }
};
