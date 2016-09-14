# Exemplo de Dialog

Este exemplo é para vocêS verem como se faz para compartilhar um dado de um escopo pai
para um escopo filho, sem trabalhar diretamente com escopos, evitando assim um Scope Soup [1].

No caso, entra um terceiro objeto, que é um Service, em que graças ao design pattern que o Angular usa para os services,
ele compartilha a mesma instancia com toda a aplicação.

Isso permite que a gente acople os dados somente a services, e injete estes services nos controllers que dsejarmos.

assim vc evita qualquer tipo de conflito entre escopos e ainda deixa o código mais usável.

ficou bem esdrúxulo, deixei tudo junto noa pp.js, mas deixei bem comentado para ficar claro quem faz o que.

[1]: http://www.technofattie.com/2014/03/21/five-guidelines-for-avoiding-scope-soup-in-angular.html