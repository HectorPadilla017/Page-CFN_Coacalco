import axios from 'axios'

// constantes
const dataInicial = {
    object: {}
}

// types
const GET_ACTIVITIES_SUCCESS = 'GET_ACTIVITIES_SUCCESS'

// reducer
export default function ActivitiesReducer(state = dataInicial, action){
    switch(action.type){
        case GET_ACTIVITIES_SUCCESS:
            return {...state, object: action.payload}
        default:
            return state
    }
}

// acciones
export const getActivitiesAction = () => async (dispatch, getState) => {
    try {
        const res = await axios.get('https://cfn.org.mx/database/')
        dispatch({
            type: GET_ACTIVITIES_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
}