import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { NavLink } from 'react-router-dom';
import ListSongs from './ListSongs';
import { getAllSongs, deleteSong } from '../../actions/songs';

function Song(){
    const [listSongs, setListSongs] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            getAllSongs()).then((res => {
                setListSongs(res.data);
        }))
    }, [listSongs]);

    const onDelete = (event) => {
        const songId = event.target.value;
        dispatch(deleteSong(songId));
    }

    return(
        <div>
            <Button>
                <NavLink className="link" to="/add"><AddIcon /></NavLink>
            </Button>

            <ListSongs 
                listSongs={listSongs}
                onDelete={onDelete}
            />
        </div>
    )
}

export default Song;