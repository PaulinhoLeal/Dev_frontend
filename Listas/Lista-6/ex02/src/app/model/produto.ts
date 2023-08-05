export class Produto{
    public nome:string;
    public descricao:string;
    public img:string;
    public valor:number;
    public categoria:string;

    constructor(
        nome:string,
        descricao:string,
        img:string,
        valor:number,
        categoria:string)
    {
        this.nome=nome;
        this.descricao=descricao;
        this.img=img;
        this.valor=valor;
        this.categoria=categoria;
    }


                
    
}