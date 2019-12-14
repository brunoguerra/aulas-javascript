# Instalação do Ionic

```bash
npm install -g ionic@latest
```

A partir daqui, o comando global ionicpermitirá a criação de um projeto React com o Ionic e quaisquer outras dependências. Para criar um novo projeto, execute o seguinte comando:

```bash
ionic start myApp blank --type=react
cd myApp
```


# Um componente React

```javascript

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

```

Então, o que está acontecendo aqui? Bem, as três primeiras linhas estão gerando algumas dependências. O primeiro é reagir em si. Isso nos permite escrever componentes em uma sintaxe semelhante ao HTML chamada JSX. Falaremos sobre JSX um pouco mais tarde.

*App.jsx*

```javascript
import React from 'react';
import { Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/home" component={Home} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);
```

# Adicionar a capacidade de rondar no Android ou iOS.

Primeiro é preciso fazer o build do app.

```bash
ionic build
```

Para isso, iremos chamar o comando ```ionic capacitor add andoid``` para android,
```ionic capacitor add ios``` para iOS.

Para rodar diretamente após build:
```
ionic capacitor run android
```


Editar as variáveis de sistema e adicionar o seguinte:
```
ANDROID_SDK_PATH
```
o caminho do sdk do Android está no Android Studio -> Settings -> Behaviour and settings -> Android SDK

Adicionar esses caminhos na varíavel de PATH
```
%ANDROID_SDK_PATH\tool\bin
%ANDROID_SDK_PATH\platform-tools
%ANDROID_SDK_PATH\emulator
%ANDROID_SDK_PATH\build\tools
```

build-tools apenas na hora de assinar o apk, mas já vamos deixar configurado


É preciso também instalar o native-run para rodar nos dispositivos, tanto reais quanto virtuais.

```
npm i -g native-run
```

Abrir o virtual device na linha de comando:

```
npx cap open android
```



Rodar o código em modo atualizações automáticas no emulador
```
ionic capacitor run android -l
```

Para rodar no dispositivo
```
ionic capacitor run android --livereload-url=http://192.168.0.83:8100 --external
```

