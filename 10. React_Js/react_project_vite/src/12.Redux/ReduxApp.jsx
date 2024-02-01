import React from 'react'
import { Provider } from 'react-redux'
import Counter from './Redux/ui/PagesRedux/counter'
import { store } from './Redux/app/store'
import Amount from './Redux/ui/PagesRedux/Amount2'
import { amountStore } from './Redux/app/amountStore2'
import Point3 from './Redux/ui/PagesRedux/Point3'
import { pointStore } from './Redux/app/Point2'

export default function ReduxApp() {
  return (
    <div>
        <Provider store={store} >
            <Counter/>
        </Provider>

        <Provider store={amountStore}>
            <Amount/>
        </Provider>

        <Provider store={pointStore}>
            <Point3/>
        </Provider>

        

    </div>
  );
}
