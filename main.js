var email = ['pippo@gmail.com', 'topolino@gmail.com', 'paperino@gmail.com'];
var check = prompt('inserisci qui la tua mail');

for (var i = 0; i < email.length; i++) {
    if (email[i] == check) {
       console.log('benvenuto negli illuminati');
       document.getElementById('risultato').innerHTML = ('la mail inserita è corretta')
    break } else {
       console.log('la mail inserita è errata');
       document.getElementById('risultato').innerHTML = ('la mail inserita è errata')
   }


}
