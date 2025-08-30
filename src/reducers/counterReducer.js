import { INCREMENT,DECREMENT,RESET,REDO,UNDO } from "./counterTypes";
export const counterReducer = (state, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                current: state.current + 1,
                history: [...state.history, state.current],
                future: []
            };
        case DECREMENT:
            return {
                current: state.current - 1,
                history: [...state.history, state.current],
                future: []
            };
        case RESET:
            return {
                current: 0,
                history: [...state.history, state.current],
                future: []
            };
        case UNDO:
            if (state.history.length === 0) return state;
            const previous = state.history[state.history.length - 1];
            const newHistory = state.history.slice(0, state.history.length - 1);
            return {
                current: previous,
                history: newHistory,
                future: [state.current, ...state.future]
            };
        case REDO:
            if (state.future.length === 0) return state;
            const next = state.future[0];
            const newFuture = state.future.slice(1);
            return {
                current: next,
                history: [...state.history, state.current],
                future: newFuture
            };
        default:
            return state;
    }
};