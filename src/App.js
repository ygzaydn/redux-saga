import React from "react";
import { connect } from "react-redux";

function App({
    state,
    decrement,
    increment,
    incrementDelay,
    fetchState,
    fetch,
}) {
    const slicedFetch = fetchState.slice(0, 10);
    return (
        <div className="App">
            <button onClick={() => decrement()}>Decrease</button>
            <span>{state}</span>
            <button onClick={() => increment()}>Increase</button>
            <button onClick={() => incrementDelay()}>
                Increase with Delay
            </button>
            <br /> <br /> <br /> <br />
            <button onClick={() => fetch()}>Fetch Data</button>
            {slicedFetch && (
                <>
                    {slicedFetch.map((el) => (
                        <h3 key={el.title}>
                            ----
                            {el.title}
                        </h3>
                    ))}
                </>
            )}
        </div>
    );
}

const mapStateToProps = (state) => ({
    state: state.counter,
    fetchState: state.fetch,
});

const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" }),
    incrementDelay: () => dispatch({ type: "INCREMENT_ASYNC" }),
    fetch: () => dispatch({ type: "START_FETCH" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
