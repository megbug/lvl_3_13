
let inputOri = document.querySelector('#inputOri');
let outputNew = document.querySelector('#outputNew');
let ausgabe1 = document.querySelector('#ausgabe1');
let ausgabe2 = document.querySelector('#ausgabe2');

const trennen = () => {
    let buttonDavor = document.querySelector('#before');

    inputOri = inputOri.value;
    outputNew = outputNew.value;

    if (inputOri.includes(outputNew)) {
        if (buttonDavor.checked) {
            let input = inputOri.indexOf(outputNew);
            
            let sliceBefore = inputOri.slice(input);
            ausgabe2.innerHTML = sliceBefore
    
            let subInput = inputOri.substring(input, 0)
            ausgabe1.innerHTML = subInput
        }
        else {
            let input = inputOri.indexOf(outputNew);
            let sliceBefore = inputOri.substring(input, 0);
            ausgabe1.innerHTML =  sliceBefore + outputNew 
    
            let subInput = inputOri.slice(outputNew.length + input)
            ausgabe2.innerHTML = subInput
        }
    }
    else {
        ausgabe1.innerHTML = "Die Trennungsposition muss auffindbar sein.";
        ausgabe2.innerHTML = "Bitte achte auf Recht- sowie Klein- und Großschreibweise.";
    }
}
