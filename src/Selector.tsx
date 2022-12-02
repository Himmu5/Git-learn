import { State } from "./Store";

export function Selector(state:State){
    return state.count;
}