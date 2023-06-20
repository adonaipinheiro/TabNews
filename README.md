# [TabNews](https://tabnews.com.br/) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/adonaipinheiro/TabNews/blob/main/LICENSE) ![Build status](https://build.appcenter.ms/v0.1/apps/be3002c0-daa9-4fce-92df-1a3736745c90/branches/main/badge) ![Build status](https://build.appcenter.ms/v0.1/apps/f7435ffa-50ef-42d2-8d63-edd3f87b1464/branches/main/badge) ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

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
