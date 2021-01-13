import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './app'
import { configureStore } from './store'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import { DataProvider } from './db'

const store = configureStore()

const Root = () => (
  <Provider store={store}>
    <DataProvider>
      <App />
    </DataProvider>
  </Provider>
)

ReactDOM.render(<Root />, document.getElementById('root'))

serviceWorker.register()
