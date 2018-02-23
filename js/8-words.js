var new_passphrase = english_wordlist[Math.floor(Math.random()*english_wordlist.length)]+" "+english_wordlist[Math.floor(Math.random()*english_wordlist.length)]+" "+english_wordlist[Math.floor(Math.random()*english_wordlist.length)]+" "+english_wordlist[Math.floor(Math.random()*english_wordlist.length)]+" "+english_wordlist[Math.floor(Math.random()*english_wordlist.length)]+" "+english_wordlist[Math.floor(Math.random()*english_wordlist.length)]+" "+english_wordlist[Math.floor(Math.random()*english_wordlist.length)]+" "+english_wordlist[Math.floor(Math.random()*english_wordlist.length)];

onload = function(){
    document.getElementById("passphraseTextarea").value = new_passphrase;
}
