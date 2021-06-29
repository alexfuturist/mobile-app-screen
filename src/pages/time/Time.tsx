import React, { useEffect, useRef } from 'react'
import { IonSlides, IonSlide, IonContent } from '@ionic/react'
import '@ionic/react/css/core.css'
import s from './Time.module.scss'
import TimeItem from './item/TimeItem'
import { useSelector } from 'react-redux'
import { AppStateType } from 'store/store'

export const Time: React.FC = () => {
    //получение индекса стартовой карточки
    const cardIndex = useSelector(
        (state: AppStateType) => state.app.currentCardIndex
    )

    //получение массива возможных времен для записи к доктору
    const time = useSelector(
        (state: AppStateType) => state.app.cards[cardIndex].time
    )

    //получение выбранного времени
    const selectedTime = useSelector(
        (state: AppStateType) => state.app.cards[cardIndex].selectedTimeId
    )

    //отрисовка возможных времен для записи в виде слайдов
    const days = time.map((t, i) => (
        <IonSlide key={i}>
            <TimeItem time={t} active={selectedTime === i ? true : false} />
        </IonSlide>
    ))

    //настройки слайдера
    const slideOpts = {
        initialSlide: selectedTime,
        speed: 400,
        slidesPerView: 'auto',
    }

    return (
        <div className={s.wrapper}>
            <div className={s.top}>
                <p className={s.top_title}>Свободное время</p>
            </div>

            <IonSlides pager={false} options={slideOpts}>
                {days}
            </IonSlides>
        </div>
    )
}

export default Time
