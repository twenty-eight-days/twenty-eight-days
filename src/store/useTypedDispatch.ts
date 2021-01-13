import { useDispatch } from 'react-redux'
import { RootAction } from './actions'
import { ThunkDispatch } from 'redux-thunk'
import { RootState } from './model'

export const useTypedDispatch = <A extends RootAction>() => useDispatch<ThunkDispatch<RootState, {}, A>>()
