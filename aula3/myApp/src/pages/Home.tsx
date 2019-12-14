import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonFab,
  IonFabButton,
  IonIcon,
  IonFabList,
} from '@ionic/react';

import { add } from 'ionicons/icons'


function meu_evento_de_click() {
  console.log('clicou')
  window.location.href = "/outraRota"
}

const varParaPaginaAdicionar = () => {
  window.location.href = '/adicionar'
}

// const onClick = () => console.log('clicou')

export const BotaoFlutuante: React.FC = () => (
    <IonFab vertical="center" horizontal="end" slot="fixed">
      <IonFabButton color="">
        <IonIcon icon={add} onClick={varParaPaginaAdicionar} />
      </IonFabButton>
    </IonFab>
);

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Nosso App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        The world is your oyster.
        <p>
          Você está na Home
        </p>
        <a href="/outraRota" >Link para a outra rota</a>
        <IonButton color="primary" onClick={meu_evento_de_click}>Primary</IonButton>
        <BotaoFlutuante />
      </IonContent>

    </IonPage>
  );
};

export default Home;
