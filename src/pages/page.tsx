import React from 'react'
import Cards from './cards/Cards'
import { IonContent } from '@ionic/react'
import Date from './date/Date'
import Time from './time/Time'
import Confirmation from './confirmation/Confirmation'

const Page = () => {
    return (
        <IonContent>
            <Cards />
            <Date/>
            <Time/>
            <Confirmation/>
        </IonContent>
    )
}

export default Page
