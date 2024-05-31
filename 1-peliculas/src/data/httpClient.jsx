const API = "https://api.themoviedb.org/3/"
export function get(path) {
    return fetch(API + path, {
        headers: {
            authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMTc4MmFlM2QxNjIzYzhmZjhkNDZhNjY5MWU1Y2VmMCIsInN1YiI6IjY2NThlZmE1MmY5MjRlNzQwMDkzZWYwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q2CevPzcfIq0Ak04qNC2fHPbs8Tx-BWZKuq29gs7x5Y",
            "Content-type": "application/json;charset=utf-8"
        }
    }).then((result) => result.json())
}

//Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMTc4MmFlM2QxNjIzYzhmZjhkNDZhNjY5MWU1Y2VmMCIsInN1YiI6IjY2NThlZmE1MmY5MjRlNzQwMDkzZWYwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q2CevPzcfIq0Ak04qNC2fHPbs8Tx-BWZKuq29gs7x5Y