const pai = {nome: 'Pedro' , corCabelo:'preto'}

const filha1 = Object.create(pai)
filha1.nome = 'Maria'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, { 
    nome: {value: 'Bia', writable: false, enumerable: true}
})

console.log(filha2.nome)
filha2.nome = 'Creuza'
console.log(`${filha2.nome} tem cabelos na cor ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let keys in filha2){
    filha2.hasOwnProperty(keys) ?
    console.log(keys) : console.log(`Por herança ${keys}`)
}
