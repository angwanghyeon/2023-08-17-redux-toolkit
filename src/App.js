import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './store';
import counterSlice from './counterSlice';
import { up } from './counterSlice';


function Counter(){
  const dispatch = useDispatch();
  const count = useSelector((state) => {
    // console.log(state);
    return state.counter.value;
  });

  return <div>
    <button onClick={()=>
      // dispatch({type:'counterSlice/up', step:2}
        dispatch(up(2))
      }>+</button> {count}
  </div>
}

function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter></Counter>
      </div>
    </Provider>
  );
}

export default App;
