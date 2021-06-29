import {applyMiddleware, combineReducers, compose, createStore} from "redux"
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import appReducer from './app-reducer'

let rootReducer = combineReducers({
    app: appReducer,
});

//StateType
type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

//AC Types
export type InferActionsTypes<T> = T extends {
    [key: string]: (...args: any[]) => infer U
}
    ? U
    : never

//TC Types
type Action<T = any> = {
    type: T
}

export type BaseLocalThunkType<A extends Action<string>, R = void> = ThunkAction<
    R,
    AppStateType,
    unknown,
    A
>

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunkMiddleware))
)