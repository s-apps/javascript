# Golf code

In the game of golf, each hole has a par, meaning, the average number of strokes a golfer is expected to make in order to sink the ball in the hole to complete the play. Depending on how far above or below par your strokes are, there is a different nickname.

Your function will be passed par and strokes arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):

Strokes	Return
1	"Hole-in-one!"
<= par - 2	"Eagle"
par - 1	"Birdie"
par	"Par"
par + 1	"Bogey"
par + 2	"Double Bogey"
>= par + 3	"Go Home!"

par and strokes will always be numeric and positive. We have added an array of all the names for your convenience.

---

No jogo de golfe, cada buraco tem um par, ou seja, o número médio de tacadas que um jogador de golfe deve dar para enfiar a bola no buraco para completar a jogada. Dependendo de quão acima ou abaixo do par de seus traços estão, há um apelido diferente.

Sua função receberá argumentos par e strokes. Retorne a string correta de acordo com esta tabela que lista os golpes em ordem de prioridade; de cima (mais alto) para baixo (mais baixo):

Retorno de golpes
1 "Hole-in-one!"
<= par - 2 "Águia"
par - 1 "Birdie"
par "par"
par + 1 "Bogey"
par + 2 "Double Bogey"
> = par + 3 "Vá para casa!"

par e strokes serão sempre numéricos e positivos. Adicionamos uma série de todos os nomes para sua conveniência.