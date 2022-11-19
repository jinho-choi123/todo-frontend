
const fetchTodo = (dispatch) => {
    const loaderPromise = new Promise((res, rej) => {
        res(true)
    })

    loaderPromise
        .then((res) =>{
            axios.get('http://localhost:3000/api/todo/show', { 
            withCredentials: true 
            })
        })
        .then((res) => {
            if(!res.data.status) {
                return router.push('/login')
            } else {
                dispatch(refreshTodo(res.data))
            }
        })
        .catch((err) => {
            console.log(err)
        })
}

export default fetchTodo