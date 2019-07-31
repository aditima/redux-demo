import React, { ReactNode } from 'react';
import { store, actions } from './store';
import './App.css';

interface IBoxOneProps {}
interface IBoxOneState {
  color: string;
}

export class BoxOne extends React.Component<IBoxOneProps, IBoxOneState> {
  constructor(props: IBoxOneProps) {
    super(props);
    this.state = store.getState().boxOne;
    store.subscribe(() => {
      this.setState(store.getState().boxOne);
    })
  }

  public render(): ReactNode { 
    const color = {
        backgroundColor: this.state.color
    };   
    return (
      <div className="box" style={ color }>
        <button onClick={ () => {
          store.dispatch(actions.colorTwo); 
        }}>
          Color Two
        </button>
      </div>
    );
  }
}