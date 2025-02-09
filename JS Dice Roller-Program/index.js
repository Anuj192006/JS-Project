function rollDice () {
    const nd = document.getElementById('num').value;
    const v= document.getElementById('dv');
    const i = document.getElementById('dim');
    let value = [];
    let image=[];
    
    for(a=0; a<nd;a++) {
        const x= Math.floor(Math.random()*6)+1;
        image.push('<img src="Images/'+x+'.png">');
        value.push(x);
    }
    v.textContent = "You rolled "+value.join(",");
    i.innerHTML = image.join(" ");
}