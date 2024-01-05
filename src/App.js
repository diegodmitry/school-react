import logo from './logo.svg'
import {BrowserRouter, Switch, Routes} from 'react-router-dom';
import { applyMiddleware, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';
import './App.css'

const logger = ({getState, dispatch}) => next => action => {
  console.group('action.type', action.type);
  console.info('dispatching', action);
  let result = next(action);
  // console.log('next state', getState());
  console.groupEnd('action.type', action.type);
  return result;
}

// const logger = storeAPI => next => action => {
//   console.log('storeAPI', storeAPI);
//   // const { getState, dispatch } = storeAPI;
//   console.group('action.type', action.type);
//   console.info('dispatching', action);
//   let result = next(action);
//   // console.log('next state', getState());
//   console.groupEnd('action.type', action.type);
//   return result;
// }

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = configureStore({
//   reducer, 
//   composeEnhancers(_applyMiddleware(logger, thunk))
// });

const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger, thunk),
  devTools: process.env.NODE_ENV !== 'production',
});

console.log('store', store.getState());
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {/* <Route exact path="/" component={Home} />
          <Route path="/students" component={Students} />
          <Route path="/teachers" component={Teachers} />
          <Route path="/courses" component={Courses} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route component={NotFound} /> */}
        </Routes>
      </BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Provider>
  )
}

export default App
