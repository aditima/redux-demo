/******************************************************************************
 * Changes to BoxOne component to use connect(). We split BoxOne into:
 * 1. A view-only component with no connection logic
 *  - color moves from state to prop
 *  - action to dispatch also becomes a prop
 * 2. A new Container component that wraps #1 with the connection logic
 * 3. Also, no need to access store directly
 * Read more here: https://react-redux.js.org/introduction/quick-start
 ******************************************************************************/

import React, { ReactNode } from 'react';
import { actions } from './store';
import './App.css';
import { connect } from 'react-redux';

interface IBoxOneProps {
  color: string;
  colorTwo: () => void;
}
interface IBoxOneState {}

class BoxOne extends React.Component<IBoxOneProps, IBoxOneState> {
  constructor(props: IBoxOneProps) {
    super(props);
  }

  public render(): ReactNode { 
    const color = {
        backgroundColor: this.props.color
    };   
    return (
      <div className="box" style={ color }>
        <button onClick={ this.props.colorTwo }>
          Color Two
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state: any /*, ownProps*/) => {
  return {
    color: state.boxOne.color
  }
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    colorTwo: () => dispatch(actions.colorTwo)
  }
}

export const BoxOneConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(BoxOne);