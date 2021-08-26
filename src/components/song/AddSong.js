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

function AddSong(){
    // useHistory to Programmatically navigate after form submitted
    const history = useHistory();
    const dispatch = useDispatch();
    const [songValues, setSongValues] = useState(defaultSongValues);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setSongValues(values => ({ ...values, [name]: value }));
    };

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(createSong(songValues));
        history.push("/")
    }

    return(
        <div>
            <SongForm
                song={songValues}
                title="Add new song"
                isEditForm={false}
                handleInputChange={handleInputChange}
                onSubmit={onSubmit}
            />
        </div>
    )
}

export default AddSong;