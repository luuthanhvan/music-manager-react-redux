import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { NavLink } from 'react-router-dom';
import ListSongs from './ListSongs';

// fake data
const listSongs = [
    {name: 'On The Ground', genre: 'US-UK', singer: 'ROSÉ', link: '%PUBLIC_URL%/assets/OnTheGround.mp3'},
    {name: 'Gone', genre: 'US-UK', singer: 'ROSÉ', link: '%PUBLIC_URL%/assets/Gone.mp3'},
    {name: 'Pretty Savage', genre: 'Kpop', singer: 'BLACKPINK', link: '%PUBLIC_URL%/assets/PrettySavage.mp3'},
    {name: 'Dancing With Your Ghost', genre: 'US-UK', singer: 'Sasha Sloan', link: '%PUBLIC_URL%/assets/PrettySavage.mp3'},
    {name: 'You need to calm down', genre: 'US-UK', singer: 'Taylor Swift', link: '%PUBLIC_URL%/assets/PrettySavage.mp3'},
    {name: 'Ngày chưa giông bão', genre: 'Vpop', singer: 'Bùi Lan Hương', link: '%PUBLIC_URL%/assets/PrettySavage.mp3'},
    {name: 'Mặt trăng', genre: 'Vpop', singer: 'Bùi Lan Hương', link: '%PUBLIC_URL%/assets/PrettySavage.mp3'},
]

function Song(){
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