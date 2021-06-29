import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sendSelectedDataTC } from 'store/app-reducer'
import { AppStateType } from 'store/store'
import s from './Confirmation.module.scss'

const Confirmation = () => {
    const dispatch = useDispatch()

    //индекс текущей карточки доктора в массиве
    const cardIndex = useSelector(
        (state: AppStateType) => state.app.currentCardIndex
    )

    //Id доктора
    const cardId = useSelector(
        (state: AppStateType) => state.app.cards[cardIndex].id
    )

    //объект даты для выбора
    const dataDate = useSelector(
        (state: AppStateType) => state.app.cards[cardIndex].date
    )

    //Id выбранной даты
    const selectedDateId = useSelector(
        (state: AppStateType) => state.app.cards[cardIndex].selectedDateId
    )

    //выбранная дата
    const selectedDate = dataDate[selectedDateId].date

    //массив времен для выбора
    const dataTime = useSelector(
        (state: AppStateType) => state.app.cards[cardIndex].time
    )

    //Id выбранного времени
    const selectedTimeId = useSelector(
        (state: AppStateType) => state.app.cards[cardIndex].selectedTimeId
    )

    //выбранное время
    const selectedTime = dataTime[selectedTimeId]

    //отправка выбранных параметров в базу данных
    const sendSelectedData = () => {
        dispatch(sendSelectedDataTC(cardId, selectedDateId, selectedTimeId))
    }

    return (
        <div className={s.wrapper}>
            <div className={s.top}>
                <div className={s.top_item}>
                    <p className={s.top_text}>Дата</p>
                    <p className={s.top_number}>{selectedDate}</p>
                </div>
                <div>
                    <svg
                        width="3"
                        height="56"
                        viewBox="0 0 3 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect
                            x="0.5"
                            width="2"
                            height="56"
                            rx="1"
                            fill="#E6E6E6"
                        />
                    </svg>
                </div>
                <div className={s.top_item}>
                    <p className={s.top_text}>Время</p>
                    <p className={s.top_number}>{selectedTime}</p>
                </div>
            </div>
            <div className={s.button_wrapper}>
                <button className={s.button} onClick={sendSelectedData}>
                    ЗАПИСАТЬСЯ НА БЕСПЛАТНУЮ ВСТРЕЧУ
                </button>
            </div>
        </div>
    )
}

export default Confirmation
