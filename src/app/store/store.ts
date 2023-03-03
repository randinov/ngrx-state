import { authReducer, authStateKey } from "./auth/auth.reducer";

export const store:any = {
    [authStateKey]: authReducer
}