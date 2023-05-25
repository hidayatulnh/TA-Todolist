import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'

import { ChakraProvider } from '@chakra-ui/react'


ReactDOM.render(
  <Provider>
    <ChakraProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>,
   </ChakraProvider>
  </Provider>,
  document.getElementById('root')  
  
);
