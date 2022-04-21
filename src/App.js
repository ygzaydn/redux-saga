import React from "react";
import { connect } from "react-redux";

function App({ state, decrement, increment }) {
    return (
        <div className="App">
            <button onClick={() => decrement()}>Decrease</button>
            <span>{state}</span>
            <button onClick={() => increment()}>Increase</button>
        </div>
    );
}

const mapStateToProps = (state) => ({
    state,
});

const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
