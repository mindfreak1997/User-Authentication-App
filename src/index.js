import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import ConfigureStore from './Store/ConfigureStore';
import { allUsers } from './Actions/notesAction';
import { isLogin } from './Actions/userAction';

const store = ConfigureStore()

store.subscribe(() => {
  console.log(store.getState())
})
if (localStorage.getItem('token')) {
  store.dispatch(isLogin(true))
  store.dispatch(allUsers())

}

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);


