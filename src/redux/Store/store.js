import { createStore } from "redux";
import rootReducer from "../RootReducer/rootReducer";
import { persistStore } from "redux-persist";
const store = createStore(rootReducer)
export const persistor = persistStore(store)

export default store;