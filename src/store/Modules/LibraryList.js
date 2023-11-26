import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    playlists: []
}

export const PlaylistSlice = createSlice({
    name: "playlist",
    initialState,
    reducers: {
        FetchPlaylist: (state, action) => {
            state.playlists = action.payload
        }
    }
})

export const { FetchPlaylist } = PlaylistSlice.actions

export const FetchFromPlaylist = () => async (dispatch) => {
    const options = {
        method: 'GET',
        url: 'https://spotify117.p.rapidapi.com/get_user_playlist/',
        params: {
            user_id : '317irkorync4rsa6epcqgt6ekyum'
        },
        headers: {
            'X-RapidAPI-Key': '46f39d7db6mshd4f6d16b87c61cep156468jsn09693aa25fbb',
            'X-RapidAPI-Host': 'spotify117.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data.items);
        dispatch(FetchPlaylist(response.data.items))
    } catch (error) {
        console.error(error);
    }
}

export default PlaylistSlice.reducer

