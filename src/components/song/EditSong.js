import { React, useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getSong, updateSong } from '../../actions/songs';
import SongForm from './SongForm';

const defaultSongValues = {
    name: "",
    genre: "",
    singer: "",
    link: "",
};

function EditSong(){
    const history = useHistory();
    const dispatch = useDispatch();
    const location = useLocation();
    const songId = location.state;
    const [songValues, setSongValues] = useState(defaultSongValues);

    useEffect(() => {
        dispatch(getSong(songId)).then((res) => {
            if(res){
                setSongValues(res.data);
            }
        });
    }, [])

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setSongValues(values => ({ ...values, [name]: value }));
    };

    const onSubmit = () => {
        dispatch(updateSong(songId, songValues)).then(() => { history.push('/') });
    }

    return(
        <div>
            <SongForm
                song={songValues}
                title="Edit song"
                isEditForm={true}
                handleInputChange={handleInputChange}
                onSubmit={onSubmit}
            />
        </div>
    )
}

export default EditSong;