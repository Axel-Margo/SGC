import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"; // Utilisation de localStorage
import { persistReducer, persistStore } from "redux-persist";
import cartReducer from "./cartSlice";


const persistConfig = {
    key: "cart", 
    storage, 
  };

  const rootReducer = combineReducers({
    cart: cartReducer,  // Ajoute ton reducer de panier ici
  });


const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,  // Utiliser le reducer persistant
  });

export const persistor = persistStore(store);


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 