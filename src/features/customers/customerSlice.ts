import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  fullName: '',
  nationalID: '',
  createAt: '',
};

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    createCustomer(
      state,
      action: PayloadAction<{
        fullName: string;
        nationalId: string;
      }>
    ) {
      state.fullName = action.payload.fullName;
      state.nationalID = action.payload.nationalId;
      state.createAt = new Date().toISOString();
    },
    updateName(state, action) {
      state.fullName = action.payload.fullName;
    },
  },
});

export const { createCustomer, updateName } = customerSlice.actions;

export default customerSlice.reducer;

// export type CustomerAction = { type: 'customer/createCustomer', payload: { fullName: string, nationalID: string, createdAt: string } } | { type: 'customer/updateName', payload: string }

// export default function customerReducer(state = initialStateCustomer, action: CustomerAction) {
//   switch (action.type) {
//     case 'customer/createCustomer':
//       return { ...state, fullName: action.payload.fullName, nationalID: action.payload.nationalID, createAt: action.payload.createdAt }
//     case 'customer/updateName':
//       return { ...state, fullName: action.payload }
//     default: return state;
//   }
// }

// export function createCustomer(fullName: string, nationalID: string): CustomerAction {
//   return { type: 'customer/createCustomer', payload: { fullName, nationalID, createdAt: new Date().toISOString() } }
// }

// export function updateName(fullName: string) {
//   return { type: 'customer/updateName', payload: fullName }
// }
