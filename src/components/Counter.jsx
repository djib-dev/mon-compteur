import { useReducer } from "react";
import { initialstate } from "./etat_initial_du_compteur";
import { counterReducer } from "../reducers/counterReducer";
import { INCREMENT,DECREMENT,RESET,REDO,UNDO } from "../reducers/counterTypes";
//import historyControls from "./historyControls ";    


export default function Counter() {
    const [state, dispatch] = useReducer(counterReducer, initialstate);

    return (
        <div>
            <h1>Compteur avec historique</h1>
            <h2>Valeur actuelle : {state.current}</h2>
            <button onClick={() => dispatch({ type: INCREMENT })}>Incrémenter</button>
            <button onClick={() => dispatch({ type: DECREMENT })}>Décrémenter</button>
            <button onClick={() => dispatch({ type: RESET })}>Réinitialiser</button>
            <historyControls 
                canUndo={state.history.length > 0}
                canRedo={state.future.length > 0}
                onUndo={() => dispatch({ type: UNDO })}
                onRedo={() => dispatch({ type: REDO })}
            />
            <div>
                <h3>Historique des valeurs :</h3>
                <ul>
                    {state.history.map((value, index) => (
                        <li key={index}>{value}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};