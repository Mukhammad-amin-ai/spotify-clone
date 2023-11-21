import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    playlist: []
}

export const PlaylistSlice = createSlice({
    name: "playlist",
    initialState,
    reducers: {
        FetchPlaylist: (state, action) => {
            state.playlist = action.payload
        }
    }
})

export const { FetchPlaylist } = PlaylistSlice.actions

export const FetchFromPlaylist = () => async (dispatch) => {
    const options = {
        method: 'GET',
        url: 'https://spotify23.p.rapidapi.com/user_profile/',
        params: {
            id: '317irkorync4rsa6epcqgt6ekyum',
            playlistLimit: '10',
            artistLimit: '10'
        },
        headers: {
            'X-RapidAPI-Key': '46f39d7db6mshd4f6d16b87c61cep156468jsn09693aa25fbb',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data.public_playlists);
        dispatch(FetchPlaylist(response.data.public_playlists))
    } catch (error) {
        console.error(error);
    }
}

export default PlaylistSlice.reducer

