import SongForm from './SongForm';

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