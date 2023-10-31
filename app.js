// Tu códgigo aquí
const image = document.querySelector('img');
const jokeDIV = document.querySelector('#display-joke');
const button = document.querySelector('#get-joke');

button.addEventListener("click", ()=>{
    getRandomJoke();
})

async function getRandomJoke() {
    const respuesta = await fetch("https://api.chucknorris.io/jokes/random");
    const datos = await respuesta.json();
    jokeDIV.textContent = datos.value;
}

// button.addEventListener("click", async () => {
//     const joke = await getRandomJoke();
//     jokeDIV.textContent = joke;
// });

// async function getRandomJoke() {
//     const respuesta = await fetch("https://api.chucknorris.io/jokes/random");
//     const datos = await respuesta.json();
//     return datos.value; // Retorna la broma en lugar de asignarla a jokeDIV.textContent
// }