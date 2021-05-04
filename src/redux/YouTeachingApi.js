import axios from 'axios'

// constantes
const dataInicial = {
    // object: ''
    teaching: {
        title: '',
        resourceId: {
            videoId: ''
        }
    },
}

// types

const GET_TEACHING_SUCCESS = 'GET_TEACHING_SUCCESS'

// reducer
export default function TeachingReducer(state = dataInicial, action){
    switch(action.type){
        case GET_TEACHING_SUCCESS:
            return {...state, teaching: action.payload}
        default:
            return state
    }
}

const Key = 'AIzaSyDQGFIpVWTyx27nV7Cw9q4ej52PTSW-pqU';

// acciones
export const getTeachingAction = () => async (dispatch, getState) => {
    try {
        const KeyTeaching = 'PLIEDYvPEGTTTEvx9ntkfK7N29oUNmrT1a';
        const num = 50;
        const res = await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?fields=items(snippet(title,thumbnails,resourceId(videoId)))&part=snippet&maxResults=${num}&playlistId=${KeyTeaching}&key=${Key}`)
        const num1 = parseInt(res.data.items.length) - 1;
        dispatch({
            type: GET_TEACHING_SUCCESS,
            payload: res.data['items'][num1].snippet
        })
    } catch (error) {
        console.log(error)
    }
}