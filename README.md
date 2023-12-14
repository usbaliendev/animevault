# Um aplicativo moderno serverside Next 14 com ações de servidor, rolagem infinita e animações framer-motion

![Anime Website](https://raw.githubusercontent.com/usbaliendev/animevault/main/public/project.png)

### [🌐 Meu portfolio website](https://usbaliendev.com/)

## O que são server actions?
Dentro do framework do NextJS, server actions são funções que rodam no servidor que manipulam dados com zero JavaScript no lado do cliente, podemos chamar e invocar essa funções de servidor da mesma forma que funções JS comuns usando a sintaxe "use server" dentro do arquivo.

```javascript
"use client";

async function requestUsername (formData) {
  "use server";
  const username = formData.get("username");
  // ...
}

export default function App() {
  return (
    <form action={requestUsername}>
      <input type="text" name="username"/>
      <button type="submit">Request</button>
    </form>
  );
}
```
>Um componente de servidor está fazendo um request pra uma função de servidor? Isso mostra que não é apenas uma chamada de função.

## Como elas funcionam?
No exemplo acima ☝🏻 Uma request foi feita para a API do Next para chamar essa função, mas não conseguimos ver isso por que o NextJS faz isso por baixo do código, ou seja, tudo que escrevemos dentro de uma função com "use server" é convertido em uma API com método POST.

## API route x Server Actions

**Então porque usar "use server" e não escrever uma request API?**
O beneficio de aderir as server side functions é escrever menos código. Usando server actions podemos focar mais nas regras de negócio, na lógica de negócio, focar em pegar os datos do formulário e as opereções desejadas. Já usando uma API você não apenas tem que fazer uma request você mesmo como também tem que criar uma API no servidor de onde você vai receber de um client, seria o dobro do trabalho.

Porém há algo a se atentar, tudo o que um server action faz é fazer uma post request que não temos muito controle, pois quem gerencia tudo isso é o NextJS o que pode levar a problemas de compatibilidade em caso de estarmos desenvolvendo app em desktop ou mobile, neste cenário usar server actions não faz sentido, pelo menos por agora porque atualizar um endpoint de uma server action múltiplas vezes para desktop, mobile e web se torna arriscado e desnecessário, com fé o Vercel dê uma solução para isso. Mas se estamos desenvolvendo apenas webapps, faz todo sentido aproveitar os benefícios.

Outra grande razão para usar serverside actions é menos código no clientside, já que estaremos manipilando as chamadas no DB e lógica de negócios diretamente, o cliente recebe menos código(JS, HMTL e CSS), isso significa que as server action funcionarão mesmo que o cliente desabilite Javascript no seu navegador. Aliviando assim o volume de processamento de dados do cliente, dessa forma as páginas carregam mais rápido, serão mais resposivas e ágeis, assim como se beneficiar das engines de pesquisa, o famoso SEO, isso melhora o core web vitals, crawl budget, crawl ranking e a experiência de usuário. O que significa que quão melhor seu site funcionar mais pessoas você movimentará nele, mais receita e engajamento real, pois ninguém tem ânimo serviços com páginas lentas e irresponsivas.

## Como usar elas da melhor forma?

Podemos usar server action não apenas dentro de componentes de cliente, pode ser usada em componentes de servidor(server components) também:

```javascript
"use server"

export async function fetchAnime(page: number): Promise<AnimeCard[]> {
  const response = await fetch("alguma-url")
  const data = await response.json();
}
```
Podemos usar server actions para muito mais do que apenas receber uma quantidade de dados, elas são muito mais poderosas que isso, elas podem serem usadas para mutations, criar, atualizar e deletar, além da tipica read GET request. Server acions podem performar o CRUD completo.

## A prática disso no projeto

No projeto aqui usei server actions para fazer as request da API, dessa forma quase TODO a lógica e renderização fica na parte do servidor. Fiz o uso de boas práticas para invocar servidores de componente SOMENTE quando necessários, na mudança de algum estado ou contexto, ou seja no uso dos Hooks do React, dessa forma apenas 2 componentes no projeto todo são de processamento do cliente que no caso são:
 * Spin de carrregar mais
 * MotionDiv usando framer motion

Todo o resto é feito no servidor de forma rápida, eficiente e aumentando muito a performance da aplicação.

### ESSE PROJETO SERÁ ATUALIZADO COM MAIS FUNCIONALIDADES COM O TEMPO

### API usada:

[Shikimori one Animes API](https://shikimori.one/api/doc/1.0/animes/index)

### Pacotes usados:

* Infinite Scroll - [React intersection Observer](https://www.npmjs.com/package/react-intersection-observer)
* [Framer Motion](https://www.framer.com/motion/)

### Feito estudando:
[NextJS Partia PreRendering](https://www.partialprerendering.com/)
