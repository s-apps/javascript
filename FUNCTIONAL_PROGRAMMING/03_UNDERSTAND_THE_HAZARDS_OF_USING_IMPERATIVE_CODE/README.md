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

A programa????o funcional ?? um bom h??bito. Ele mant??m seu c??digo f??cil de gerenciar e evita bugs sorrateiros. Mas antes de chegarmos l??, vamos dar uma olhada em uma abordagem imperativa da programa????o para destacar onde voc?? pode ter problemas.

Em ingl??s (e em muitos outros idiomas), o tempo imperativo ?? usado para dar comandos. Da mesma forma, um estilo imperativo de programa????o ?? aquele que fornece ao computador um conjunto de instru????es para executar uma tarefa.

Freq??entemente, as instru????es mudam o estado do programa, como atualizar vari??veis ??????globais. Um exemplo cl??ssico ?? escrever um loop for que fornece instru????es exatas para iterar sobre os ??ndices de um array.

Em contraste, a programa????o funcional ?? uma forma de programa????o declarativa. Voc?? diz ao computador o que deseja fazer, chamando um m??todo ou fun????o.

JavaScript oferece muitos m??todos predefinidos que tratam de tarefas comuns, ent??o voc?? n??o precisa escrever como o computador deve execut??-las. Por exemplo, em vez de usar o loop for mencionado acima, voc?? pode chamar o m??todo map que trata dos detalhes da itera????o em um array. Isso ajuda a evitar erros de sem??ntica, como os "Erros desativados por um" que foram abordados na se????o Depura????o.

Considere o cen??rio: voc?? est?? navegando na web em seu navegador e deseja rastrear as guias que abriu. Vamos tentar modelar isso usando algum c??digo orientado a objetos simples.

Um objeto Janela ?? composto de guias e, geralmente, voc?? tem mais de uma janela aberta. Os t??tulos de cada site aberto em cada objeto Window s??o mantidos em uma matriz. Depois de trabalhar no navegador (abrindo novas guias, mesclando janelas e fechando guias), voc?? deseja imprimir as guias que ainda est??o abertas. As guias fechadas s??o removidas da matriz e novas guias (para simplificar) s??o adicionadas ao final dela.

O editor de c??digo mostra uma implementa????o dessa funcionalidade com fun????es para tabOpen (), tabClose () e join (). As guias de array s??o parte do objeto Window que armazena o nome das p??ginas abertas.

Examine o c??digo no editor. Est?? usando um m??todo que tem efeitos colaterais no programa, causando um comportamento incorreto. A lista final de guias abertas, armazenada em finalTabs.tabs, deve ser ['FB', 'Gitter', 'Reddit', 'Twitter', 'M??dio', 'nova guia', 'Netflix', 'YouTube', ' Vine ',' GMail ',' Correio de trabalho ',' Docs ',' freeCodeCamp ',' nova aba '] mas a lista produzida pelo c??digo ?? um pouco diferente.

Altere Window.prototype.tabClose para remover a guia correta. 

---

Explica????o do problema

O que voc?? deve notar ?? o fato de que a sa??da n??o ?? conforme sugerido nas instru????es, que deve ser a seguinte matriz:
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

Em vez disso, voc?? receber?? esta matriz: 

[
    ???FB???, 
    ???Gitter???, 
    ???Reddit???, 
    ???Twitter???, 
    ???Medium???, 
    ???new tab???, 
    ???Netflix???, 
    ???YouTube???, 
    ???GMail???, 
    ???Docs???, 
    ???freeCodeCamp???, 
    ???new tab???
].

D?? uma olhada na ??ltima parte do c??digo para concluir onde est?? o problema.

Parte 1

var finalTabs = socialWindow

Depois que esta parte do c??digo ?? executada, nosso array ?? ['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']

Parte 2

.tabOpen() // Abre uma nova guia para memes de gatos

Parte 3

Depois de adicionar uma ???nova guia??? ?? matriz, nossa matriz agora ?? ['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium' , 'new tab']

.join(videoWindow.tabClose(2)) // Fechar a terceira guia na janela de v??deo e entrar

Esta parte do c??digo deve supostamente fechar a terceira janela (??ndice 2, pois a contagem come??a em 0) e retornar a janela de v??deo sem a terceira janela que ?? 'Vimeo' neste caso. Portanto, a matriz retornada deve ser semelhante a ['Netflix', 'YouTube', 'Vine']** e depois de adicion??-la ?? matriz principal, nossa matriz deve ser **['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium' , 'new tab', 'Netflix', 'YouTube', 'Vine']

Parte 4

.join(workWindow.tabClose(1).tabOpen());

Esta parte fecharia a segunda aba (??ndice 1) na janela de trabalho [???GMail???, ???Inbox???, ???Work mail???, ???Docs???, ???freeCodeCamp???], que seria 'Caixa de entrada', e depois disso empurre um 'novo tab' ?? matriz, retornando [???GMail???, ???Work mail???, ???Docs???, ???freeCodeCamp???, ???new tab???] e adicionando-a ?? matriz principal.

Se compararmos a matriz solicitada e a que recebemos depois de executar o c??digo inicial, podemos ver que os valores ???Vine??? e ???Work mail??? s??o omitidos. Portanto, precisamos ver qual ?? a causa disso.
Agora que sabemos disso, verificaremos as opera????es feitas nesse array. Isso ?? feito na Parte 3:

.join(videoWindow.tabClose(2)) // Fechar a terceira guia na janela de v??deo e entrar

Podemos ver que tabClose() ?? executado neste array, ent??o vamos analisar o c??digo contido nesse m??todo.

`tabClose = function (index) {
 1. var tabsBeforeIndex = this.tabs.splice(0, ??ndice); // obter as guias antes da guia
 2. var tabsAfterIndex = this.tabs.splice(index); // obter as guias ap??s a guia

 3. this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // junte-os
 4. return this;
 };`

Para um ??ndice, tomaremos 2 - como feito no desafio.

    No in??cio, nossa matriz videoWindow se parece com isto:
    ['Netflix', 'YouTube', 'Vimeo', 'Vine'].
    Ap??s a execu????o da primeira linha, a vari??vel tabsBeforeIndex pegar?? 2 (??ndice) valores a partir de 0 (splice (0,2)) e criar?? um novo array contendo-os.
    Arrays agora se parecem com isto:
    tabsBeforeIndex: ['Netflix', 'YouTube']
    videoWindow: ['Vimeo', 'Vine']

Voc?? j?? pode ver porque splice() pode ser muito perigoso, j?? que sempre modifica o array em que ?? executado e retorna aquele array modificado - n??o ?? determin??stico.

    Depois que a segunda linha ?? executada, tabsAfterIndex deve pegar os valores come??ando do ??ndice (neste caso 2) e remov??-los do array videoWindow. Como podemos ver que no estado atual (['Vimeo', 'Vine']), videoWindow n??o tem ??ndice 2, ent??o o array vazio ?? retornado. Estado final:
    tabsBeforeIndex: ['Netflix', 'YouTube']
    videoWindow: ['Vimeo', 'Vine']
    tabsAfterIndex: []

Ap??s a terceira linha e a concatena????o, o array retornado ?? o mesmo que tabsBeforeIndex, o que resulta em valores 'Vimeo' e 'Vine' n??o estando no array. 