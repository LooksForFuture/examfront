import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
// import { OpenAPI } from 'types'

export interface CounterState {
  access: string
  refresh: string
}

const initialState: CounterState = {
  access: '',
  refresh: ''
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<{access: string; refresh: string}>) => {
      state.access = action.payload.access
      state.refresh = action.payload.refresh
      // OpenAPI.TOKEN = action.payload.access
    }
  },
})

// Action creators are generated for each case reducer function
export const { setAuth } = counterSlice.actions

export default counterSlice.reducer