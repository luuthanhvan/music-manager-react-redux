import { React } from 'react';
import { TextField, Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

function SongForm(props){
    const {song, handleInputChange, title, onSubmit, isEditForm} = props;

    return(
        <div className="container">
            <div className='title'>
                <h5>{title}</h5>
            </div>
            <form onSubmit={onSubmit}>
                <div className="row mt-5">
                    <TextField 
                        className="form-control col me-5" 
                        required label="Name" 
                        variant="outlined" 
                        name="name"
                        onChange={handleInputChange}
                        value={song.name}
                    />
                    <TextField 
                        className="form-control col" 
                        required 
                        label="Genre" 
                        variant="outlined" 
                        name="genre"
                        onChange={handleInputChange}
                        value={song.genre}
                    />
                </div>
                <div className="row mt-5">
                    <TextField 
                        className="form-control col me-5" 
                        required 
                        label="Singer" 
                        variant="outlined" 
                        name="singer"
                        onChange={handleInputChange}
                        value={song.singer}
                    />
                    <TextField 
                        className="form-control col" 
                        required 
                        label="Link" 
                        variant="outlined" 
                        name="link"
                        onChange={handleInputChange}
                        value={song.link}
                    />
                </div>

                <div className="row-sm-2 mt-3">
                    <Button type="submit" className="btn col">
                        <span>{isEditForm ? "Save" : "Create"}</span>
                    </Button>
                    <Button className="btn col">
                        <NavLink className="link" to='/'>
                            <span>Back</span>
                        </NavLink>
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default SongForm;