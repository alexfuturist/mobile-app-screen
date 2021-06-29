import { AppStateType, InferActionsTypes } from './store'
import man from 'assets/img/man.png'
import woman from 'assets/img/woman.png'
import { firestore } from 'index'

//State
type InitialStateType = typeof initialState

let initialState = {
    cards: [
        {
            id: 5,
            name: 'Имя',
            src: man,
            date: [
                {
                    day: 'сегодня',
                    date: 26,
                },
                {
                    day: 'ср',
                    date: 27,
                },
                {
                    day: 'чт',
                    date: 28,
                },
                {
                    day: 'пт',
                    date: 29,
                },
                {
                    day: 'суб',
                    date: 30,
                },
                {
                    day: 'вс',
                    date: 31,
                },
            ],
            time: ['18:00', '18:30', '20:00', '20:30', '21:00'],
            selectedDateId: 0,
            selectedTimeId: 0,
        },
        {
            id: 7,
            name: 'Елена Шимановская',
            src: woman,
            date: [
                {
                    day: 'сегодня',
                    date: 3,
                },
                {
                    day: 'ср',
                    date: 4,
                },
                {
                    day: 'чт',
                    date: 5,
                },
                {
                    day: 'пт',
                    date: 6,
                },
                {
                    day: 'суб',
                    date: 7,
                },
                {
                    day: 'вс',
                    date: 8,
                },
            ],
            time: ['09:00', '10:00', '11:00', '11:30', '12:00'],
            selectedDateId: 1,
            selectedTimeId: 1,
        },
    ],
    currentCardIndex: 0,
    currentCardId: 5,
}

//Reducer
const appReducer = (
    state = initialState,
    action: ActionsTypes
): InitialStateType => {
    switch (action.type) {
        //запись индекса текущей карточки
        case 'MAS/APP/SET_CURRENT_CARD_INDEX':
            return {
                ...state,
                currentCardIndex: action.currentCardIndex,
            }

        //запись ID текущей карточки
        case 'MAS/APP/SET_CURRENT_CARD_ID':
            const currentCardId = state.cards[action.currentCardIndex].id

            return {
                ...state,
                currentCardId: currentCardId,
            }

        //запись стартовых значений даты для карточек
        case 'MAS/APP/SET_DEFAULT_SELECTED_DAY_ID':
            return {
                ...state,
                cards: [
                    ...state.cards.map((card, i) => {
                        if (i === action.cardIndex) {
                            card.selectedDateId = action.defaultSelectedDay
                        }
                        return card
                    }),
                ],
            }

        //запись стартовых значений времени для карточек
        case 'MAS/APP/SET_DEFAULT_SELECTED_TIME_ID':
            return {
                ...state,
                cards: [
                    ...state.cards.map((card, i) => {
                        if (i === action.cardIndex) {
                            card.selectedTimeId = action.defaultSelectedTime
                        }
                        return card
                    }),
                ],
            }

        //запись выбранного значения даты для карточки
        case 'MAS/APP/SET_CURRENT_DAY_ID':
            //находим индекс выбранного дня в массиве дней
            const dateId = state.cards[state.currentCardIndex].date
                .map((d) => d.date)
                .indexOf(action.currentDay)

            console.log(dateId)

            //переписываем выбранный день в карточке
            return {
                ...state,
                cards: [
                    ...state.cards.map((card, i) => {
                        if (i === state.currentCardIndex) {
                            card.selectedDateId = dateId
                        }
                        return card
                    }),
                ],
            }

        //запись выбранного значения времени для карточки
        case 'MAS/APP/SET_CURRENT_TIME_ID':
            //находим индекс выбранного времени в массиве времен
            const timeId = state.cards[state.currentCardIndex].time.indexOf(
                action.currentTime
            )

            console.log(timeId)

            //переписываем выбранный день в карточке
            return {
                ...state,
                cards: [
                    ...state.cards.map((card, i) => {
                        if (i === state.currentCardIndex) {
                            card.selectedTimeId = timeId
                        }
                        return card
                    }),
                ],
            }

        default:
            return state
    }
}

//AC Types
type ActionsTypes = InferActionsTypes<typeof actions>

export const actions = {
    setCurrentCardIndex: (currentCardIndex: number) =>
        ({
            type: 'MAS/APP/SET_CURRENT_CARD_INDEX',
            currentCardIndex: currentCardIndex,
        } as const),
    setCurrentCardId: (currentCardIndex: number) =>
        ({
            type: 'MAS/APP/SET_CURRENT_CARD_ID',
            currentCardIndex: currentCardIndex,
        } as const),
    setCurrentDay: (currentDay: number) =>
        ({
            type: 'MAS/APP/SET_CURRENT_DAY_ID',
            currentDay: currentDay,
        } as const),
    setCurrentTime: (currentTime: string) =>
        ({
            type: 'MAS/APP/SET_CURRENT_TIME_ID',
            currentTime: currentTime,
        } as const),
    setDefaultSelectedDay: (i: number, defaultSelectedDay: number) =>
        ({
            type: 'MAS/APP/SET_DEFAULT_SELECTED_DAY_ID',
            defaultSelectedDay: defaultSelectedDay,
            cardIndex: i,
        } as const),
    setDefaultSelectedTime: (i: number, defaultSelectedTime: number) =>
        ({
            type: 'MAS/APP/SET_DEFAULT_SELECTED_TIME_ID',
            defaultSelectedTime: defaultSelectedTime,
            cardIndex: i,
        } as const),
}

//TC 
//получение с firestore стартовых значений времени/даты для карточек докторов
export const setSelectedDataTC = () => async (dispatch: any, getState: any) => {
    firestore
        .collection('doctors')
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                getState().app.cards.map((card: any, i: number) => {
                    if (doc.id === `'${card.id}'`) {
                        const selectedDateId = doc.data().selectedDateId
                        const selectedTimeId = doc.data().selectedTimeId

                        dispatch(
                            actions.setDefaultSelectedDay(i, selectedDateId)
                        )
                        dispatch(
                            actions.setDefaultSelectedTime(i, selectedTimeId)
                        )
                    }
                })
            })
        })
}

//отправка на firestore выбранных значений времени/даты для карточки доктора
export const sendSelectedDataTC =
    (cardId: number, selectedDateId: number, selectedTimeId: number) =>
    async () => {
        firestore
            .collection('doctors')
            .doc(`'${cardId}'`)
            .set({
                selectedDateId: selectedDateId,
                selectedTimeId: selectedTimeId,
            })
            .then(() => {
                console.log('Document successfully written!')
            })
            .catch((error) => {
                console.error('Error writing document: ', error)
            })
    }

export default appReducer
