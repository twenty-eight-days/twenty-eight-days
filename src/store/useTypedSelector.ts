import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { RootState } from './model'

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
