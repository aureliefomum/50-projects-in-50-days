const API_URL = "https://api.github.com/users/"


getUser('aureliefomum')

function getUser(username) {
    axios(API_URL + username)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}