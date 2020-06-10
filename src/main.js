import axios from 'axios';
class Api
{
    static async getUser(name)
    {
        try {
            const reponse = await axios.get(`https://api.github.com/users/${name}`);
            console.log(reponse.data);

        }catch (e){
            console.warn(e)
        }
    }

}
Api.getUser('alantmelo');