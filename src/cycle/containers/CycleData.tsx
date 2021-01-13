import React from 'react'
import { CycleData as CycleDataComponent } from '../components/CycleData'
import { useTypedSelector } from '../../store'
import { CycleHistory } from '../model'
import { useDispatch } from 'react-redux'
import { addStartDate, deleteStartDate, LoginState, CycleId } from '../../db'

interface Props {
  readonly loginState: LoginState
}

export const CycleData = ({ loginState }: Props) => {
  const cycleHistory = useTypedSelector<CycleHistory | undefined>((s) => s.cycle.history)
  const dispatch = useDispatch()
  const onAdd = (date: number) => dispatch(addStartDate(date, loginState))
  const onDelete = (id: CycleId) => dispatch(deleteStartDate(id, loginState))
  return <CycleDataComponent cycleHistory={cycleHistory} onAdd={onAdd} onDelete={onDelete} />
}
