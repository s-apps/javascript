# Record collection

You are given an object literal representing a part of your musical album collection. Each album has a unique id number as its key and several other properties. Not all albums have complete information.

You start with an updateRecords function that takes an object literal, records, containing the musical album collection, an id, a prop (like artist or tracks), and a value. Complete the function using the rules below to modify the object passed to the function.

- Your function must always return the entire record collection object.
- If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
- If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
- If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
- If value is an empty string, delete the given prop property from the album.
Note: A copy of the recordCollection object is used for the tests.

---

Você recebe um objeto literal que representa uma parte de sua coleção de álbuns musicais. Cada álbum possui um número de identificação exclusivo como chave e várias outras propriedades. Nem todos os álbuns possuem informações completas.

Você começa com uma função updateRecords que leva um objeto literal, registros, contendo a coleção do álbum musical, um id, um prop (como artista ou faixas) e um valor. Conclua a função usando as regras abaixo para modificar o objeto passado para a função.

- Sua função deve sempre retornar todo o objeto da coleção de registros.
- Se prop não for uma faixa e value não for uma string vazia, atualize ou defina o prop desse álbum para o valor.
- Se prop são faixas, mas o álbum não tem uma propriedade de faixas, crie um array vazio e adicione valor a ele.
- Se prop são faixas e valor não é uma string vazia, adicione valor ao final da matriz de faixas existente do álbum.
- Se o valor for uma string vazia, exclua a propriedade prop fornecida do álbum.
Nota: Uma cópia do objeto recordCollection é usada para os testes.