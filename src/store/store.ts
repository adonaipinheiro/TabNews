import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/dist/query/react';

import {tabnewsApi} from './services/tabNews';

export const store = configureStore({
  reducer: {
    [tabnewsApi.reducerPath]: tabnewsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(tabnewsApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
