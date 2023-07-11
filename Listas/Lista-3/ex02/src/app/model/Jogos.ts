export default class Jogo {
    nome: string;
    genero: string;
    lancamento: string;
    descricao:string;
    img:string;

    constructor(nome:string,
                genero:string,
                lancamento:string,
                descricao:string,
                img:string)
    {
        this.nome=nome;
        this.genero=genero;
        this.lancamento=lancamento;
        this.descricao=descricao;
        this.img=img
    }

}