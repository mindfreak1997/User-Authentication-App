import axios from 'axios'

export const startUserNotes = (FormData, resetForm) => {
    return (dispatch) => {
        axios.post('http://dct-user-auth.herokuapp.com/api/notes', FormData, {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then((res) => {
                const result = res.data
                console.log(result)
                if (result.hasOwnProperty('error')) {
                    alert(result.error)
                } else {
                    dispatch(notesAction(result))
                    resetForm()
                }


            })
            .catch((err) => {
                alert(err)
            })

    }
}
export const notesAction = (result) => {
    return {
        type: 'NOTES',
        payload: result
    }
}

export const allUsers = () => {
    return (dispatch) => {
        axios.get('http://dct-user-auth.herokuapp.com/api/notes', {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then((res) => {
                const result = res.data
                console.log(result)
                if (result.hasOwnProperty('error')) {
                    alert(result.error)
                } else {
                    dispatch(getAllUsers(result))
                }


            })
            .catch((err) => {
                alert(err)
            })
    }
}
export const getAllUsers = (result) => {
    return {
        type: 'GET_ALL',
        payload: result
    }
}

export const itemRemove = (id) => {
    return (dispatch) => {
        axios.delete(`http://dct-user-auth.herokuapp.com/api/notes/${id}`, {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then((res) => {
                const result = res.data
                console.log(result)
                const id = result._id
                dispatch(removeAction(id))

            })
    }
}
const removeAction = (id) => {
    return {
        type: 'REMOVE',
        payload: id
    }
}

export const editItem = (FormData, id, handleToggle) => {
    return (dispatch) => {
        axios.put(`http://dct-user-auth.herokuapp.com/api/notes/${id}`, FormData, {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })

            .then((res) => {
                const update = res.data
                console.log('update', update)
                dispatch(editAction(update))
                handleToggle()
            })
            .catch((err) => {
                alert(err.message)
            })
    }
}

const editAction = (update) => {
    return {
        type: 'EDIT',
        payload: update
    }
}
