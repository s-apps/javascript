# Accessing nested objects

The sub-properties of objects can be accessed by chaining together the dot or bracket notation.

Here is a nested object:

`var ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};
ourStorage.cabinet["top drawer"].folder2;
ourStorage.desk.drawer;`

ourStorage.cabinet["top drawer"].folder2 would be the string secrets, and ourStorage.desk.drawer would be the string stapler.

Access the myStorage object and assign the contents of the glove box property to the gloveBoxContents variable. Use dot notation for all properties where possible, otherwise use bracket notation.

---

As subpropriedades dos objetos podem ser acessadas encadeando a notação de ponto ou colchete.

Aqui está um objeto aninhado:

`var ourStorage = {
   "escrivaninha": {
     "gaveta": "grampeador"
   },
   "gabinete": {
     "gaveta superior": {
       "folder1": "um arquivo",
       "pasta2": "segredos"
     },
     "gaveta inferior": "refrigerante"
   }
};
ourStorage.cabinet ["gaveta superior"]. folder2;
ourStorage.desk.drawer; `

ourStorage.cabinet ["top drawer"]. folder2 seriam os segredos da string e ourStorage.desk.drawer seria o grampeador de string.

Acesse o objeto myStorage e atribua o conteúdo da propriedade da caixa de luvas à variável gloveBoxContents. Use a notação de ponto para todas as propriedades quando possível, caso contrário, use a notação de colchetes