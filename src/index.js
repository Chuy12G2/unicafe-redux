import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import  counterReducer from './reducer';


const store = createStore(counterReducer)

const good = () => {
  store.dispatch({
  type: 'GOOD',
})
}

const ok = () => {
  store.dispatch({
  type: 'OK',
})
}

const bad = () => {
  store.dispatch({
  type: 'BAD',
})
}

const reset = () => {
  store.dispatch({
    type: 'ZERO'
  })
}

const App = () => {
  return(
    <div>
      <button onClick={() => good()}>good</button>
      <button onClick={() => ok()}>Ok</button>
      <button onClick={() => bad()}>Bad</button>
      <button onClick={() => reset()}>reset</button>
      <p>good {store.getState().good}</p>
      <p>ok {store.getState().ok}</p>
      <p>bad {store.getState().bad}</p>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


const renderApp = () => {
  root.render(<App />)
}

renderApp()
store.subscribe(renderApp)