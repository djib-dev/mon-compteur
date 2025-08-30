import { REDO,UNDO } from "../reducers/counterTypes";

export default function historyControls ({dispatch,state}) {
    return (
        <div>
            <button onClick={() => dispatch({ type: UNDO })} disabled={state.history.length === 0}>
                Annuler
            </button>
            <button onClick={() => dispatch({ type: REDO })} disabled={state.future.length === 0}>
                Rétablir
            </button>
        </div>
    );
};