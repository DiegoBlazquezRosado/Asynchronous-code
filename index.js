//RESUELVE TUS EJERCICIOS AQUI

//Ejercicio 1
const getAllBreeds = async () => {
    try {
        const resp = await fetch('https://dog.ceo/api/breeds/list/all', { method: "GET" });
        if (resp.ok) {
            const data = await resp.json();
            const arr = [];
            for (let key in data.message) {
                arr.push(key);
            }
            return arr;
        } else {
            throw resp;
        }
    } catch (error) {
        console.log(error.status);
    }
}

//Ejercicio 2
const getRandomDog = async () => {
    try {
        const resp = await fetch('https://dog.ceo/api/breeds/image/random', { method: "GET" });
        if (resp.ok) {
            const data = await resp.json();
            return data.message;
        } else {
            throw resp;
        }
    } catch (error) {
        console.log(error.status);
    }
}

//Ejercicio 3
const getAllImagesByBreed = async () => {
    try {
        const resp = await fetch('https://dog.ceo/api/breed/komondor/images', { method: "GET" });
        if (resp.ok) {
            const data = await resp.json();
            arr = [];
            for (let key in data.message) {
                arr.push(data.message[key]);
            }
            return arr;
        } else {
            throw resp;
        }
    } catch (error) {
        console.log(error.status);
    }
}

//Ejercicio 4
const getAllImagesByBreed2 = async (breed) => {
    try {
        const resp = await fetch(`https://dog.ceo/api/breed/${breed}/images`, { method: "GET" });
        if (resp.ok) {
            const data = await resp.json();
            arr = [];
            for (let key in data.message) {
                arr.push(data.message[key]);
            }
            return arr;
        } else {
            throw resp;
        }
    } catch (error) {
        console.log(error.status);
    }
}

//Ejercicio 5
const getGitHubUserProfile = async (username) => {
    try {
        const resp = await fetch(`https://api.github.com/users/${username}`, { method: "GET" });
        if (resp.ok) {
            const data = await resp.json();
            return data;
        } else {
            throw resp;
        }
    } catch (error) {
        console.log(error.status);
    }
}

//Ejercicio 6
const printGithubUserProfile = async (username) => {
    try {
        const resp = await fetch(`https://api.github.com/users/${username}`, { method: "GET" });
        if (resp.ok) {
            const data = await resp.json();
            const body = document.querySelector('body');
            const div = document.createElement('div');
            div.innerHTML = body.innerHTML + `<img src="${data.avatar_url}" >`;
            body.append(div);
            return data; 
        } else {
            throw resp;
        }
    } catch (error) {
        console.log(error.status);
    }
}

//Ejercicio 7
const getAndPrintGitHubUserProfile = async (username) => {
    try {
        const resp = await fetch(`https://api.github.com/users/${username}`, { method: "GET" });
        if (resp.ok) {
            const data = await resp.json();
            // const body = document.querySelector('body');
            // body.innerHTML = body.innerHTML + `<section>
            //         <img src="${data.avatar_url}" alt="imagen de ${data.name}">
            //         <h1>${data.name}</h1>
            //         <p>Public repos: ${data.public_repos}</p>
            //     </section>`; 
            return `<section><img src="${data.avatar_url}" alt="${data.name}"><h1>${data.name}</h1><p>Public repos: ${data.public_repos}</p></section>`;
        } else {
            throw resp;
        }
    } catch (error) {
        console.log(error.status);
    }
}

const userNames = ['octocat', 'alenriquez96', 'alejandroereyesb'];
const realNames = ['The Octocat', 'Alberto Enríquez', 'Alejandro Reyes'];

//Ejercicio 8 (9 del repo)
const fetchGithubUsers = async (userNames) => {
    //const arrUserNames = []
    const arrUserNames = userNames.map(async(userName) => {
        try {
            const resp = await fetch(`https://api.github.com/users/${userName}`, { method: "GET" });
            if (resp.ok) {
                const data = await resp.json();
                //arrUserNames.push(data);
                return data;
            } else {
                throw resp;
            }
        } catch (error) {
            console.log(error.status);
        }
    });
    const resultado = await Promise.all(arrUserNames);
    return resultado;
}

//Ejercicio 9 
