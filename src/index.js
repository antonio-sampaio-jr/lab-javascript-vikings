const cachorro = {
    nome : "Mel",
    tutor: "Bernardo",
    brinquedos: ["Bolinha","Urso"]
}

class Dog
{
    constructor(nome,tutor)
    {
        this.nome = nome;
        this.tutor = tutor;
        this.brinquedos = ["Bolinha","Urso"];
    }
    construtctor(){}

    latir = ()=> console.log("Au..Au");
}

let novoCachorro = new Dog("Totó","Antonio");
let novoCachorro2 = new Dog();
novoCachorro2.nome = "Mel";
novoCachorro.latir();
novoCachorro.brinquedos.splice(novoCachorro.brinquedos.indexOf("Urso"),1);
console.log(novoCachorro2.nome);

