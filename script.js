// Definisco un elemento HTML con classe "row" tramite la variabile row. Questo sarà il contenitore delle card degli utenti.
const row = document.querySelector('.row');
// Definisco un array di oggetti con il nome "users", dentro ci metto diverse proprietà, tra cui nome, ruolo, foto e aggettivi.
const users = [
    {
        nome: 'Wayne Barnet',
        ruolo: 'Founder & CEO',
        foto: 'img/wayne-barnett-founder-ceo.jpg',
    },

    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: 'img/angela-caroll-chief-editor.jpg',
    },

    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'img/angela-lopez-social-media-manager.jpg',
    },

    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'img/walter-gordon-office-manager.jpg',
    },

    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'img/scott-estrada-developer.jpg',
    },

    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'img/barbara-ramos-graphic-designer.jpg',
    },

];
console.log(users)

for(let user of users){}