# Set default parameters for your functions

In order to help us create more flexible functions, ES6 introduces default parameters for functions.

Check out this code:

`const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());`

The console will display the strings Hello John and Hello Anonymous.

The default parameter kicks in when the argument is not specified (it is undefined). As you can see in the example above, the parameter name will receive its default value Anonymous when you do not provide a value for the parameter. You can add default values for as many parameters as you want.

Modify the function increment by adding default parameters so that it will add 1 to number if value is not specified.

---

Para nos ajudar a criar funções mais flexíveis, o ES6 apresenta parâmetros padrão para funções.

Confira este código:

`const greeting = (nome = "Anônimo") => " Olá "+ nome;

console.log (greeting ("John"));
console.log (greeting ()); `

O console exibirá as cadeias de caracteres Hello John e Hello Anonymous.

O parâmetro padrão entra em ação quando o argumento não é especificado (é indefinido). Como você pode ver no exemplo acima, o nome do parâmetro receberá seu valor padrão Anonymous quando você não fornecer um valor para o parâmetro. Você pode adicionar valores padrão para quantos parâmetros desejar.

Modifique o incremento da função adicionando parâmetros padrão para que ele adicione 1 ao número se o valor não for especificado.