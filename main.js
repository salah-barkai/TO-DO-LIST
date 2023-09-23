const ajouertinput= document.querySelector('#Ajouter');
const btnajouetr = document.querySelector('#btn');
const btnsup = document.querySelector('#sup');
const taches= document.querySelector('#taches');
const listespartie= document.querySelector('.listes');


function ajouter(){
    btnajouetr.addEventListener('click', (e)=>{
        e.preventDefault();
       tachesajouter = ajouertinput.value;
       const nouveauelement = document.createElement('p');
       nouveauelement.textContent = tachesajouter;
       listespartie.appendChild(nouveauelement);
       tachesajouter= '';

       nouveauelement.addEventListener('click', ()=>{
        btnsup.style.display= 'block';
       })
       btnsup.addEventListener('click', ()=>{
        nouveauelement.remove();
    })

       
    })
    taches.addEventListener('click', ()=>{
        btnsup.style.display = 'block';
    })

    btnsup.addEventListener('click', ()=>{
        taches.remove();
    })


}
ajouter();