/******************************************************************************
 * Modify App1 to implement Container Components using react-redux. Key concepts:
 * 1. Provider: a way to make the store available to the entire App
 * 2. connect(): easily connect the components to the store.
 * Read more here: https://react-redux.js.org/introduction/quick-start
 ******************************************************************************/

import React, { ReactNode } from 'react';
import { BoxOneConnected } from './BoxOne';
import { BoxTwoConnected } from './BoxTwo';
import { Provider } from 'react-redux';
import { store } from './store';

class App extends React.Component<{}, {}> {
  public render(): ReactNode {    
    return (
      <Provider store={ store }>
        <div>
          <BoxOneConnected/>
          <BoxTwoConnected/>
        </div>
      </Provider>
    );
  }
}

export default App;
