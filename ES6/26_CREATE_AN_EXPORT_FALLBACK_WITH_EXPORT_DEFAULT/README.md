# Create an export fallback with export default

In the export lesson, you learned about the syntax referred to as a named export. This allowed you to make multiple functions and variables available for use in other files.

There is another export syntax you need to know, known as export default. Usually you will use this syntax if only one value is being exported from a file. It is also used to create a fallback value for a file or module.

Below are examples using export default:

`export default function add(x, y) {
  return x + y;
}

export default function(x, y) {
  return x + y;
}`

The first is a named function, and the second is an anonymous function.

Since export default is used to declare a fallback value for a module or file, you can only have one value be a default export in each module or file. Additionally, you cannot use export default with var, let, or const

The following function should be the fallback value for the module. Please add the necessary code to do so.

---

Na lição de exportação, você aprendeu sobre a sintaxe conhecida como exportação nomeada. Isso permitiu que você disponibilizasse várias funções e variáveis para uso em outros arquivos.

Existe outra sintaxe de exportação que você precisa conhecer, conhecida como padrão de exportação. Normalmente, você usará essa sintaxe se apenas um valor estiver sendo exportado de um arquivo. Ele também é usado para criar um valor de fallback para um arquivo ou módulo.

Abaixo estão alguns exemplos de uso de exportação padrão:

`export default function add(x, y) {
   return x + y;
}

export default function(x, y) {
   return x + y;
} `

A primeira é uma função nomeada e a segunda é uma função anônima.

Como o padrão de exportação é usado para declarar um valor de fallback para um módulo ou arquivo, você só pode ter um valor como exportação padrão em cada módulo ou arquivo. Além disso, você não pode usar o padrão de exportação com var, let ou const

A função a seguir deve ser o valor de fallback para o módulo. Adicione o código necessário para fazer isso.