import React from 'react'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const NovaPagina: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                <IonTitle>Objetivos</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                Seus objetivos em um lugar:
            </IonContent>
        </IonPage>
    )
}


export default NovaPagina;
