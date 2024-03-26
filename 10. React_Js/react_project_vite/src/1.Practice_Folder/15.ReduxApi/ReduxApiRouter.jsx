import React from 'react'
import { Provider } from 'react-redux'
import { store } from './ReduxApi2/app2/store'
import FormCurd from './ReduxApi2/ui3/ReduxPagesui/FormCurd'

export default function ReduxApiRouter() {
  return (
    <div>
        <Provider store={store}>
        <FormCurd/>
        </Provider>
    </div>
  )
}
