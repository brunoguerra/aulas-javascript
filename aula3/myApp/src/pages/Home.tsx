import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonCardSubtitle,
  IonCardHeader,
  IonInput,
  IonButton,
  IonFab,
  IonFabButton,
  IonIcon,
  IonFabList,
 } from '@ionic/react';
import React from 'react';


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

const BACKEND_URL = 'http://192.168.0.83:3000'

const mockDados = [
  {
    title: 'Titulo 1',
    subtitle: 'Objetivo principal',
    content: 'Desejo aprender sem sofrer'
  },
  {
    title: 'Titulo 2',
    subtitle: 'Objetivo outros',
    content: 'Desejo apenas saber'
  },
]

function createCardInMock(title:string) {
  mockDados.push({
    title: title,
    subtitle: '',
    content: '',
  })
}

interface CardProps {
  title: string
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
        <IonCardTitle>{props.title}</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        Keep close to Nature's heart... and break clear away, once in awhile,
        and climb a mountain or spend a week in the woods. Wash your spirit clean.
      </IonCardContent>
    </IonCard>
  )
}

class Home extends React.Component {
  state = {
    inputCriacao: '',
  }

  onChangeInput = (event:any) => {
    this.setState({
      inputCriacao: event.detail.value
    })
  }

  createCard = () => {
    const inputValue = this.state.inputCriacao

    createCardInMock(inputValue)

    fetch(BACKEND_URL + '/objectives', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: inputValue,
      })
    }).then(response => response.json())
    .then(json => console.log('Cadastradado com sucesso', json))

    this.setState({})
  }


  render = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Trella</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <BotaoFlutuante />
          {/*-- List of Text Items --*/}
          <IonContent>
              {mockDados.map(function(cardContent) {
                return (
                  <IonItem >
                    <Card
                      title={cardContent.title}
                    />
                  </IonItem>
                )
              })}
              
            

          <IonItem>
            <IonLabel>Criar</IonLabel>
            <IonInput
              placeholder="Digite seu objetivo"
              onIonChange={this.onChangeInput}
              ></IonInput>
            </IonItem>
          <IonButton
            expand="block"
            onClick={this.createCard}
          > Criar
            </IonButton>
          </IonContent>

            
        </IonContent>
      </IonPage>
    )
  }
};

export default Home;
