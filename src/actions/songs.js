import { CREATE_SONG, GET_ALL_SONGS, GET_SONG, UPDATE_SONG, DELETE_SONG } from './types';
import SongService from "../services/SongService";

export const createSong = (song) => async (dispatch) => {
    try {
        const res = await SongService.create(song);
        
        dispatch({
            type: CREATE_SONG,
            payload: res,
        });

        return res;
    }
    catch (err) {
        return err;
    }
};

export const getAllSongs = () => async (dispatch) => {
    try {
        const res = await SongService.getAll();
    
        dispatch({
            type: GET_ALL_SONGS,
            payload: res.data,
        });
        
        return res.data;
    } 
    catch (err) {
        return err;
    }
};

export const getSong = (id) => async (dispatch) => {
    try {
        const res = await SongService.get(id);
    
        dispatch({
            type: GET_SONG,
            payload: res.data,
        });

        return res.data;
    } 
    catch (err) {
        return err;
    }
};

export const updateSong = (id, data) => async (dispatch) => {
    try {
        const res = await SongService.update(id, data);
    
        dispatch({
            type: UPDATE_SONG,
            payload: res.data,
        });
    
        return res.data;
    } 
    catch (err) {
        return err;
    }
};

export const deleteSong = (id) => async (dispatch) => {
    try {
        const res = await SongService.remove(id);
    
        dispatch({
            type: DELETE_SONG,
            payload: { id },
        });

        return res.data;
    } 
    catch (err) {
        return err;
    }
};