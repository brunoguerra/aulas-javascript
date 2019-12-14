import React from 'react'
import { IonPage, IonContent, IonItem, IonLabel, IonInput, IonTextarea, IonButton } from '@ionic/react'

const AdicionarPage = () => (
    <IonPage>
        <IonContent>
            <IonItem>
                <IonLabel>Digite seu objetivo:</IonLabel>
            </IonItem>
            <IonItem>
                <IonInput name="objective_title" autofocus={true}></IonInput>
            </IonItem>

            <IonItem>
                <IonLabel>Detalhes:</IonLabel>
            </IonItem>
            <IonItem>
                <IonTextarea  name="objective_description" autoGrow={true}></IonTextarea>
            </IonItem>
            <IonButton expand="full">Criar</IonButton>
        </IonContent>
    </IonPage>
)

export default AdicionarPage