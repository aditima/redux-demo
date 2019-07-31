import React, { ReactNode } from 'react';
import { store, actions } from './store';
import './App.css';

interface IBoxTwoProps {}
interface IBoxTwoState {
    color: string;
}

export class BoxTwo extends React.Component<IBoxTwoProps, IBoxTwoState> {
  constructor(props: IBoxTwoProps) {
    super(props);
    this.state = store.getState().boxTwo;
    store.subscribe(() => {
      this.setState(store.getState().boxTwo);
    })
  }

  public render(): ReactNode {
    const color = {
        backgroundColor: this.state.color
    };
    return (
        <div className="box" style={ color }>
            <button onClick={ () => {
                    store.dispatch(actions.colorOne); 
                }}>
                Color One
            </button>
      </div>
    );
  }
}