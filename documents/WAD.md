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
<sub align="center">Figura 1 - Primeira persona desenvolvida.</sub>
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

- 3. Como administrador, quero configurar regras de agendamento, como limite de uso, para garantir uma utilização organizada dos espaços.
 
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
<sub align="center">Figura 1 - Primeira persona desenvolvida.</sub>
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

*Posicione aqui os diagramas de modelos relacionais do seu banco de dados, apresentando todos os esquemas de tabelas e suas relações. Utilize texto para complementar suas explicações, se necessário.*

*Posicione também o modelo físico com o Schema do BD (arquivo .sql)*

### 3.1.1 BD e Models (Semana 5)
*Descreva aqui os Models implementados no sistema web*

### 3.2. Arquitetura (Semana 5)

*Posicione aqui o diagrama de arquitetura da sua solução de aplicação web. Atualize sempre que necessário.*

**Instruções para criação do diagrama de arquitetura**  
- **Model**: A camada que lida com a lógica de negócios e interage com o banco de dados.
- **View**: A camada responsável pela interface de usuário.
- **Controller**: A camada que recebe as requisições, processa as ações e atualiza o modelo e a visualização.
  
*Adicione as setas e explicações sobre como os dados fluem entre o Model, Controller e View.*

### 3.3. Wireframes (Semana 03)

*Posicione aqui as imagens do wireframe construído para sua solução e, opcionalmente, o link para acesso (mantenha o link sempre público para visualização).*

### 3.4. Guia de estilos (Semana 05)

*Descreva aqui orientações gerais para o leitor sobre como utilizar os componentes do guia de estilos de sua solução.*


### 3.5. Protótipo de alta fidelidade (Semana 05)

*Posicione aqui algumas imagens demonstrativas de seu protótipo de alta fidelidade e o link para acesso ao protótipo completo (mantenha o link sempre público para visualização).*

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
