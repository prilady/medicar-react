<h1 align="center">
  <img alt="Fastfeet" title="Medicar" src="assets/logo.png" width="300px" />
</h1>

<h3 align="center">
  Medicar
</h3>

<p align="center">Sistema para gestão de consultas em uma clínica médica</p>

<p align="center">
  <a href="#sobre-o-sistema">Sobre o sistema</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#fluxo-na-marcação-de-consultas">Fluxo na marcação de consultas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#critérios-consultas">Critérios consultas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#gear-backend">Backend</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#art-frontend">Frontend</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

## Sobre o sistema

Sistema para controlar a agenda dos médicos da clínica Medicar com o intuito de auxiliar clientes na marcação de consultas e gerenciar as agendas dos médico.

## Fluxo na marcação de consultas

O fluxo de marcação de consultas para que o paciente possa marcar uma consulta segue os seguintes passsos:
1. O paciente escolhe a especialidade desejada para a consulta (ex: Dermatologista)
1. Com isso, aparece todos os médicos da especialidade escolhida para que o paciente possa selecionar
1. Uma vez escolhido o médico desejado, aparece os dias em que o médico está disponível para realizar uma consulta
1. Ao selecionar um dia específico, aparece os horários disponíveis do médico para a data escolhida
1. Ao final deste processo, o paciente confirma a marcação da consulta e volta para a tela de listagem

## Critérios consultas

- O usuário pode marcar uma consulta
  - Não deve ser possível marcar consultas para um dia e horário não disponível
  - Não deve ser possível marcar consultas para dia e horário passados
- O usuário pode desmarcar uma consulta
  - Não deve ser possível desmarcar uma consulta que já aconteceu
- O usuário pode visualizar as todas as consultas marcadas que ainda não aconteceram
- O gestor da clínica pode cadastrar um médico
- O gestor da clínica pode criar a agenda do médico para cada dia

## :gear: Backend

Todas as implementações de backend estão na pasta **backend** e as especificações de como iniciá-lo estão descritas na seguinte [seção](backend/README.md)

## :art: Frontend

Para iniciar o frontend digite os seguintes comandos no terminal: 

```sh 
 cd frontend/medicar
 npm start
``` 
O frontend irá executar no seguinte link 
[localhost:4000](http://localhost:4000)

## :mega: Links úteis

- [LinkedIn da autora](https://www.linkedin.com/in/priscila-rocha-developer)
- [Documentação React](https://react.dev/)