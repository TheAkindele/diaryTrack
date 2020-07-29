import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom'; import { Provider } from 'react-redux'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import store, { WaitTillAuth, rrfProps } from './redux/storeFolder/store'
import NavBar from './components/navFolder/Navbar'
import Footer from './components/footer-folder/Footer'

//1d. (cont'd from store.js) Then we call the function in our render
ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <BrowserRouter>
        <NavBar />
        <WaitTillAuth />
        <Footer />
      </BrowserRouter>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);
