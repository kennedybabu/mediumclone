import { BackendErrorsInterface } from './../../shared/types/backenErrors.interface';
import { CurrentUserInterface } from './../../shared/types/currentUser.interface';
import { RegisterRequestInterface } from './../types/register.interface';
import { createActionGroup, props } from "@ngrx/store"

export const authActions = createActionGroup({
    source: 'auth',
    events: {
        Register:  props<{request: RegisterRequestInterface}>(),
        'Register Success': props<{currentUser: CurrentUserInterface}>(),
        'Register Failure': props<{errors: BackendErrorsInterface}>()
    },
})

// export const register = createAction('[Auth] Register', props<{request: RegisterRequestInterface}>())