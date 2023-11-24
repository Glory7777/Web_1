import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Define initial state
const initialState = {
  loginInfo: null,
  isCust: false,
  isScmManager: false,
  isDelvManager: false,
  isExecutive: false,
  isPurcManager: false,
};

// Define actions
const actions = {
  logged: (payload) => ({ type: 'LOGGED', payload }),
  auth: (payload) => ({ type: 'AUTH', payload }),
  logout: () => ({ type: 'LOGOUT' }),
};

// Define reducers
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGGED':
      return { ...state, loginInfo: action.payload };
    case 'AUTH':
      let type = action.payload.type;
      console.log(type);
      switch (type) {
        case 'A':
          return { ...state, isScmManager: true };
        case 'B':
          return { ...state, isDelvManager: true };
        case 'C':
          return { ...state, isCust: true };
        case 'D':
          return { ...state, isPurcManager: true };
        case 'E':
          return { ...state, isExecutive: true };
        default:
          return state;
      }
    case 'LOGOUT':
      return {
        ...state,
        loginInfo: null,
        isCust: false,
        isScmManager: false,
        isDelvManager: false,
        isExecutive: false,
        isPurcManager: false,
      };
    default:
      return state;
  }
};

// Configure persist reducer
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['loginInfo', 'isCust', 'isScmManager', 'isDelvManager', 'isExecutive', 'isPurcManager'],
};

const persistedReducer = persistReducer(persistConfig, combineReducers({ rootReducer }));

// Create store
const store = createStore(persistedReducer, applyMiddleware(/* add middleware if needed */));
const persistor = persistStore(store);

export { store, persistor, actions };