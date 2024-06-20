import {createAction} from '@ngrx/store';

// creamos las acciones que vamos a usar en nuesto reducer

export const increase = createAction('[Counter Component] Increase')
export const reduce = createAction('[Counter Component] Reduce')
export const reset = createAction('[Counter Component] Reset')