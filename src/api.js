import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
});

export default api;

/*
class Api{
  static async getUserInfo(username){
    try{
      const response = await axios.get(`https://api.github.com/users/${username}`);
      console.log(response);
    }catch(err){
      console.warn("erro na API");
    }


  }
}
*/
