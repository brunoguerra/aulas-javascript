import React from 'react'
import { IonPage, IonContent, IonItem, IonLabel, IonInput, IonTextarea, IonButton } from '@ionic/react'

const BACKEND_URL = 'http://192.168.0.83:3000'

interface CardType {
    title: string,
    description: string,
    id: number,
}

interface AdicionarPageRouterParams {
    id: number,
}

interface MatchType {
    params: AdicionarPageRouterParams,
}

interface AdicionarPageType {
    match: MatchType,
}

// const AdicionarPage = () => (
class AdicionarPage extends React.Component<AdicionarPageType> {
    state = {
        title: '',
        description: '',
        edit: false,
    }

    componentWillMount() {
        console.log(this.props)
        if (this.props.match.params.id) {
            this.setState({
                edit: this.props.match.params.id,
            })

            this.loadData(this.props.match.params.id)
        }
    }

    loadData(id: number) {
        fetch(BACKEND_URL + '/objectives/' + id)
        .then(response => response.json())
        .then(dadosCard => this.defineCard(dadosCard))
    }

    defineCard(dadosCard: CardType) {
        this.setState({
            title: dadosCard.title,
            description: dadosCard.description,
        })
    }

    onTitleChange = (event:any) => {
        this.setState({
            title: event.detail.value,
        })
    }

    onTextareaChange = (event:any) => {
        this.setState({
            description: event.detail.value,
        })
    }

    createCard = () => {
        const title = this.state.title
        const description = this.state.description
        
        fetch(BACKEND_URL + '/objectives', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: title,
            description: description,
          })
        }).then(response => response.json())
        .then(json => {
            console.log('Cadastradado com sucesso', json)
            window.location.href = '/'
        })
    
        this.setState({})
    }
    
    editCard = () => {
        const id = this.state.edit
        const title = this.state.title
        const description = this.state.description
        
        fetch(BACKEND_URL + '/objectives/' + id, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: title,
            description: description,
          })
        }).then(response => response.json())
        .then(json => {
            console.log('Cadastradado com sucesso', json)
            window.location.href = '/'
        })
    
        this.setState({})
    }

    render = () => (
        <IonPage>
            <IonContent>
                <IonItem>
                    <IonLabel>{
                        // this.state.edit? "Editando " + this.state.edit : "Adicionando"
                        this.state.edit
                            ? "Editando " + this.state.edit
                            : "Adicionando"

                    }</IonLabel>
                </IonItem>
                <IonItem>
                    <IonLabel>Digite seu objetivo:</IonLabel>
                </IonItem>
                <IonItem>
                    <IonInput 
                        name="objective_title"
                        autofocus={true}
                        onIonChange={this.onTitleChange}
                        value={this.state.title}
                    ></IonInput>
                </IonItem>

                <IonItem>
                    <IonLabel>Detalhes:</IonLabel>
                </IonItem>
                <IonItem>
                    <IonTextarea
                        name="objective_description"
                        autoGrow={true}
                        onIonChange={this.onTextareaChange}
                        value={this.state.description}
                    ></IonTextarea>
                </IonItem>
                {this.state.edit
                  ? <IonButton
                        expand="full"
                        onClick={this.editCard}
                    >Editar</IonButton>

                  : <IonButton
                        expand="full"
                        onClick={this.createCard}
                    >Criar</IonButton>
                }
            </IonContent>
        </IonPage>
    )
}

export default AdicionarPage