# Understand the hazards of using imperative code



Functional programming is a good habit. It keeps your code easy to manage, and saves you from sneaky bugs. But before we get there, let's look at an imperative approach to programming to highlight where you may have issues.

In English (and many other languages), the imperative tense is used to give commands. Similarly, an imperative style in programming is one that gives the computer a set of statements to perform a task.

Often the statements change the state of the program, like updating global variables. A classic example is writing a for loop that gives exact directions to iterate over the indices of an array.

In contrast, functional programming is a form of declarative programming. You tell the computer what you want done by calling a method or function.

JavaScript offers many predefined methods that handle common tasks so you don't need to write out how the computer should perform them. For example, instead of using the for loop mentioned above, you could call the map method which handles the details of iterating over an array. This helps to avoid semantic errors, like the "Off By One Errors" that were covered in the Debugging section.

Consider the scenario: you are browsing the web in your browser, and want to track the tabs you have opened. Let's try to model this using some simple object-oriented code.

A Window object is made up of tabs, and you usually have more than one Window open. The titles of each open site in each Window object is held in an array. After working in the browser (opening new tabs, merging windows, and closing tabs), you want to print the tabs that are still open. Closed tabs are removed from the array and new tabs (for simplicity) get added to the end of it.

The code editor shows an implementation of this functionality with functions for tabOpen(), tabClose(), and join(). The array tabs is part of the Window object that stores the name of the open pages.

Examine the code in the editor. It's using a method that has side effects in the program, causing incorrect behaviour. The final list of open tabs, stored in finalTabs.tabs, should be ['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab'] but the list produced by the code is slightly different.

Change Window.prototype.tabClose so that it removes the correct tab.

---

A programação funcional é um bom hábito. Ele mantém seu código fácil de gerenciar e evita bugs sorrateiros. Mas antes de chegarmos lá, vamos dar uma olhada em uma abordagem imperativa da programação para destacar onde você pode ter problemas.

Em inglês (e em muitos outros idiomas), o tempo imperativo é usado para dar comandos. Da mesma forma, um estilo imperativo de programação é aquele que fornece ao computador um conjunto de instruções para executar uma tarefa.

Freqüentemente, as instruções mudam o estado do programa, como atualizar variáveis ​​globais. Um exemplo clássico é escrever um loop for que fornece instruções exatas para iterar sobre os índices de um array.

Em contraste, a programação funcional é uma forma de programação declarativa. Você diz ao computador o que deseja fazer, chamando um método ou função.

JavaScript oferece muitos métodos predefinidos que tratam de tarefas comuns, então você não precisa escrever como o computador deve executá-las. Por exemplo, em vez de usar o loop for mencionado acima, você pode chamar o método map que trata dos detalhes da iteração em um array. Isso ajuda a evitar erros de semântica, como os "Erros desativados por um" que foram abordados na seção Depuração.

Considere o cenário: você está navegando na web em seu navegador e deseja rastrear as guias que abriu. Vamos tentar modelar isso usando algum código orientado a objetos simples.

Um objeto Janela é composto de guias e, geralmente, você tem mais de uma janela aberta. Os títulos de cada site aberto em cada objeto Window são mantidos em uma matriz. Depois de trabalhar no navegador (abrindo novas guias, mesclando janelas e fechando guias), você deseja imprimir as guias que ainda estão abertas. As guias fechadas são removidas da matriz e novas guias (para simplificar) são adicionadas ao final dela.

O editor de código mostra uma implementação dessa funcionalidade com funções para tabOpen (), tabClose () e join (). As guias de array são parte do objeto Window que armazena o nome das páginas abertas.

Examine o código no editor. Está usando um método que tem efeitos colaterais no programa, causando um comportamento incorreto. A lista final de guias abertas, armazenada em finalTabs.tabs, deve ser ['FB', 'Gitter', 'Reddit', 'Twitter', 'Médio', 'nova guia', 'Netflix', 'YouTube', ' Vine ',' GMail ',' Correio de trabalho ',' Docs ',' freeCodeCamp ',' nova aba '] mas a lista produzida pelo código é um pouco diferente.

Altere Window.prototype.tabClose para remover a guia correta. 

---

Explicação do problema

O que você deve notar é o fato de que a saída não é conforme sugerido nas instruções, que deve ser a seguinte matriz:
[
    'FB', 
    'Gitter', 
    'Reddit', 
    'Twitter', 
    'Medium', 
    'new tab', 
    'Netflix', 
    'YouTube', 
    'Vine', 
    'GMail', 
    'Work mail', 
    'Docs', 
    'freeCodeCamp', 
    'new tab'
].

Em vez disso, você receberá esta matriz: 

[
    ‘FB’, 
    ‘Gitter’, 
    ‘Reddit’, 
    ‘Twitter’, 
    ‘Medium’, 
    ‘new tab’, 
    ‘Netflix’, 
    ‘YouTube’, 
    ‘GMail’, 
    ‘Docs’, 
    ‘freeCodeCamp’, 
    ‘new tab’
].

Dê uma olhada na última parte do código para concluir onde está o problema.

Parte 1

var finalTabs = socialWindow

Depois que esta parte do código é executada, nosso array é ['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']

Parte 2

.tabOpen() // Abre uma nova guia para memes de gatos

Parte 3

Depois de adicionar uma ‘nova guia’ à matriz, nossa matriz agora é ['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium' , 'new tab']

.join(videoWindow.tabClose(2)) // Fechar a terceira guia na janela de vídeo e entrar

Esta parte do código deve supostamente fechar a terceira janela (índice 2, pois a contagem começa em 0) e retornar a janela de vídeo sem a terceira janela que é 'Vimeo' neste caso. Portanto, a matriz retornada deve ser semelhante a ['Netflix', 'YouTube', 'Vine']** e depois de adicioná-la à matriz principal, nossa matriz deve ser **['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium' , 'new tab', 'Netflix', 'YouTube', 'Vine']

Parte 4

.join(workWindow.tabClose(1).tabOpen());

Esta parte fecharia a segunda aba (índice 1) na janela de trabalho [‘GMail’, ‘Inbox’, ‘Work mail’, ‘Docs’, ‘freeCodeCamp’], que seria 'Caixa de entrada', e depois disso empurre um 'novo tab' à matriz, retornando [‘GMail’, ‘Work mail’, ‘Docs’, ‘freeCodeCamp’, ‘new tab’] e adicionando-a à matriz principal.

Se compararmos a matriz solicitada e a que recebemos depois de executar o código inicial, podemos ver que os valores ‘Vine’ e ‘Work mail’ são omitidos. Portanto, precisamos ver qual é a causa disso.
Agora que sabemos disso, verificaremos as operações feitas nesse array. Isso é feito na Parte 3:

.join(videoWindow.tabClose(2)) // Fechar a terceira guia na janela de vídeo e entrar

Podemos ver que tabClose() é executado neste array, então vamos analisar o código contido nesse método.

`tabClose = function (index) {
 1. var tabsBeforeIndex = this.tabs.splice(0, índice); // obter as guias antes da guia
 2. var tabsAfterIndex = this.tabs.splice(index); // obter as guias após a guia

 3. this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // junte-os
 4. return this;
 };`

Para um índice, tomaremos 2 - como feito no desafio.

    No início, nossa matriz videoWindow se parece com isto:
    ['Netflix', 'YouTube', 'Vimeo', 'Vine'].
    Após a execução da primeira linha, a variável tabsBeforeIndex pegará 2 (índice) valores a partir de 0 (splice (0,2)) e criará um novo array contendo-os.
    Arrays agora se parecem com isto:
    tabsBeforeIndex: ['Netflix', 'YouTube']
    videoWindow: ['Vimeo', 'Vine']

Você já pode ver porque splice() pode ser muito perigoso, já que sempre modifica o array em que é executado e retorna aquele array modificado - não é determinístico.

    Depois que a segunda linha é executada, tabsAfterIndex deve pegar os valores começando do índice (neste caso 2) e removê-los do array videoWindow. Como podemos ver que no estado atual (['Vimeo', 'Vine']), videoWindow não tem índice 2, então o array vazio é retornado. Estado final:
    tabsBeforeIndex: ['Netflix', 'YouTube']
    videoWindow: ['Vimeo', 'Vine']
    tabsAfterIndex: []

Após a terceira linha e a concatenação, o array retornado é o mesmo que tabsBeforeIndex, o que resulta em valores 'Vimeo' e 'Vine' não estando no array. 