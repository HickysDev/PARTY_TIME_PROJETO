#Party Hub!
**"Party Hub!" é um aplicativo web que permite aos usuários criar, editar e selecionar serviços para suas festas de forma simples e direta, se comunicando diretamente com o banco de dados e tendo respostas para suas requisições na tela. O projeto foi pensado também para mobile, com responsividade para aparelhos móveis.**

##Funcionalidades Principais##

    -Criação de Festas: Os usuários podem criar novas festas, fornecendo detalhes como nome, anfitrião, descrição, orçamento e uma imagem para simbolizar a festa.
    -Edição e Exclusão: Além de criar festas, os usuários têm a capacidade de editar ou excluir festas existentes conforme necessário.
    -Seleção de Serviços: O aplicativo permite aos usuários selecionar uma variedade de serviços para suas festas, como Open Bar, Banda, decoração e muito mais.

##Tecnologias Utilizadas##

    -Front-end: O front-end do Party Hub foi desenvolvido utilizando a biblioteca React.
    -Back-end: No lado do servidor, o aplicativo utiliza Node.js.
    -Banco de Dados: O banco de dados MongoDB foi escolhido para armazenar e gerenciar os dados das festas.

##Funcionamento##

###Criação de festa:###

A primeira etapa do projeto é a criação de festas, onde pode ser ecessada pela navbar, no botão Criar Festa:
![criarFesta](https://github.com/HickysDev/PARTY_TIME_PROJETO/assets/92491007/267019a6-3b99-47aa-a23a-007241c71ecc)

Após isso o usuário será enviado para um form, onde ele pode colocar os atributos do evento:
![formCriar](https://github.com/HickysDev/PARTY_TIME_PROJETO/assets/92491007/24fcaf2a-f969-4012-81a9-aa8534b5676b)

O usuário também pode escolher os serviços que ele vai querer na festa, marcando aqueles desejados e apertando no botão "Criar Festa" para criá-la:
![servicos](https://github.com/HickysDev/PARTY_TIME_PROJETO/assets/92491007/9bc6edf7-dfc7-4d28-ac09-32d5eaaa25c8)
![criarFestaBotao](https://github.com/HickysDev/PARTY_TIME_PROJETO/assets/92491007/d71d18fd-3244-44f1-9f96-201f01d8aae8)

Caso o preço dos serviços passe o valor do orçamento da festa, o usuário será impedido de criá-la e também será avisado pelo sistema:
![erro](https://github.com/HickysDev/PARTY_TIME_PROJETO/assets/92491007/291b67c7-c8db-4cb5-ab6a-303e98d9c0ec)

Após arrumar isso, o usuário poderá criá-la e receberá a notificação de sucesso:
![sucesso](https://github.com/HickysDev/PARTY_TIME_PROJETO/assets/92491007/b3ba6ec8-eca5-4d01-9b40-6a2c8b1a6a30)

O evento aparecerá na Home do site e poderá ser vista ao clicar em detalhes:
![eventoCriado](https://github.com/HickysDev/PARTY_TIME_PROJETO/assets/92491007/31090c5b-f87d-4205-b2c3-7b9152b31534)

Aonde poderá ser visto seus atributos, serviços e também botões para editar e excluir a festa:
![pagEvento](https://github.com/HickysDev/PARTY_TIME_PROJETO/assets/92491007/9c0de615-bdd5-4355-9eb4-aa1cdfeea28d)

###Edição de festa:###
Ao clcar em editar, os elementos da festa já serão carregados do banco de dados e poderão ser alterados de acordo com a vontade do usuário:
![edicaoFesta](https://github.com/HickysDev/PARTY_TIME_PROJETO/assets/92491007/7614ab63-4c42-4000-82ce-56f1a7553d8c)

###Exclusão de festa:###
Após clicar em excluir, a festa será removida e o usuário será redirecionado para a home do site, com a notificação de sucesso:
![exclusaoFesta](https://github.com/HickysDev/PARTY_TIME_PROJETO/assets/92491007/c23e58f1-4913-4f15-aa45-a674d36195aa)

###Projeto já com as festas:###
Após a adição de diversas festas, a home ficará assim:
![homeFinal](https://github.com/HickysDev/PARTY_TIME_PROJETO/assets/92491007/28ec9af8-861e-4a8e-be83-0d18c9900408)

## Referências
Projeto feito a partir do curso da Udemy "Formação Front-end - HTML, CSS, JavaScript, React e +" (https://www.udemy.com/course/formacao-front-end-html-css-javascript-react-e/)
