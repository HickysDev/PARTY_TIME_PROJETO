# Party Hub!
**"Party Hub!" é um aplicativo web que permite aos usuários criar, editar e selecionar serviços para suas festas de forma simples e direta, se comunicando diretamente com o banco de dados e tendo respostas para suas requisições na tela. O projeto foi pensado também para mobile, com responsividade para aparelhos móveis.**

## Funcionalidades Principais ##

<ul>
        <li>Criação de Festas: Os usuários podem criar novas festas, fornecendo detalhes como nome, anfitrião, descrição, orçamento e uma imagem para simbolizar a festa.</li>
        <li>Edição e Exclusão: Além de criar festas, os usuários têm a capacidade de editar ou excluir festas existentes conforme necessário.</li>
        <li>Seleção de Serviços: O aplicativo permite aos usuários selecionar uma variedade de serviços para suas festas, como Open Bar, Banda, decoração e muito mais.</li>
      </ul>

## Tecnologias Utilizadas ##

<ul>
        <li>Front-end: O front-end do Party Hub foi desenvolvido utilizando a biblioteca React.</li>
        <li>Back-end: No lado do servidor, o aplicativo utiliza Node.js.</li>
        <li>Banco de Dados: O banco de dados MongoDB foi escolhido para armazenar e gerenciar os dados das festas.</li>
      </ul>

## Funcionamento ##

### Criação de festa: ###

<p>A primeira etapa do projeto é a criação de festas, onde pode ser ecessada pela navbar, no botão Criar Festa:</p>
      <p align="center">
      <img src="https://github.com/HickysDev/PARTY_TIME_PROJETO/assets/92491007/267019a6-3b99-47aa-a23a-007241c71ecc">
      </p>

<p>Após isso o usuário será enviado para um form, onde ele pode colocar os atributos do evento:</p>
      <p align="center">
      <img src="https://github.com/HickysDev/PARTY_TIME_PROJETO/assets/92491007/24fcaf2a-f969-4012-81a9-aa8534b5676b">
      </p>

<p>O usuário também pode escolher os serviços que ele vai querer na festa, marcando aqueles desejados e apertando no botão "Criar Festa" para criá-la:</p>
<p align="center">
  <img src="https://github.com/HickysDev/PARTY_TIME_PROJETO/assets/92491007/9bc6edf7-dfc7-4d28-ac09-32d5eaaa25c8">
     <img width="460" src="https://github.com/HickysDev/PARTY_TIME_PROJETO/assets/92491007/d71d18fd-3244-44f1-9f96-201f01d8aae8">
</p>

<p>Caso o preço dos serviços passe o valor do orçamento da festa, o usuário será impedido de criá-la e também será avisado pelo sistema:</p>
<p align="center">
  <img src="https://github.com/HickysDev/PARTY_TIME_PROJETO/assets/92491007/291b67c7-c8db-4cb5-ab6a-303e98d9c0ec">
</p>

<p>Após arrumar isso, o usuário poderá criá-la e receberá a notificação de sucesso:</p>
<p align="center">
  <img src="https://github.com/HickysDev/PARTY_TIME_PROJETO/assets/92491007/b3ba6ec8-eca5-4d01-9b40-6a2c8b1a6a30">
</p>


<p>O evento aparecerá na Home do site e poderá ser vista ao clicar em detalhes:</p>
<p align="center">
  <img src="https://github.com/HickysDev/PARTY_TIME_PROJETO/assets/92491007/31090c5b-f87d-4205-b2c3-7b9152b31534">
</p>


<p>Aqui você poderá ver os atributos do evento, os serviços selecionados e botões para editar e excluir a festa:</p>
<p align="center">
  <img src="https://github.com/HickysDev/PARTY_TIME_PROJETO/assets/92491007/9c0de615-bdd5-4355-9eb4-aa1cdfeea28d">
</p>


### Edição de festa: ###
<p>Ao clicar em editar, os elementos da festa serão carregados do banco de dados e poderão ser alterados de acordo com a vontade do usuário:</p>
<p align="center">
  <img src="https://github.com/HickysDev/PARTY_TIME_PROJETO/assets/92491007/7614ab63-4c42-4000-82ce-56f1a7553d8c">
</p>

### Exclusão de festa: ###
<p>Após clicar em excluir, a festa será removida e o usuário será redirecionado para a página inicial do site, com a notificação de sucesso:</p>
<p align="center">
  <img src="https://github.com/HickysDev/PARTY_TIME_PROJETO/assets/92491007/c23e58f1-4913-4f15-aa45-a674d36195aa">
</p>

### Projeto já com as festas: ###
<p>Após a adição de diversas festas, a página inicial do site ficará assim:</p>
<p align="center">
  <img src="https://github.com/HickysDev/PARTY_TIME_PROJETO/assets/92491007/28ec9af8-861e-4a8e-be83-0d18c9900408">
</p>

## Referências
Projeto feito a partir do curso da Udemy "Formação Front-end - HTML, CSS, JavaScript, React e +" (https://www.udemy.com/course/formacao-front-end-html-css-javascript-react-e/)
