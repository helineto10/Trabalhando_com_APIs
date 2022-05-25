const url = "http://localhost:5500/api"

function getUsers() {
    fetch(url)
    .then(response => response.json())
    .then(data => renderApiResult.textContent = JSON.stringify(data))
    .catch(err => console.error(err))
}

function getUser(id) {
    fetch(`${url}/${id}`)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userCity.textContent = data.city
        userAvatar.src = data.avatar
    })
    .catch(err => console.error(err))
}

function addUser(newUser) {
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data =>  alertAPI.textContent = data)
    .catch(err => console.error(err))
}

function updateUser(updatedUser, id) {
    fetch(`${url}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(updatedUser),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertAPI.textContent = data)
    .catch(e => console.error(e))
}

function deleteUser(id){
    fetch(`${url}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertAPI.textContent = data)
    .catch(e => console.error(e))
}

const newUser = {
    name: "Heli Rufino",
    avatar: "https://avatars.githubusercontent.com/u/56309227?v=4",
    city: "Teresina"
}
//addUser(newUser)

const updatedUser = {
    name: "Marcelo Matos",
    avatar: "https://avatars.githubusercontent.com/u/56309227?v=4",
    city: "Recife"
}

 //updateUser(updatedUser, 2)
 deleteUser(3)
 getUsers()
 getUser(2)