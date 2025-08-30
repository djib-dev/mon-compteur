import { INCREMENT,DECREMENT,RESET,REDO,UNDO } from "./counterTypes";
export const INCREMENT =()=> ( { type: INCREMENT });
export const DECREMENT = ()=>  ({ type: DECREMENT });
export const RESET =()=>  ({ type: RESET });
export const UNDO =()=>   ({ type: UNDO });