const jokeDiv = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()


//Function using async/await

async function generateJoke () {

    const config = {
        headers:{
            'Accept': 'application/json',
        },
    }

   const res = await fetch('https://icanhazdadjoke.com/', config)

   const data = await res.json()

   jokeDiv.innerHTML = data.joke

    
}

//Function using .then
// function generateJoke () {

//     const config = {
//         headers:{
//             'Accept': 'application/json',
//         },
//     }

//     fetch('https://icanhazdadjoke.com/', config)
//     .then((res) => res.json())
//     .then((data) => {jokeDiv.innerText = data.joke})
// }