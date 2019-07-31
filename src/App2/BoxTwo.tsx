import React, { ReactNode } from 'react';
import { actions } from './store';
import './App.css';
import { connect } from 'react-redux';

interface IBoxTwoProps {
  color: string;
  colorOne: () => void;
}
interface IBoxTwoState {}

export class BoxTwo extends React.Component<IBoxTwoProps, IBoxTwoState> {
  public render(): ReactNode {
    const color = {
        backgroundColor: this.props.color
    };
    return (
        <div className="box" style={ color }>
            <button onClick={ this.props.colorOne }>
                Color One
            </button>
      </div>
    );
  }
}

const mapStateToProps = (state: any /*, ownProps*/) => {
  return {
    color: state.boxTwo.color
  }
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    colorOne: () => dispatch(actions.colorOne)
  }
}

export const BoxTwoConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(BoxTwo);