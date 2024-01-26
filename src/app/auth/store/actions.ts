import { RegisterRequestInterface } from './../types/register.interface';
import { createAction, props } from "@ngrx/store"

export const register = createAction('[Auth] Register', props<{request: RegisterRequestInterface}>())