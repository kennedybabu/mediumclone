import { CurrentUserInterface } from './../../shared/types/currentUser.interface';
import { RegisterRequestInterface } from './../types/register.interface';
import { createActionGroup, emptyProps, props } from "@ngrx/store"

export const authActions = createActionGroup({
    source: 'auth',
    events: {
        Register:  props<{request: RegisterRequestInterface}>(),
        'Register Success': props<{currentUser: CurrentUserInterface}>(),
        'Register Failure': emptyProps()
    },
})

// export const register = createAction('[Auth] Register', props<{request: RegisterRequestInterface}>())