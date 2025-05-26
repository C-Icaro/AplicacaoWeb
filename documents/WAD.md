# Web Application Document - Projeto Individual - Módulo 2 - Inteli

**_Os trechos em itálico servem apenas como guia para o preenchimento da seção. Por esse motivo, não devem fazer parte da documentação final._**

## KeepRoom

#### Carlos Icaro Kauã Coelho Paiva

## Sumário

1. [Introdução](#c1)  
2. [Visão Geral da Aplicação Web](#c2)  
3. [Projeto Técnico da Aplicação Web](#c3)  
4. [Desenvolvimento da Aplicação Web](#c4)  
5. [Referências](#c5)  

<br>

## <a name="c1"></a>1. Introdução (Semana 01)

Opção escolhida: 2

&nbsp;&nbsp;&nbsp;&nbsp;O projeto KeepRoom surgiu da necessidade de otimizar o uso de espaços compartilhados em instituições e organizações que lidam com um grande número de discentes e colaboradores. Essa demanda evidencia a importância de um sistema eficiente para a reserva desses espaços de maneira sistemática, controlada e sincronizada.

&nbsp;&nbsp;&nbsp;&nbsp;Para atender a essa necessidade, o KeepRoom propõe uma solução web completa, com banco de dados, backend e frontend totalmente integrados, visando transformar e organizar a dinâmica de utilização desses ambientes.

&nbsp;&nbsp;&nbsp;&nbsp;Este documento apresenta os principais componentes envolvidos no desenvolvimento do projeto, desde sua concepção até os aspectos técnicos e estratégicos.

---

## <a name="c2"></a>2. Visão Geral da Aplicação Web

### 2.1. Personas (Semana 01)

&nbsp;&nbsp;&nbsp;&nbsp;A criação de personas é parte fundamental na elaboração de um projeto web. Elas se caracterizam como usuários fictícios que se assemelham com os possíveis reais usuários do projeto. Sua importância advém da sua capacidade de produzir empatia e gerar conhecimento do usuário final o que nos possibilita afunilar o desenvolvimento do projeto de forma precisa e eficaz. Dessa forma, conseguimos quebrar o paradigma de desenvolver para "qualquer usuário". 

&nbsp;&nbsp;&nbsp;&nbsp;Aqui seguem as personas pro projeto KeepRoom:

<div align="center">
<sub align="center">Figura 01 - Primeira persona desenvolvida.</sub>
</div>
<div align="center">
<img src="/assets/wad/persona01.png" alt="Persona01 - Imagem" border="0" width=90% height=90%>
</div>
<div align="center">
<sup>Fonte: Carlos Icaro, 2025.</sup>
</div>

### 2.2. User Stories (Semana 01)

&nbsp;&nbsp;&nbsp;&nbsp;As user stories, ou histórias do usuário em tradução direta, servem para capturar as necessidades reais dos usuários do sistema e ajudam os desenvolvedores a entender claramente o que precisa ser construido.

&nbsp;&nbsp;&nbsp;&nbsp;Aqui seguem as user stories do projeto KeepRoom:
- 1. Como usuário, quero visualizar a disponibilidade das salas em tempo real, para que eu possa escolher o melhor horário para minha necessidade;

- 2. Como usuário, quero receber uma confirmação do meu agendamento, para ter segurança de que a reserva foi concluída corretamente;

- 3. Como administrador, quero configurar regras de agendamento, como limite de uso, para garantir uma utilização organizada dos espaços.
 
&nbsp;&nbsp;&nbsp;&nbsp;Além disso, para garantir a usabilidade das user stories, aplica-se os critérios INVEST. Eles são um conjunto de boas práticas que ajudam a garantir que uma user story seja bem escrita e realmente útil para o projeto. Cada letra de INVEST representa uma característica que a história deve ter:

- I – Independent (Independente):
A user story deve ser o mais independente possível das outras. Assim, ela pode ser desenvolvida, testada e entregue separadamente.

- N – Negotiable (Negociável):
A história é um convite à conversa, não um contrato fixo. Ela pode (e deve) ser discutida e ajustada conforme o time entender melhor a necessidade.

- V – Valuable (Valiosa):
A história deve gerar valor para o usuário ou para o negócio. Se não traz benefício real, provavelmente não vale a pena ser implementada.

- E – Estimable (Estimável):
A equipe precisa ser capaz de estimar o esforço necessário para implementar a história. Se ela for muito vaga ou complexa, precisa ser refinada.

- S – Small (Pequena):
A user story deve ser pequena o suficiente para ser concluída dentro de um sprint (ou em poucos dias, dependendo da metodologia). Se for muito grande, é melhor quebrar em histórias menores.

- T – Testable (Testável):
Deve ser possível escrever testes para validar se a história foi concluída corretamente. Se não der para testar, ela está mal definida.

&nbsp;&nbsp;&nbsp;&nbsp;Análises invest das user stories:

<div align="center">
<sub align="center">Quadro 01 - Quadro de análises INVEST.</sub>
</div>
<div align="center">

| Critério | Atende ao critério? | Motivo |
|:---------|:--------------------|:-------|
|  **User story 01:** | 
| Independent (Independente) | ✅ | A funcionalidade de visualizar disponibilidade pode ser desenvolvida separadamente de outras funcionalidades como reserva ou cancelamento. |
| Negotiable (Negociável) | ✅ | A maneira como a disponibilidade será exibida pode ser discutida e adaptada conforme necessário. |
| Valuable (Valiosa) | ✅ | Traz valor direto ao usuário, permitindo escolher melhor o horário de uso das salas. |
| Estimable (Estimável) | ✅ | É possível estimar o esforço para implementar a visualização em tempo real da disponibilidade. |
| Small (Pequena) | ✅ | A história é focada em uma única ação simples: visualizar informações, sem envolver multiplas ações. |
| Testable (Testável) | ✅ | Pode ser testada verificando se as salas disponíveis são exibidas corretamente e se as atualizações acontecem em tempo real. |

</div>
<div align="center">
<sup>Fonte: Carlos Icaro, 2025.</sup>
</div>
 
     

---

## <a name="c3"></a>3. Projeto da Aplicação Web

### 3.1. Modelagem do banco de dados  (Semana 3)

&nbsp;&nbsp;&nbsp;&nbsp;Um banco de dados é uma estrutura que permite armazenar, organizar e acessar as informações usadas pelo sistema, como, no caso do projeto KeepRoom, dados de usuários, reservas e salas. Abaixo segue o diagrama do banco de dados e o código SQL para a sua criação no DBDriagram.

<div align="center">
<sub align="center">Figura 02 - Diagrama do banco de dados.</sub>
</div>
<div align="center">
<img src="/assets/modelo-banco.jpg" alt="Banco de dados - Imagem" border="0" width=90% height=90%>
</div>
<div align="center">
<sup>Fonte: Carlos Icaro, 2025.</sup>
</div>

<div align="center">
<sub align="center">Figura 03 - Código SQL do diagrama do banco de dados.</sub>
</div>
<div align="center">
<img src="/assets/modelo-banco-SQL.jpg" alt="Código banco de dados - Imagem" border="0" width=90% height=90%>
</div>
<div align="center">
<sup>Fonte: Carlos Icaro, 2025.</sup>
</div>

### 3.1.1 BD e Models (Semana 5)
*Descreva aqui os Models implementados no sistema web*

### 3.2. Arquitetura (Semana 5)

A arquitetura da aplicação KeepRoom segue o padrão **MVC (Model-View-Controller)**, que separa as responsabilidades em três camadas principais:

- **Model:** Responsável pela lógica de acesso e manipulação dos dados, interagindo diretamente com o banco de dados PostgreSQL. No projeto, isso está representado pelo arquivo `models/TarefaModel.js`, que executa as operações CRUD na tabela `tarefas`.
- **Controller:** Responsável por receber as requisições HTTP, processar as ações, validar dados e acionar os métodos do Model. No projeto, está representado pelo arquivo `controllers/TarefaController.js`.
- **View:** Responsável pela interface com o usuário. No contexto de uma API, a View é representada pelas respostas JSON enviadas ao cliente (por exemplo, ao listar tarefas ou retornar o resultado de uma operação).

O fluxo de dados ocorre da seguinte forma:
1. O usuário interage com o sistema através do cliente (navegador ou ferramenta como Postman).
2. O cliente faz uma requisição HTTP para o servidor.
3. O Controller recebe a requisição, valida os dados e chama o Model.
4. O Model executa a operação no banco de dados e retorna o resultado ao Controller.
5. O Controller formata a resposta e envia de volta ao cliente, que exibe ao usuário.

<div align="center">
<sub align="center">Figura 04 - Diagrama de arquitetura.</sub>
</div>
<div align="center">
<img src="/assets/Diagrama de arquitetura.jpg" alt="Diagrama de arquitetura - Imagem" border="0" width=90% height=90%>
</div>
<div align="center">
<sup>Fonte: Carlos Icaro, 2025.</sup>
</div>

**Explicação do fluxo:**
- O usuário acessa o sistema pelo navegador (cliente).
- O navegador faz requisições para as Views (endpoints da API).
- As Views acionam os Controllers, que processam as ações.
- Os Controllers usam os Models para acessar o banco de dados.
- Os Models executam as operações no PostgreSQL e retornam os dados para o Controller, que responde ao cliente.

### 3.3. Wireframes (Semana 03)

&nbsp;&nbsp;&nbsp;&nbsp;Wireframes são representações visuais simples das telas de um sistema, como se fossem o rascunho de uma interface. Eles ajudam a planejar a estrutura, a navegação e os elementos principais de cada página antes do desenvolvimento.

&nbsp;&nbsp;&nbsp;&nbsp;No projeto KeepRoom, os wireframes foram importantes para organizar as ideias, alinhar a produção a partir das user stories e guiar a construção da interface de forma clara e objetiva. Abaixo segue o wireframe do projeto.

<div align="center">
<sub align="center">Figura 04 - Tela de login.</sub>
</div>
<div align="center">
<img src="/assets/wireframe/Login page.png" alt="Tela de login - Imagem" border="0" width=90% height=90%>
</div>
<div align="center">
<sup>Fonte: Carlos Icaro, 2025.</sup>
</div>

&nbsp;&nbsp;&nbsp;&nbsp;De forma a alinhar a produção da aplicação com as user stories do projeto, a página de tela de agendamento de sala mostra a disponibilidade das salas em tempo real.

<div align="center">
<sub align="center">Figura 05 - Tela de agendamento de sala.</sub>
</div>
<div align="center">
<img src="/assets/wireframe/Agendamento de sala.png" alt="Tela de agendamento de sala - Imagem" border="0" width=90% height=90%>
</div>
<div align="center">
<sup>Fonte: Carlos Icaro, 2025.</sup>
</div>

Link para a visualização do Wireframe no Figma: https://www.figma.com/design/93FnfG1SPiijlc1V5ALbWN/KeepRoom?node-id=0-1

### 3.4. Guia de estilos (Semana 05)

&nbsp;&nbsp;&nbsp;&nbsp;O guia de estilos define cores, fontes, ícones e elementos visuais usados na interface. Ele garante consistência visual, facilita a comunicação da identidade do projeto e ajuda no desenvolvimento, mantendo a aparência do sistema organizada e padronizada em todas as páginas do KeepRoom. Abaixo segue o guia de estilos do projeto.

<div align="center">
<sub align="center">Figura 06 - Guia de estilos.</sub>
</div>
<div align="center">
<img src="/assets/MiniGuiadeEstilos.png" alt="Guia de estilos - Imagem" border="0" width=90% height=90%>
</div>
<div align="center">
<sup>Fonte: Carlos Icaro, 2025.</sup>
</div>


### 3.5. Protótipo de alta fidelidade (Semana 05)

&nbsp;&nbsp;&nbsp;&nbsp;O protótipo de alta fidelidade é a evolução do wireframe de baixa fidelidade após validação. Ele mostra em detalhes como o sistema vai parecer quando estiver pronto. Ele inclui cores, imagens e todos os detalhes visuais, ajudando a visualizar a experiência do usuário e validar o design antes do desenvolvimento final. Abaixo segue o protótipo de alta fidelidade da tela de login e agendamento.

<div align="center">
<sub align="center">Figura 07 - Tela de login em alta fidelidade.</sub>
</div>
<div align="center">
<img src="/assets/prototipoAltaFidelidade/LoginAF.png" alt=" Tela de login em alta fidelidade - Imagem" border="0" width=90% height=90%>
</div>
<div align="center">
<sup>Fonte: Carlos Icaro, 2025.</sup>
</div>

&nbsp;&nbsp;&nbsp;&nbsp;Em relação ao wireframe a tela de agendamento sofreu mudanças. Fora adicionado o campo "Meus agendamentos" para dar feedback visual ao usuário sobre os agendamentos realizados de sua autoria. Além disso, também foi retirado o tópico "Descrição" das salas, visto sua pouca serventia. No mais os outros elementos fundamentais da página foram mantidos.

<div align="center">
<sub align="center">Figura 08 - Tela de agendamento de salas em alta fidelidade.</sub>
</div>
<div align="center">
<img src="/assets/prototipoAltaFidelidade/AgendamentoDeSalaAF.png" alt="Tela de agendamento de salas em alta fidelidade - Imagem" border="0" width=90% height=90%>
</div>
<div align="center">
<sup>Fonte: Carlos Icaro, 2025.</sup>
</div>

&nbsp;&nbsp;&nbsp;&nbsp;Para conferir o fluxo de navegação básica do projeto, verifique o figma pelo link: https://www.figma.com/design/93FnfG1SPiijlc1V5ALbWN/KeepRoom?node-id=15-117



### 3.6. WebAPI e endpoints (Semana 05)

*Utilize um link para outra página de documentação contendo a descrição completa de cada endpoint. Ou descreva aqui cada endpoint criado para seu sistema.*  

### 3.7 Interface e Navegação (Semana 07)

*Descreva e ilustre aqui o desenvolvimento do frontend do sistema web, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar.*

---

## <a name="c4"></a>4. Desenvolvimento da Aplicação Web (Semana 8)

### 4.1 Demonstração do Sistema Web (Semana 8)

*VIDEO: Insira o link do vídeo demonstrativo nesta seção*
*Descreva e ilustre aqui o desenvolvimento do sistema web completo, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar.*

### 4.2 Conclusões e Trabalhos Futuros (Semana 8)

*Indique pontos fortes e pontos a melhorar de maneira geral.*
*Relacione também quaisquer outras ideias que você tenha para melhorias futuras.*



## <a name="c5"></a>5. Referências

_Incluir as principais referências de seu projeto, para que seu parceiro possa consultar caso ele se interessar em aprofundar. Um exemplo de referência de livro e de site:_<br>

---
---
