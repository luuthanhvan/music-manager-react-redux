import http from "../http-common"

const getAll = () => {
  	return http.get("/song");
};

const get = id => {
  	return http.get(`/song/songId/${id}`);
};

const create = data => {
  	return http.post("/song", data);
};

const update = (id, data) => {
  	return http.put(`/song/songId/${id}`, data);
};

const remove = id => {
  	return http.delete(`/song/songId/${id}`);
};

const SongService = {
	getAll,
	get,
	create,
	update,
	remove
};

export default SongService;