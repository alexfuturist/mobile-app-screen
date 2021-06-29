import React from 'react'
import { IonButton, IonContent } from '@ionic/react'
import s from './Day.module.scss'
import { useDispatch } from 'react-redux'
import { actions } from 'store/app-reducer'

type PropsType = {
    day: string
    date: number
    active: boolean
}

const Day = ({ day, date, active }: PropsType) => {
    const dispatch = useDispatch()

    //записываем выбранную дату в state
    const setCurrentDay = () => {
        dispatch(actions.setCurrentDay(date))
    }

    return (
        <div className={s.wrapper}>
            <IonButton
                className={active ? s.active : undefined}
                fill="clear"
                size="default"
                onClick={setCurrentDay}
            >
                <div className={s.inner}>
                    <p className={s.day}>{day}</p>
                    <p className={s.date}>{date}</p>
                </div>
            </IonButton>
        </div>
    )
}

export default Day
