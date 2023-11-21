import { configureStore } from "@reduxjs/toolkit";
import PlaylistSlice from "./Modules/LibraryList";

export const store = configureStore({
    reducer: {
        playlist: PlaylistSlice
    }
})