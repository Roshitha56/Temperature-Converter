let cel=document.getElementById('celsius');
let fah=document.getElementById('fahrenheit');

cel.oninput=() => {
    let output=(parseFloat(cel.value) * 9) / 5 + 32;
    fah.value=parseFloat(output.toFixed(2));
};

fah.oninput=() => {
    let output=((parseFloat(fah.value) - 32) * 5) / 9;
    cel.value=parseFloat(output.toFixed(2));
};