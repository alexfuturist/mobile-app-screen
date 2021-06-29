import React from 'react'
import { IonContent } from '@ionic/react'
import s from './Card.module.scss'

type PropsType = {
    src: string
    name: string
}

const Card = ({ src, name }: PropsType) => {
    return (
        <div className={s.wrapper}>
            <p className={s.name}>{name}</p>
            <div className={s.content}>
                <div className={s.photo}>
                    <img src={src} alt="img" width="144" height="144" />
                </div>
                <div className={s.description}>
                    <p className={s.text}>Длительность консультации</p>
                    <p className={s.time}>50 минут</p>
                </div>
            </div>
        </div>
    )
}

export default Card
