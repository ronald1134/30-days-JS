/*
    A classe 'book' serve como modelo para criar objetos que representam livros.
    O método constructor é chamado automaticamente quando usamos 'new book(...)'.
    Ele recebe os valores de título, autor e data de publicação, e os atribui
    às propriedades do objeto com 'this'.

    No exemplo abaixo, criamos um objeto 'myBook' com as informações de um livro,
    e usamos o método 'present()' para exibir esses dados no console.
*/
class book {
    constructor(title, author, datePublished) {
        this.title = title;
        this.author = author;
        this.datePublished = datePublished;
    }
    present() {
        console.log("=== Book Information ===");
        console.log(`📖 Title           : ${this.title}`);
        console.log(`✍️  Author         : ${this.author}`);
        console.log(`📅 Date Published  : ${this.datePublished}`);
    }
}
// Criando um objeto da classe 'book' e apresentando suas informações
const myBook = new book("Programing is fun", "John Doe", "01/01/2020")
myBook.present();