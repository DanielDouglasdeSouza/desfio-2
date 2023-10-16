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