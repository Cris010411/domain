let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let arrNuevo = [];




for (i = 0; i < pronoun.length; i++) {

    for (j = 0; j < adj.length; j++) {

        for (n = 0; n < noun.length; n++) {
            arrNuevo = (pronoun[i] + adj[j] + noun[n]);
            let arrSeparado = arrNuevo.split("");
            let ultimas = arrSeparado[arrSeparado.length - 2] + arrSeparado[arrSeparado.length - 1];
            if (ultimas ==1) {
                console.log(anteUltima, ultima)
            }
        }
    }
}