class FormaGeometrica {
    constructor(base = 1, altura = 1, tipo = 'R') {
       
        if(isNaN(base) || base <= 0) {
            throw new Error('A base deve ser numérica e maior que zero')
        }

        if(isNaN(altura) || altura <= 0) {
            throw new Error('A altura deve ser numérica e maior que zero')
        }

        //if(tipo != 'R' && tipo != 'T' && tipo != 'E') {
        if(['R', 'T', 'E'].indexOf(tipo) < 0) {
            throw new Error('O tipo deve ser R, T ou E.')
        }

        this._base = base
        this._altura = altura
        this._tipo = tipo
    }

    // Método setter
    set base(valor) {
        if(isNaN(valor) || valor <= 0) {
            throw new Error('A base deve ser numérica e maior que zero.')
        }
        this._base = valor
    }

    // Método getter
    get base() {
        return this._base
    }

    // Método
    area() {
        switch(this.tipo) {
            case 'R':
                return this._base * this._altura
            case 'T':
                return this._base * this._altura / 2
            case 'E':
                return (this._base / 2) * (this._altura / 2) * Math.PI
            default:    // Tipo inválido
                return null
        }
    }
}

const retangulo = new FormaGeometrica(2, 6.5, 'R')
const triangulo = new FormaGeometrica(4.2, 6.5, 'T')
const elipse = new FormaGeometrica(4, 6.5, 'E')
const tchonga = new FormaGeometrica(5, 2, 'R')

console.log(retangulo)
console.log(triangulo)
console.log(elipse)
console.log(tchonga)

console.log(retangulo.area())

retangulo.altura = 6
retangulo.base = 2.75
console.log(retangulo.area())

console.log('Área de tchonga: ', tchonga.area())
console.log('Base de tchonga: ', tchonga.base)
tchonga.base = 'trem'
console.log('Área de tchonga: ', tchonga.area())