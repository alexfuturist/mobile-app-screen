import React from 'react'
import { IonButton, IonContent } from '@ionic/react'
import s from './TimeItem.module.scss'
import { useDispatch } from 'react-redux'
import { actions } from 'store/app-reducer'

type PropsType = {
    time: string
    active: boolean
}

const TimeItem = ({ time, active }: PropsType) => {
    const dispatch = useDispatch()

    //записываем выбранное время в state
    const setCurrentDay = () => {
        dispatch(actions.setCurrentTime(time))
    }

    return (
        <div className={s.wrapper}>
            <IonButton
                className={active ? s.active : undefined}
                fill="clear"
                size="default"
                onClick={setCurrentDay}
            >
                <p className={s.time}>{time}</p>
            </IonButton>
        </div>
    )
}

export default TimeItem
