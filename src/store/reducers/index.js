import * as actionTypes from '../action';

const initialState = {
  cryptoArray: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_CRYPTO_CURR_DATA:
      return {
        cryptoArray: state.cryptoArray.concat(action.storeCrypto),
      };
    case actionTypes.DELETE_CRYPTO_CURR_DATA:
      const updateCounterArray = state.updateCounterArray.filter(
        (item) => item.id !== action.cryptoId,
      );

      return {cryptoArray: updateCounterArray};
  }
  return state;
};

export default reducer;
