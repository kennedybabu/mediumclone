import { createFeature, createReducer, on } from "@ngrx/store";
import { AuthStateInterface } from "../types/authState.interface";
import { authActions } from "./actions";

const intialState: AuthStateInterface = {
    isSubmitting: false
}

//auth reducers
const authFeature = createFeature({
    name: 'auth',
    reducer: createReducer(
        intialState, 
        on(authActions.register, (state) => ({...state, isSubmitting: true}))
    )
})

export const { name: authFeatureKey, reducer: authReducer, selectIsSubmitting } = authFeature