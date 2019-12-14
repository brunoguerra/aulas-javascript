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
 } from '@ionic/react';
import React from 'react';

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

    })
    console.log(event.detail.value)
  }

  createCard = () => {
    const inputValue = this.state.inputCriacao

    createCardInMock(inputValue)
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
          {/*-- List of Text Items --*/}
          <IonList>
            <IonItem >
              {mockDados.map(function(cardContent) {
                return (
                  <Card
                    title={cardContent.title}
                  />
                )
              })}
              
            </IonItem>
          </IonList>
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
      </IonPage>
    )
  }
};

export default Home;
