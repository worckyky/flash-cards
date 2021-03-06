import { InferActionsType } from '../../../s1-main/m2-bll/actions'
import { Reducer } from 'redux'
import { AppThunk } from '../../../s1-main/m3-dal/thunks'

type InitialStateType = typeof initialState

type ActionTypes = InferActionsType<typeof actions>

const initialState = {}

export const profileReducer: Reducer<InitialStateType, ActionTypes> = (state, action): InitialStateType => {
   switch (action.type) {
      case 'SOME':
         return { ...state }
      default:
         return { ...state }
   }
}

const actions = {
   someAC: () => ({ type: 'SOME' }),
}

const thunks = {
   someTC: (): AppThunk => (dispatch) => {},
}
