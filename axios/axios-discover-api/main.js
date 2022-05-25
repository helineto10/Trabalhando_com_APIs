const url = "http://localhost:5500/api"

function getUsers() {
    axios.get(url)
    .then(response => {
        apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(e => console.error(e))
}

function getUser(id) {
    axios.get(`${url}/${id}`)
    .then(response => {
        const data = response.data
        userName.textContent = data.name
        userCity.textContent = data.city
        userAvatar.src = data.avatar
    })
    .catch(e => console.error(e))
}

function addNewUser(newUser) {
    axios.post(url, newUser)
    .then(response => {
        console.log(response)
    })
    .catch(e => console.error(e))
}

function updateUser(id, userUpdated) {
    axios.put(`${url}/${id}`, userUpdated)
    .then(response => {
        console.log(response)
    })
    .catch(e => console.error(e))
}

function deleteUser(id) {
    axios.delete(`${url}/${id}`)
    .then(response => console.log(response))
    .catch(e => console.error(e))
}

const newUser = {
    name: 'Heli Rufino',
    avatar: 'https://avatars.githubusercontent.com/u/56309227?v=4',
    city: 'Teresina'
}

const userUpdated = {
    name: 'Levi Soares',
    avatar: 'https://avatars.githubusercontent.com/u/76626029?v=4',
    city: 'Palmas'
}

getUsers()
// addNewUser(newUser)
getUser(2)
//updateUser(4, userUpdated)
deleteUser(3)