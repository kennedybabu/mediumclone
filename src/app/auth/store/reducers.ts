import { createFeature, createReducer, on } from "@ngrx/store";
import { AuthStateInterface } from "../types/authState.interface";
import { authActions } from "./actions";

const intialState: AuthStateInterface = {
    isSubmitting: false,
    isLoading: false,
    currentUser: undefined,
    validationErrors: null
}

//auth reducers
const authFeature = createFeature({
    name: 'auth',
    reducer: createReducer(
        intialState, 
        on(authActions.register, (state) => ({...state, isSubmitting: true, validationErrors: null})),
        on(authActions.registerSuccess, (state, action) => ({...state, isSubmitting: false, currentUser: action.currentUser})),
        on(authActions.registerFailure, (state, action) => ({...state, isSubmitting: false, validationErrors: action.errors}))


    )
})

export const { name: authFeatureKey, reducer: authReducer, selectIsSubmitting, selectIsLoading, selectCurrentUser, selectValidationErrors } = authFeature