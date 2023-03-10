import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query/react';

export const store = configureStore({
    reducer:{

    },
    middleware:(getDefaultMiddleware:any)=>
        getDefaultMiddleware().concat(

        )
    
})
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

setupListeners(store.dispatch);
