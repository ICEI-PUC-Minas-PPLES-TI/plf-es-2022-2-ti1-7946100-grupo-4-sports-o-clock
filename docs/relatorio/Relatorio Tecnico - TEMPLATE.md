# Sports o'clock

## PROGRAMAÇÃO DE ESPORTES - ENGENHARIA DE SOFTWARE

## Participantes

- Luís Miguel Souza Almeida
- Paulo Victor Pimenta Rubinger

# Estrutura do Documento

- [Informações do Projeto](#informações-do-projeto)
  - [Participantes](#participantes)
- [Estrutura do Documento](#estrutura-do-documento)
- [Introdução](#introdução)
  - [Problema](#problema)
  - [Objetivos](#objetivos)
  - [Justificativa](#justificativa)
  - [Público-Alvo](#público-alvo)
- [Especificações do Projeto](#especificações-do-projeto)
  - [Personas e Mapas de Empatia](#personas-e-mapas-de-empatia)
  - [Histórias de Usuários](#histórias-de-usuários)
  - [Requisitos](#requisitos)
    - [Requisitos Funcionais](#requisitos-funcionais)
    - [Requisitos não Funcionais](#requisitos-não-funcionais)
  - [Restrições](#restrições)
- [Projeto de Interface](#projeto-de-interface)
  - [User Flow](#user-flow)
  - [Wireframes](#wireframes)
- [Metodologia](#metodologia)
  - [Divisão de Papéis](#divisão-de-papéis)
  - [Ferramentas](#ferramentas)
  - [Controle de Versão](#controle-de-versão)
- [**############## SPRINT 1 ACABA AQUI #############**](#-sprint-1-acaba-aqui-)
- [Projeto da Solução](#projeto-da-solução)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Arquitetura da solução](#arquitetura-da-solução)
- [Avaliação da Aplicação](#avaliação-da-aplicação)
  - [Plano de Testes](#plano-de-testes)
  - [Ferramentas de Testes (Opcional)](#ferramentas-de-testes-opcional)
  - [Registros de Testes](#registros-de-testes)
- [Referências](#referências)


# Introdução

## Problema

Diante do cenário atual, os esportes passaram a ser televisionados por diversas plataformas de streamings, e quem não tem conhecimento das mesmas, passam por dificuldades na hora de encontrar informações acerca de horários de transmissão. Isso faz com que o cliente não perca a transmissão de seus esportes favoritos, sendo impossibilitado de praticar o seu lazer simplesmente por uma falta de informação.


## Objetivos

> • Desenvolver uma aplicação web para ajudar apreciadores de esportes em geral a conseguirem assistir seus esportes favoritos.

## Objetivos Específicos
-> Fornecer informações a pessoas com clareza e direto ao ponto.

-> Incentivar as pessoas a consumir programas esportivos, por ser um ótimo passsatempo e um estímulo à prática de esportes.

## Justificativa

> Esse projeto foi pensado na necessidade que existe nos dias atuais de fornecer informações mais claras e objetivas sobre programas esportivos, seja ele qual for.
> Nosso objetivo é entregar ao usuário informações relevantes acerca das programações com facilidade de acesso.
> Essa iniciativa foi tomada pensando principalmente no público de maior idade, que na maioria dos casos, possuem dificuldade para procurar em diversos sites ou apps informações sobre as programações de jogos de seu esporte preferido.

## Público-Alvo

Pessoas que não possuem facilidade em encontrar informações sobre os esportes hoje em dia, com atenção especial também aos idosos, que não conseguem ter muita facilidade com pesquisas na internet.
 
# Especificações do Projeto

Nessa seção, será apresentada uma visão um pouco mais aprofundada do projeto, atráves da elaboração das Personas, Mapa de Empatia, História de Usuários, Requisitos e as Restrições do Projeto 

# Personas e Mapas de Empatia
## PERSONA E MAPA DE EMPATIA 1
![Persona1](https://user-images.githubusercontent.com/113461327/191337426-21ccf8c4-8f4e-4174-9b69-30a176a0ed7f.jpg)
![mapaempatia1](https://user-images.githubusercontent.com/113461327/191338528-d2d656b9-bba5-4750-90aa-7f94678368c7.jpg)

## PERSONA E MAPA DE EMPATIA 2
![personaa2](https://user-images.githubusercontent.com/113461327/191338677-acf3e0ad-19e5-48d8-be85-bfafbb7c0f07.jpg)
![mapaempatia 2](https://user-images.githubusercontent.com/113461327/191338707-c0841d52-205b-475e-ace8-eca978a8bd76.jpg)

## PERSONA E MAPA DE EMPATIA 3
![Persona3](https://user-images.githubusercontent.com/113461327/191338773-0c6d06f3-687c-490b-b6d2-c3702a90d2ca.jpg)
![mapaempatia3](https://user-images.githubusercontent.com/113461327/191338803-a2a06bc4-cabb-4825-bc5b-67aee1341bb4.jpg)


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE`         |PARA ... `MOTIVO/VALOR`                 |
|--------------------|--------------------------------------------|----------------------------------------|
|Usuário do sistema  |Informações sobre jogos de futebol          | Não perder tempo procurando            |
|Usuário do sistema  |Informações sobre jogos de vôlei            | Encontra-los com mais facilidade       |
|Usuário do sistema  |Informações sobre jogos de basquete         | Encontra-los com mais facilidade
|Administrador       |Espaço para feedback dos usuários           |Se informar sobre as opiniões dos usuários |
|Administrador       |Espaço com os destaques do esporte na semana|Tornar o site menos complexo            |


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário faça buscas pelo time |  ALTA |
|RF-002| Apresentar o nome dos times que irão disputar o jogo |  ALTA |
|RF-004| Informar o horário de transmissão dos jogos |  ALTA |
|RF-006| Conter informação de jogos de futebol, basquete  |  MÉDIA |
|RF-008| Conter um botão para cada um dos dois esportes que levarão o usuário à página com as informações  |  MÉDIA |
|RF-009| Informar em qual estádio o jogo irá ocorrer |  BAIXA |
|RF-010| Conter um botão em cada página para voltar à página principal |  BAIXA |



### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| Aplicação deve ser feita em formato WEB |  ALTA |
|RNF-002| Deve conter design sugestivo e direto |  ALTA |
|RNF-003| O sistema deve ser responsivo para rodar em um dispositivos móveis | MÉDIA | 
|RNF-004| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 
|RNF-005| Mostrar informação ao usuário com poucas interações com o sistema |  BAIXA |


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| A aplicação deve ser utilizada de modo gratuito       |

# Projeto de Interface

A interface do nosso projeto foi criada de forma bem objetiva, para que o usuário não necessite de muito conhecimento no meio tecnológico para utilizá-la. Assim sendo, com poucos passos ele encontrará o que deseja. Por meio dela e com base nas histórias de usuários, buscamos atender todos os requisitos desejados.

## User Flow

![fluxodeusuario](https://user-images.githubusercontent.com/113461327/192163159-21780ad7-ae36-4031-8d72-7002c0e23019.png)



# Wireframes

## Home
![home](https://user-images.githubusercontent.com/113461327/192169380-9442c5cf-7006-414e-8a99-d1de1e1acdd4.jpeg)
## Tela de busca por campeonatos
![busca por campeonato](https://user-images.githubusercontent.com/113461327/192169387-1cd16089-a1aa-4091-931a-1f1b2e2a5169.jpeg)
## Tela de busca por esportes
![busca por esporte](https://user-images.githubusercontent.com/113461327/192169388-f941931a-69dd-450d-9b49-4a2a5a6c36bb.jpeg)


# Metodologia

Foi adotada uma metodologia ágil com tarefas divididas entre os membros, adotando reuniões frequentes para verificar o andamento da sprint, avaliando e se necessário readaptando o processo de execução.

## KANBAN - PROGRAMAÇÃO DE ESPORTES

![kanban programação esportes](https://user-images.githubusercontent.com/113461327/192166872-a83c19bf-4451-4c51-88a2-7f4d7c9eea30.png)

## Divisão de Papéis

|Integrante | Função       |
|-----------|--------------|
|Luís       | Desenvolvedor|
|Paulo      | Desenvolvedor|
|Professores| Project owner|


## Ferramentas


| Ambiente  | Plataforma              |Link de Acesso |
|-----------|-------------------------|---------------|
|Editor de código  | VS CODE |  | 
|Ferramentas de comunicação | Whatsapp,Microsoft teams | [Microsoft Teams](https://teams.microsoft.com/_#/school/conversations/TIAW%20-%20EQUIPE%204%20-%20Programa%C3%A7%C3%A3o%20Esportes?threadId=19:2a8e652b3f8c49139834ff41fd9e4800@thread.tacv2&ctx=channel) | 
|Plataforma de hospedagem | Github | [Github](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2022-2-ti1-plf-es-2022-2-ti1-grupo-4) | 
|Ferramentas de diagramação | Figma | [Figma](https://www.figma.com/file/IlW3YHwLYTDWwXtQkLYJkx/Template-do-Site---Grupo-4?node-id=0%3A1) | 



## Tecnologias Utilizadas

Foi utilizado para o projeto, tecnologias específicas de programação como:

Vscode
Github (repositório)
Linguagens HTML, CSS e Javascript


## Arquitetura da solução

Foi feito um trabalho integrado com API's de esportes para realizar busca de informações sobre os jogos


# Avaliação da Aplicação


## Registros de Testes

Até o presente momento, não foram encontrados erros mediante aos testes
