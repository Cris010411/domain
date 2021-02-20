let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let final = ['.com', '.net', '.us', '.io']




for (i = 0; i < pronoun.length; i++) {

    for (j = 0; j < adj.length; j++) {

        for (n = 0; n < noun.length; n++) {
            for (p = 0; p < final.length; p++) {
                console.log(pronoun[i] + adj[j] + noun[n] + final[p]);
            }
        }
    }
}//falta el servidor nada mas