import { React, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createSong } from '../../actions/songs';
import SongForm from './SongForm';

const defaultSongValues = {
    name: "",
    genre: "",
    singer: "",
    link: "",
};

function EditSong(){
    return(
        <div>
            <SongForm 
                title="Edit song"
                isEditForm={true}
            />
        </div>
    )
}

export default EditSong;