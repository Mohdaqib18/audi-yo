import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import {shazamCoreApi} from "./services/shazamCore"

export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath] : shazamCoreApi.reducer,
    player: playerReducer,
  },

  middleWare: (getDefaultMiddleware) => getDefaultMiddleware().concat(shazamCoreApi.middleWare),


  
});
