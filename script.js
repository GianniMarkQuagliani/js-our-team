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

// Utilizzo un ciclo (for of) per iterare attraverso ciascun oggetto nell'array users.
for(let user of users){
    // Creo una stringa card che rappresenta l'HTML per la card dell'utente corrente. Questa stringa include l'immagine, il nome, il ruolo.
    let card = `
    <div class="col-4 py-3">
        <div class="card text-center border-light" style="width: 18rem;">
            <img src="${user.foto}" class="card-img-top" alt="${user.foto}">
                <div class="card-body">
                    <h3 class="card-text">${user.nome}</h3>
                    <p class="card-text">${user.ruolo}</p>
                </div>
            </div>
    </div>`
    console.log(user);
    // La stringa card viene aggiunta al contenuto HTML dell'elemento con classe "row" tramite row.innerHTML += card, in modo da visualizzare la card nell'interfaccia utente.
    row.innerHTML += card;
};