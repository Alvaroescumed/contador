import { createReducer, on } from "@ngrx/store";
import { increase, reduce, reset} from "../actions/counter.actions"

// inicializamos el estado inicial del contador
export const initialState = 0

// definimos que hace cada accion del contador usando createReducer del modulo ngrx
export const counterReducer = createReducer(
    initialState,
    on(increase, (state) => state + 5),
    on(reduce, (state) => state - 5),
    on(reset, () => 0),
)

