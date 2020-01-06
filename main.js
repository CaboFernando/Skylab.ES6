class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List {
    constructor(){
        super();

        this.usuario = 'Macacudo';
    }

    mostraUsuario(){
        console.log(this.usuario);
    }
}

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function () {
    MinhaLista.add('Novo todo');
}

MinhaLista.mostraUsuario();


class Math {
    static soma(a, b) {
        return a + b;
    }
}
console.log(Math.soma(1, 2));