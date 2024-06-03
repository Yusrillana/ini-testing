const alat = ['mouse','keyboard','monitor']
const sistem = ['ssd','ram','internet']
const komputer = alat.concat(sistem)
sistem.shift();
sistem.unshift('kabeldata');

const render1 = document.getElementById("array1");

let full = '<ul>';
    for (let item of komputer ){
        full += `<li>${item}</li>`;
    };
full +='</ul>';

render1.innerHTML=full;

const render2 = document.getElementById("array2");

let konten ='<ul>'
for (let item of sistem){
    konten += `<li>${item}</li>`;
}
konten += '</ul>';

render2.innerHTML = konten

