import axios from 'axios'

// constantes
const dataInicial = {
    // object: ''
    sermons: {
        title: '',
        resourceId: {
            videoId: ''
        }
    },
}

// types
const GET_SERMONS_SUCCESS = 'GET_SERMONS_SUCCESS'

// reducer
export default function SermonsReducer(state = dataInicial, action){
    switch(action.type){
        case GET_SERMONS_SUCCESS:
            return {...state, sermons: action.payload}
        default:
            return state
    }
}

const Key = 'AIzaSyDQGFIpVWTyx27nV7Cw9q4ej52PTSW-pqU';

// acciones
export const getSermonsAction = () => async (dispatch, getState) => {
    try {
        const KeySermons = 'PLIEDYvPEGTTTIEUEhjvB2nU_fRXUtlyLf';
        const num = 15;
        const res = await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?fields=items(snippet(title,thumbnails,resourceId(videoId)))&part=snippet&maxResults=${num}&playlistId=${KeySermons}&key=${Key}`)
        const num1 = parseInt(res.data.items.length) - 1;
        dispatch({
            type: GET_SERMONS_SUCCESS,
            payload: res.data['items'][num1].snippet
        })
    } catch (error) {
        console.log(error)
    }
}