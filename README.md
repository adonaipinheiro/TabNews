<h1 align="center">
  <a href="https://tabnews.com.br/">TabNews</a>
</h1>

<p align="center">
  <img src="https://img.shields.io/github/package-json/dependency-version/adonaipinheiro/TabNews/react-native" alt="React Native" />
  <img src="https://img.shields.io/github/package-json/dependency-version/adonaipinheiro/TabNews/react" alt="React" />
  <img src="https://img.shields.io/badge/license-MIT-blue.svg"  alt="GitHub license" />
  <img src="https://build.appcenter.ms/v0.1/apps/be3002c0-daa9-4fce-92df-1a3736745c90/branches/main/badge"  alt="Build status" />
  <img src="https://build.appcenter.ms/v0.1/apps/f7435ffa-50ef-42d2-8d63-edd3f87b1464/branches/main/badge"  alt="Build status" />
</p>
<p align="center">
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg"  alt="PRs Welcome" />
  <img src="https://img.shields.io/github/languages/code-size/adonaipinheiro/TabNews" alt="TabNews" />
  <img alt="GitHub contributors" src="https://img.shields.io/github/contributors/adonaipinheiro/TabNews">
</p>

Aplicativo TabNews, desenvolvido em React Native.

## Instalação

Para rodar o projeto, é necessário primeiro rodar o comando `yarn` para instalação das dependências. (projeto possui um `yarn.lock`)

Para **android**: `yarn android`

Para **iOS**: `pod install` dentro da pasta `ios` do projeto. Voltar a raiz do projeto e rodar o comando `yarn ios`

## Documentação

O projeto conta com **`analytics`**, **`crashlytcis`** e basicamente todos os recursos oferecidos pelo Firebase.

Navegação com o **`@react-navigation`**, contando com drawer, stack e tabs.

Também contamos com verificação de Jailbreak e emulador, para evitar eventuais fraudes **(projeto open source, validar chaves que estão expostas)**, fazemos uso de resources on-demand para o iOS e minify e shrink para o projeto Android, que ajudam na ofuscação e diminuição dos recursos acessados pelo bundle.

Para o projeto, estou seguindo o **`hook pattern`**, que funciona basicamente igual a uma arquitetura **`MVVM`**. Onde o hook é a **ViewModel** e gerencia os estados, efeitos e ações da tela.

```
  screens
    └ Home
      └ index.tsx
        styles.ts
        useHome.ts
```

## Contribuição

O projeto está aberto para contribuição, no momento o que é mais necessário, são os testes unitários. A expectativa é que atinja ~85% de cobertura total do código.

Mas está aberto para qualquer sugestão. :D

## Baixe

Aplicativo disponível na Google Play e App Store

<img width=100 title="Google Play" alt="Google Play" src="https://github.com/adonaipinheiro/TabNews/assets/20756362/165cc16a-a889-4e7c-8a79-863f402135c6">

<a href="https://play.google.com/store/apps/details?id=br.com.tabnews" target="_blank">TabNews Google Play</a>

<img width=100 title="App Store" alt="App Store" src="https://github.com/adonaipinheiro/TabNews/assets/20756362/4d6f8529-e599-43cd-b7fc-03dbafe6e794">

<a href="https://apps.apple.com/br/app/tabnews-not%C3%ADcias/id6450368000" target="_blank">TabNews App Store</a>


