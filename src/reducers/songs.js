import { CREATE_SONG, GET_ALL_SONGS, GET_SONG, UPDATE_SONG, DELETE_SONG } from '../actions/types';

const initialState = [];

function songReducer(songs = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
        case CREATE_SONG:
            return [...songs, payload];
    
        case GET_ALL_SONGS || GET_SONG:
            return payload;
    
        case UPDATE_SONG:
            return songs.map((song) => {
                if (song.id === payload.id) {
                    return {
                    ...song,
                    ...payload,
                    };
                } else {
                    return song;
                }
            });
    
        case DELETE_SONG:
            return songs.filter(({ id }) => id !== payload.id);
    
        default:
            return songs;
    }
  };
  
  export default songReducer;