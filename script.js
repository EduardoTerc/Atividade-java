let pontos = 1000
let anos_cliente = 2
let categoria;

if (pontos >= 1000 && anos_cliente >= 2) {
    console.log("Você é um cliente diamante")
} else if (pontos >= 500) { 
    console.log("Você é um cliente ouro")
} else if (pontos >= 100) { 
    console.log("Você é um cliente prata")
} else if (pontos >= 1) { 
    console.log("Você é um cliente bronze")
}

for (let i = 1000; i > 0; i--) {
    console.log(i);
}

