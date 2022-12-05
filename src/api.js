const server = 'http://localhost:3001';

module.exports = {
    server,

    createMovie: (movieData)=>{
        return fetch(`${server}/movies`, {
            method: 'post',
            body: movieData,
            credentials: 'include',
        });
    },

    deleteMovie: (id)=>{
        return fetch(`${server}/movies/${id}`, {
            method: 'delete',
            credentials: 'include',
        });
    },

    getMovies: ()=>{
        return fetch(`${server}/movies`)
            .then((data)=>data.json());
    },

    getUser: ()=>{
        return fetch(`${server}/user`, {
            credentials: 'include',
        }).then((data)=>data.json());
    },

    login: (email, password)=>{
        const data = { email, password };

        return fetch(
            `${server}/login`,
            {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify(data)
            }).then((data)=>data.json());
    },

    logout: ()=>{
        return fetch(`${server}/login`, {
            method: 'delete',
            credentials: 'include'
        });
    }

}