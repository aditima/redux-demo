/******************************************************************************
 * This is the most basic Redux app demostrating the key concepts:
 * 1. Store
 * 2. Actions
 * 3. Reducers
 ******************************************************************************/

import React, { ReactNode } from 'react';
import { BoxOne } from './BoxOne';
import { BoxTwo } from './BoxTwo';

class App extends React.Component<{}, {}> {
  public render(): ReactNode {    
    return (
      <div>
        <BoxOne/>
        <BoxTwo/>
      </div>
    );
  }
}

export default App;
