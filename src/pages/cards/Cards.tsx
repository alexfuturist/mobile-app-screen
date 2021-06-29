import React, { useEffect } from 'react'
import { IonSlides, IonSlide, IonContent } from '@ionic/react'
import '@ionic/react/css/core.css'
import s from './Cards.module.scss'
import Card from './card/Card'
import { useDispatch, useSelector } from 'react-redux'
import { AppStateType } from 'store/store'
import { actions, setSelectedDataTC } from 'store/app-reducer'

export const Cards: React.FC = () => {
    const dispatch = useDispatch()

    //получение массива карточек докторов
    const data = useSelector((state: AppStateType) => state.app.cards)

    //получение индекса стартовой карточки для слайдера
    const cardIndex = useSelector(
        (state: AppStateType) => state.app.currentCardIndex
    )

    //отрисовка карточек докторов в виде слайдов
    const doctorsCards = data.map((d) => (
        <IonSlide key={d.id}>
            <Card src={d.src} name={d.name} />
        </IonSlide>
    ))

    //получение индекса выбранной карточки и запись в state
    const getIndex = async (event: any) => {
        let index: number = 0
        await event.target
            .getActiveIndex()
            .then((value: any) => (index = value))

        dispatch(actions.setCurrentCardIndex(index))
        dispatch(actions.setCurrentCardId(index))
    }

    //получение с firestore стартовых значений времени/даты для карточек докторов
    useEffect(() => {
        dispatch(setSelectedDataTC())
    }, [])


    //настройки слайдера
    const slideOpts = {
        initialSlide: cardIndex,
        speed: 400,
    }

    return (
        <div className={s.wrapper}>
            <IonSlides
                pager={false}
                options={slideOpts}
                onIonSlideDidChange={(event: any) => getIndex(event)}
            >
                {doctorsCards}
            </IonSlides>
        </div>
    )
}

export default Cards
