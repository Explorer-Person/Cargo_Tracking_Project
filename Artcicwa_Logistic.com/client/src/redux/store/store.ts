import {configureStore, combineReducers} from '@reduxjs/toolkit';
import deliveryReducer from '../slice/deliverySlice';
import { deliveryLogin } from '../slice/deliveryLogin';
import { deliveryLogout } from '../slice/deliveryLogout';



const reducers = combineReducers({
    delivery: deliveryReducer,
    [deliveryLogin.reducerPath]: deliveryLogin.reducer,
    [deliveryLogout.reducerPath]: deliveryLogout.reducer
})


export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>{
       return  getDefaultMiddleware({serializableCheck: false}).concat(deliveryLogin.middleware, deliveryLogout.middleware);
    } 
});



export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

