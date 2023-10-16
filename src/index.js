//Instruções para entrega
// # 2️⃣ Calculadora de partidas Rankeadas
//**O Que deve ser utilizado**

//- Variáveis
//- Operadores
//- Laços de repetição
//- Estruturas de decisões
//- Funções

//## Objetivo:

//Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
//depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo 
//(vitórias - derrotas)

//Se vitórias for menor do que 10 = Ferro
//Se vitórias for entre 11 e 20 = Bronze
//Se vitórias for entre 21 e 50 = Prata
//Se vitórias for entre 51 e 80 = Ouro
//Se vitórias for entre 81 e 90 = Diamante
//Se vitórias for entre 91 e 100= Lendário
//Se vitórias for maior ou igual a 101 = Imortal

//## Saída

//Ao final deve se exibir uma mensagem:
//"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"

//let pokemon = dragonite 


let pokemon = "dragonite"

function calcularNivelDeRanqueadas(vitorias, derrotas) {
    let saldoRankeadas = vitorias - derrotas;
    let nivel;
        
    switch(true) {
        case vitorias < 10:
            nivel = "Ferro";
            break;            
        case vitorias >= 11 && vitorias <= 20:
            nivel = "Branze";
            break;
        case vitorias >= 21 && vitorias <= 50:
            nivel = "Prata";
            break;
        case vitorias >= 51 && vitorias <= 80:
            nivel = "ouro";
            break;   
        case vitorias >= 81 && vitorias <= 90:
            nivel = "Diamante";
            break;
        case vitorias >= 91 && vitorias <= 100:
            nivel = "Lendário";
            break;                
        default:
            nivel = "Imortal"; 
            
    }
    
    return `O Herói ${pokemon} tem saldo de ${saldoRankeadas} e está no nível de ${nivel}`;
        
}
console.log(calcularNivelDeRanqueadas(300, 199))