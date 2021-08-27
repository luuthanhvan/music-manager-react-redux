import { React, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { NavLink } from 'react-router-dom';
import ListSongs from './ListSongs';
import { getAllSongs } from '../../actions/songs';

// fake data
// const listSongs = [
//     {name: 'On The Ground', genre: 'US-UK', singer: 'ROSÉ', link: 'http://localhost:3000/assets/OnTheGround.mp3'},
//     {name: 'Gone', genre: 'US-UK', singer: 'ROSÉ', link: 'http://localhost:3000/assets/Gone.mp3'},
//     {name: 'Pretty Savage', genre: 'Kpop', singer: 'BLACKPINK', link: 'http://localhost:3000/assets/PrettySavage.mp3'},
//     {name: 'Dancing With Your Ghost', genre: 'US-UK', singer: 'Sasha Sloan', link: 'http://localhost:3000/assets/DancingWithYourGhost.mp3'},
//     {name: 'You need to calm down', genre: 'US-UK', singer: 'Taylor Swift', link: 'http://localhost:3000/assets/YouNeedToCalmDown.mp3'},
//     {name: 'Ngày chưa giông bão', genre: 'Vpop', singer: 'Bùi Lan Hương', link: 'http://localhost:3000/assets/NgayChuaGiongBao.mp3'},
//     {name: 'Mặt trăng', genre: 'Vpop', singer: 'Bùi Lan Hương', link: 'http://localhost:3000/assets/MatTrang.mp3'},
// ]

function Song(){
    const [listSongs, setListSongs] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllSongs()).then((res) => {
            setListSongs(res.data);
        })
    },[])

    return(
        <div>
            <Button>
                <NavLink className="link" to="/add"><AddIcon /></NavLink>
            </Button>

            <ListSongs 
                listSongs={listSongs}
            />
        </div>
    )
}

export default Song;