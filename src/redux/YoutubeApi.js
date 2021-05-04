import axios from 'axios'

// constantes
const dataInicial = {
    channel: {
        snippet: {
            title: ''
        },
        id: {
            videoId: ''
        }
    },
    teaching: {
        title: '',
        resourceId: {
            videoId: ''
        }
    },
    sermons: {
        title: '',
        resourceId: {
            videoId: ''
        }
    },
}

// types
const GET_CHANNEL_SUCCESS = 'GET_CHANNEL_SUCCESS'
const GET_TEACHING_SUCCESS = 'GET_TEACHING_SUCCESS'
const GET_SERMONS_SUCCESS = 'GET_SERMONS_SUCCESS'

// reducer
export default function YoutubeReducer(state = dataInicial, action){
    switch(action.type){
        case GET_CHANNEL_SUCCESS:
            return {...state, channel: action.payload}
        case GET_TEACHING_SUCCESS:
            return {...state, teaching: action.payload}
        case GET_SERMONS_SUCCESS:
            return {...state, sermons: action.payload}
        default:
            return state
    }
}

const Key = 'AIzaSyDQGFIpVWTyx27nV7Cw9q4ej52PTSW-pqU';

// acciones
export const getChannelAction = () => async (dispatch, getState) => {
    try {
        const Channel = 'UCqNFv1mDmnO0n2Opy2BI9rA';
        const num = 1;
        const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${Key}&channelId=${Channel}&fields=items(id(videoId),snippet(title,thumbnails))&part=snippet,id&order=date&maxResults=${num}`)
        dispatch({
            type: GET_CHANNEL_SUCCESS,
            payload: res.data['items'][0]
        })
    } catch (error) {
        console.log(error)
    }
}
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