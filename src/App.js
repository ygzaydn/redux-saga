import React from "react";
import { connect } from "react-redux";

function App({ state, decrement, increment, incrementDelay }) {
    return (
        <div className="App">
            <button onClick={() => decrement()}>Decrease</button>
            <span>{state}</span>
            <button onClick={() => increment()}>Increase</button>
            <button onClick={() => incrementDelay()}>
                Increase with Delay
            </button>
        </div>
    );
}

const mapStateToProps = (state) => ({
    state,
});

const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" }),
    incrementDelay: () => dispatch({ type: "INCREMENT_ASYNC" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
