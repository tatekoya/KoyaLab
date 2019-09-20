import { AppState } from '../Reducer';
import { CounterProps } from '../components/Counter';
import { Dispatch } from 'redux';
import { CounterAction, addCount, reset } from "../actions/Count";
import Counter from "../components/Counter";
import { connect } from "react-redux";

export interface DispatchProps {
    addCount: (val: number) => void;
    reset: () => void;
}

const mapStateToProps = (state: AppState): CounterProps => ({
    value: state.counter.value,
});

const mapDispatchTopProps = (dispatch: Dispatch<CounterAction>): DispatchProps => ({
    addCount: (val: number) => {
        dispatch(addCount(val));
    },
    reset: () => {
        dispatch(reset());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchTopProps,
)(Counter);