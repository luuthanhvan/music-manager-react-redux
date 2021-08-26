import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button} from '@material-ui/core';
import {Delete, Edit} from '@material-ui/icons';
import { NavLink } from 'react-router-dom';
import mp3_file from '../../assets/Gone.mp3';

function ListSongs(props){
    const { listSongs } = props;

    return(
        <div>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Genre</TableCell>
                            <TableCell>Singer</TableCell>
                            <TableCell>Play</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {listSongs.map((song, index) => (
                            <TableRow key={song.name}>
                                <TableCell>{index+1}</TableCell>
                                <TableCell>{song.name}</TableCell>
                                <TableCell>{song.genre}</TableCell>
                                <TableCell>{song.singer}</TableCell>
                                <TableCell>
                                    <audio src={mp3_file} controls/>
                                </TableCell>
                                <TableCell>
                                    <div className="row">
                                        <div className="col-2 me-2">
                                            <Button>
                                                <NavLink to="/edit"><Edit /></NavLink>
                                            </Button>
                                        </div>
                                        <div className="col-2"><Button><Delete /></Button></div>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default ListSongs;