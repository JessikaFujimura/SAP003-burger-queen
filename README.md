# Burger Queen

## Índice

* [1. Burguer Queen](#1-burguer-queen)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Objetivos de aprendizagem](#3-objetivos-de-aprendizagem)
* [4. Considerações gerais](#4-considerações-gerais)
* [5. Critérios de aceitação mínimos do
  projeto](#5-critérios-de-aceitação-mínimos-do-projeto)
* [6. Hacker Edition](#6-hacker-edition)
* [7. Dicas e leituras complementares](#7-dicas-e-leituras-complementares)

***

## 1. Burguer Queen 

É uma SPA construída com ReactJs para agilizar os processos dos pedidos dos clientes de um restaurante fast-food. Sua interface foi desenvolvida para ser utilizada em _tablet_. 

A aplicação pode ser acessada pelo seguinte link: [Burguer Queen](https://burguer-queen-aff2c.firebaseapp.com)

Esta aplicação solicita ao usuário o cadastro via email e login com email e senha, esta etapa é responsável pelo redirecionamento a página de interesse de acordo com a a ocupação (Garçon/Cozinheiro).

![Page Login](https://raw.githubusercontent.com/JessikaFujimura/SAP003-burger-queen/master/src/Image/PageLogin.png)

![Page CreateAccount](https://raw.githubusercontent.com/JessikaFujimura/SAP003-burger-queen/master/src/Image/PageCreateAccount.png)

A interface do Garçon mostra as opções de : 
* Novo Pedido
* Pedido Realizados
* Entregar Pedidos

Em _Novo Pedido_, há dois menus (café da manhã e restante do dia), cada
um com todos os seus _produtos_. O usuário escolhe os _produtos_
adicionar e a interface mostra o _resumo do pedido_ com o custo total.

Em _Pedidos Realizados_, são mostrados todos os pedidos feitos por todos os usuários. Há a possibilidade de excluir o pedido.

Em _Entregar Pedido_, são mostrados todos os pedidos que estão prontos para ser entregues. Assim que forem entregues, há como marcar como entregue através do botão.

![Page Hall](https://raw.githubusercontent.com/JessikaFujimura/SAP003-burger-queen/master/src/Image/BQHall-2020-01-14_11.35.gif)

A interface da Cozinha mostra as opções de : 
* Pedidos em Produção
* Pedidos Prontos
* Histórico de Pedidos

Em _Pedidos em Produção_, são mostrados os pedidos feitos pelos garçons a medida que são finalizados. O usuário pode marcar os pedidos como prontos e assim apresentar o tempo de preparo.

Em _Pedidos Prontos_, são mostrados os que foram marcados como prontos. Há a possibilidade de arquivar o pedido, alterando o status do pedido para _entregue_.

Em _Histórico de Pedidos_, são mostrados todos os pedidos entregues.

![Page Kitchen](https://raw.githubusercontent.com/JessikaFujimura/SAP003-burger-queen/master/src/Image/BQKitchen-2020-01-14_11.40.gif)


## 2. Planejamento 

Este projeto foi desenvolvido por Histórias de usuários.

#### [História de usuário 1] Cliente deve poder anotar o seu pedido

Eu como cliente quero poder anotar o meu pedido saber o valor de cada 
produto e poder enviar o pedido para a cozinha para ser preparado.

##### Critérios de aceitação

O que deve acontecer para satisfazer as necessidades do usuário?

* Anotar o nome e mesa.
* Adicionar produtos aos pedidos.
* Excluir produtos.
* Ver resumo e o total da compra.
* Enviar o pedido para a cozinha (guardar em algum banco de dados).
* Funcionar bem e se adequar a um _tablet_.


***

#### [História de usuário 2] Chefe de cozinha deve ver os pedidos

Eu como chefe de cozinha quero ver os pedidos dos clientes em ordem, poder marcar que estão prontos e poder notificar os garçons/garçonetes que o pedido está pronto para ser entregue ao cliente.

##### Critérios de aceitação

* Ver os pedidos à medida em que são feitos.
* Marcar os pedidos que foram preparados e estão prontos para serem servidos.
* Ver o tempo que levou para preparar o pedido desde que chegou, até ser marcado como concluído.


***

#### [História de usuário 3] Garçom/Garçonete deve ver os pedidos prontos para servir

Eu como garçom/garçonete quero ver os pedidos que estão prontos para entregá-los rapidamente aos clientes.

##### Critérios de aceitação

* Ver a lista de pedidos prontos para servir.
* Marque os pedidos que foram entregues.

***

#### [História de usuário 4] Usuário deve ter seu perfil (login/senha) para acessar o sistema.

Eu como funcionário do restaurante quero entrar na plataforma e ver apenas a tela importante para o meu trabalho.

##### Critérios de aceitação

O que deve acontecer para satisfazer as necessidades do usuário?

* Criar login e senha.
* Criar tipo de usuário (cozinha / salão).
* Entrar na tela correta para cada usuário.

## 6. PWA

Esta aplicação atende os critérios para PWAs (Progressive Web Apps). 

Foi usado o Lighthouse, que é uma ferramenta do Google avaliar se a aplicação segue as "boas práticas".

![PWA](https://raw.githubusercontent.com/JessikaFujimura/SAP003-burger-queen/master/src/Image/pwa.png)


## 7. Contribuição

* Faça um _fork_ deste repositório (no GitHub).

* Clone seu _fork_ no seu computador:

* Instale o npm no projeto por `npm install`

* Para abrir a aplicação `npm start`


## 8. Ferramentas utilizadas

#### Framework / biblioteca

* [React Hooks](https://reactjs.org/docs/hooks-intro.html)
* [Aphrodite](https://github.com/Khan/aphrodite)

#### Ferramentas

* [npm-scripts](https://docs.npmjs.com/misc/scripts)
* [Babel](https://babeljs.io/)
* [webpack](https://webpack.js.org/)

