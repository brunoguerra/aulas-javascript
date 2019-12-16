# Tutorial: Criando um App Ionic (PWA, Android, iOS, ElectronJS) e uma REST API

![Ionic Tutorial](https://ionicframework.com/blog/wp-content/uploads/2019/08/ionic_react_rc_feature.png)


## Criando um Aplicativo completo com Ionic e colocando nas lojas da Apple e do Google Play

Vamos desenvolver um app para manter os objetivos priorizados, atualizados e sempre visíveis.

Para isso vamos dividir esse tutorial em partes:

- 1 Parte: Visão geral do tutorial
- 2 Parte: Desenvolvendo Ágil com Ionic
   - TDD - Testes e sua importância


# Primeira Parte - Introdução

Ainda sim, vamos dividir essa primeira partes em tópicos. Vamos te introduzir ao nosso processo de desenvolvimento progressivo de Apps.

Você fará parte do time e ajudará a desenvolver esse app.

- [Tutorial: Criando um App Ionic (PWA, Android, iOS, ElectronJS) e uma REST API](#tutorial-criando-um-app-ionic-pwa-android-ios-electronjs-e-uma-rest-api)
  - [Criando um Aplicativo completo com Ionic e colocando nas lojas da Apple e do Google Play](#criando-um-aplicativo-completo-com-ionic-e-colocando-nas-lojas-da-apple-e-do-google-play)
- [Primeira Parte - Introdução](#primeira-parte---introdu%c3%a7%c3%a3o)
  - [Arquitetura](#arquitetura)
  - [A quem destina esse tutorial](#a-quem-destina-esse-tutorial)
  - [Chamada para praticar](#chamada-para-praticar)
  - [Proposta do App](#proposta-do-app)
    - [Gestão dos Requisitos](#gest%c3%a3o-dos-requisitos)
    - [BDD](#bdd)
    - [TDD](#tdd)
    - [Funcionalidades Básicas](#funcionalidades-b%c3%a1sicas)
  - [Trello](#trello)
  - [Trella](#trella)
  - [Ionic](#ionic)
    - [Como começar](#como-come%c3%a7ar)
  - [React](#react)
    - [Componente em Classes](#componente-em-classes)
    - [Componentes funcionais](#componentes-funcionais)
  - [NodeJS](#nodejs)
  - [JavaScript](#javascript)
  - [Es6](#es6)
  - [TypeScript](#typescript)
  - [TypeScript para o React](#typescript-para-o-react)
  - [Paradigma Funcional](#paradigma-funcional)
  - [Testes](#testes)
  - [Organização do Código](#organiza%c3%a7%c3%a3o-do-c%c3%b3digo)
  - [Criando nosso primeiro componente](#criando-nosso-primeiro-componente)
    - [TypeScript Interface](#typescript-interface)
  - [Trabalhando com dados em Listas e Objetos como Dicioários](#trabalhando-com-dados-em-listas-e-objetos-como-dicio%c3%a1rios)
    - [Lista (JavaScript)](#lista-javascript)
    - [Dicionário (JavaScript)](#dicion%c3%a1rio-javascript)
    - [Estrutura de Dados e TypeScript](#estrutura-de-dados-e-typescript)
      - [lista.map(dados =&gt; (React Components))](#listamapdados-gt-react-components)
  - [Entendendto o IonPage, IonContent, IonItem](#entendendto-o-ionpage-ioncontent-ionitem)
  - [Temas com Ionic](#temas-com-ionic)
    - [Personalizando seu Tema](#personalizando-seu-tema)
  - [Estilizando os components individualmente](#estilizando-os-components-individualmente)
    - [Dark mode](#dark-mode)
  - [Estado do Component React](#estado-do-component-react)


## Arquitetura

Vamos criar um App Android, um app iOS, um PWA e um Desktop com ElectronJS.
Esse aplicativos serão servidos pelo mesmo servidor,
criado utilizando o padrão de mercado micro-service,
onde nossas funções são responsáveis por pequenas partes
da aplicação total.

## A quem destina esse tutorial

Nosso foco é trazer um programador que conhece preceitos básicos de
JavaScript e fazê-lo por em prática, criando um app de produtividade.

## Chamada para praticar

Use esse tutorial para praticar e apreveite para lançar seu app e
começar a montar seu portifólio aplicativos.

## Proposta do App

App de produtividade para manter o usuário focdo nos seus
objetivos com prioridades e lembretes.

Para desenhar esse app, vamos criar mockups das telas que desejamos.

As funções que desejamos que esse aplicativo nos traga é em geral,
nos manter focado nos nosso objetivos.

Simplificando a função principal é manter uma lista de objetivos.

Lembrando, vamos começar a desenvolver esse app com os próprios comopnents do Ionic.

### Gestão dos Requisitos

Vamos especificar os requisitos como comportamento do usuário e passar o valor relacionado.

- Requisitos Iniciais:
  - Manter objetivos atualizados (Cadastrar, editar e arquivar)
  - Configurar lembretes para cada objetivo
  - Criar um checklist
  - Fazer referência a uma imagem na internet
  - Sincronizar Offline

### BDD

Escreveremos cartões BDD

### TDD

### Funcionalidades Básicas

## Trello

Vamos usar o Trello para a organização do desenvolvimento desse
trabalho.

## Trella



## Ionic

...

### Como começar

## React
...

### Componente em Classes

### Componentes funcionais

## NodeJS
...

## JavaScript
...

## Es6
...

## TypeScript
...

## TypeScript para o React
...

## Paradigma Funcional
...

## Testes
...

## Organização do Código
...

## Criando nosso primeiro componente
...

### TypeScript Interface

## Trabalhando com dados em Listas e Objetos como Dicioários

### Lista (JavaScript)

### Dicionário (JavaScript)

### Estrutura de Dados e TypeScript

#### lista.map(dados => (React Components))

```javascript
lista = [{
    title: 'Card 1',
}, {
    title: 'Card 2',
}]
lista.map(itemDaLista => (
```
```html
    <EstruturaDeComponents>
        <IonTitle>{itemDaLista.title}</IonTitle>
    </EstruturaDeComponents>
```
```javascript
))
```

## Entendendto o IonPage, IonContent, IonItem
...

## Temas com Ionic

### Personalizando seu Tema

...

## Estilizando os components individualmente

...

### Dark mode

...

## Estado do Component React

![Ionic Tutorial](https://ionicframework.com/blog/wp-content/uploads/2019/11/ionic-react-hooks.png)