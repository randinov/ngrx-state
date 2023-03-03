import { createReducer, on } from "@ngrx/store";
import { DelAuthState, SetAuthState } from "./auth.action";

export let INITIAL_AUTH_STATE: any = null;
export const authStateKey = "auth"
const localValue = localStorage.getItem("auth");

if (localValue) {
    INITIAL_AUTH_STATE = JSON.parse(localValue);
}

export const authReducer = createReducer(INITIAL_AUTH_STATE,
    on(SetAuthState, (state, action) => {
        localStorage.setItem("auth", JSON.stringify(action.payload))
        return { ...state, ...action.payload }
    }),
    on(DelAuthState, () => {
        localStorage.clear();
        return INITIAL_AUTH_STATE
    })
)