import http from "../http-common";

const getAll = () => {
  return http.get("/songs");
};

const get = id => {
  return http.get(`/songs/${id}`);
};

const create = data => {
  return http.post("/song", data);
};

const update = (id, data) => {
  return http.put(`/songs/${id}`, data);
};

const remove = id => {
  return http.delete(`/songs/${id}`);
};

const SongService = {
  getAll,
  get,
  create,
  update,
  remove
};

export default SongService;