import { AppDispatch, RootState } from '@/store/Store';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: '',
  isLoading: false,
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    deposit(state, action) {
      state.balance = state.balance + action.payload;
      state.isLoading = false;
    },
    withdrow(state, action) {
      state.balance = state.balance - action.payload;
    },
    requestLoan: {
      prepare(amount: number, loanPurpose: string) {
        return {
          payload: { amount, loanPurpose },
        };
      },
      reducer(
        state,
        action: PayloadAction<{ amount: number; loanPurpose: string }>
      ) {
        if (state.loan > 0) return state;

        state.loan = action.payload.amount;
        state.loanPurpose = action.payload.loanPurpose;
        state.balance = state.balance + action.payload.amount;
      },
    },

    payLoan(state) {
      state.balance -= state.loan;
      state.loan = 0;
      state.loanPurpose = '';
    },
    convertingCurrency(state) {
      state.isLoading = true;
    },
  },
});

export const { withdrow, requestLoan, payLoan } = accountSlice.actions;

export default accountSlice.reducer;

export function depositFunc(amount: number, currency: string) {
  if (currency === 'USD') return { type: 'account/deposit', payload: amount };
  return async function (dispatch: AppDispatch) {
    dispatch({ type: 'account/convertingCurrency' });
    const host = 'api.frankfurter.app';
    const res = await fetch(
      `https://${host}/latest?amount=${amount}&from=${currency}&to=USD`
    );
    const data = await res.json();
    const converted = data.rates.USD;
    dispatch({ type: 'account/deposit', payload: converted });
  };
}

// type AccountAction =
//   | { type: 'account/deposit' | 'account/withdrow'; payload: number }
//   | {
//       type: 'account/requestLoan';
//       payload: { amount: number; loanPurpose: string };
//     }
//   | { type: 'account/payLoan' | 'account/convertingCurrency' };

// export default function accountReducer(
//   state = initialStatet,
//   action: AccountAction
// ) {
//   switch (action.type) {
//     case 'account/deposit':
//       return {
//         ...state,
//         balance: state.balance + action.payload,
//         isLoading: false,
//       };
//     case 'account/withdrow':
//       return { ...state, balance: state.balance - action.payload };
//     case 'account/requestLoan':
//       if (state.loan > 0) return state;
//       return {
//         ...state,
//         loan: action.payload.amount,
//         loanPurpose: action.payload.loanPurpose,
//         balance: state.balance + action.payload.amount,
//       };
//     case 'account/payLoan':
//       return {
//         ...state,
//         loan: 0,
//         balance: state.balance - state.loan,
//         loanPurpose: '',
//       };
//     case 'account/convertingCurrency':
//       return { ...state, isLoading: true };
//     default:
//       return state;
//   }
// }

// export function deposit(amount: number, currency: string): AccountAction {
//   if (currency === 'USD') return { type: 'account/deposit', payload: amount };
//   return async function (dispatch, getState) {
//     dispatch({ type: 'account/convertingCurrency' });
//     const host = 'api.frankfurter.app';
//     const res = await fetch(
//       `https://${host}/latest?amount=${amount}&from=${currency}&to=USD`
//     );
//     const data = await res.json();
//     const converted = data.rates.USD;
//     dispatch({ type: 'account/deposit', payload: converted });
//   };
// }

// export function withdrow(amount: number): AccountAction {
//   return { type: 'account/withdrow', payload: amount };
// }

// export function requestLoan(amount: number, purpose: string): AccountAction {
//   return {
//     type: 'account/requestLoan',
//     payload: { amount, loanPurpose: purpose },
//   };
// }

// export function payLoan(): AccountAction {
//   return { type: 'account/payLoan' };
// }
