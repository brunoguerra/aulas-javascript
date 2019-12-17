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
  IonRouterLink,
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

interface CardProps {
  title: string,
  description: string,
  id: number,
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <IonRouterLink href={'/editar/'+props.id}>
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>{props.id}</IonCardSubtitle>
          <IonCardTitle>{props.title}</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          {props.description}
        </IonCardContent>
      </IonCard>
    </IonRouterLink>
  )
}

class Home extends React.Component {
  state = {
    inputCriacao: '',
    cards: [],
  }

  // match name of lifecycle
  componentWillMount() {
    this.load()
  }

  load() {
    fetch(BACKEND_URL + '/objectives')
    .then(response => response.json())
    .then(listaDeCards => this.defineCards(listaDeCards))
  }

  defineCards(listaDeCards: Array<any>) {
    this.setState({
      cards: listaDeCards,
    })
  }

  onChangeInput = (event:any) => {
    this.setState({
      inputCriacao: event.detail.value
    })
  }

  createCard = () => {
    const inputValue = this.state.inputCriacao

    fetch(BACKEND_URL + '/objectives', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: inputValue,
      })
    }).then(response => response.json())
    .then(json => {
      console.log('Cadastradado com sucesso', json)
      this.load()
      this.setState({
        inputCriacao: '',
      })
    })

    this.setState({})
  }


  render = () => {
    const cards = this.state.cards
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
              {cards.map(function(cardContent: CardProps) {
                return (
                  <IonItem >
                    <Card
                      id={cardContent.id}
                      title={cardContent.title}
                      description={cardContent.description}
                    />
                  </IonItem>
                )
              })}
              
            

          <IonItem>
            <IonLabel>Criar</IonLabel>
            <IonInput
              placeholder="Digite seu objetivo"
              onIonChange={this.onChangeInput}
              value={this.state.inputCriacao}
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
