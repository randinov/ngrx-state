import { createAction, props } from "@ngrx/store";

export const SetAuthState = createAction("[AUTH] Set State Auth",props<{payload: any}>());
export const DelAuthState = createAction("[AUTH] Del State Auth");