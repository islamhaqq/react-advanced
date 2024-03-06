import React, {useReducer, useCallback, useMemo, useRef, useEffect} from 'react';

type State = {
    count: number;
};

type Action = {
    type: 'increment' | 'decrement';
}

function reducer(state: State, action: Action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}

function AboutPage() {
    const [state, dispatch] = useReducer(reducer, {count: 0});
    const previousCountRef = useRef<number | undefined>();

    const increment = useCallback(() => dispatch({ type: 'increment' }), []);
    const decrement = useCallback(() => dispatch({ type: 'decrement' }), []);

    const isOdd = useMemo(() => state.count % 2 === 1, [state.count]);
    const previousCount = previousCountRef.current;

    useEffect(() => {
        previousCountRef.current = state.count;
    })

    return (
        <div>
            <h1>About Page</h1>
            <p>Count: {state.count}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            {isOdd ? <p>The count is odd</p> : <p>The count is even</p>}
            {previousCount !== undefined && <p>Previous count: {previousCount}</p>}
        </div>
    )
}

export default AboutPage;
