import axios from 'axios';

const url = "http://localhost:5000/api/createacount/";

class CreateAcountService {
    // Get Acounts
    static async getAcounts() {
        const res = await axios.get(url);
        const data = res.data;
        return data.map(acount => ({
            ...acount,
            createdAt: new Date(acount.createdAt)
        }));
        /*return new Promise((resolve,reject) =>{
            try{
                const res = axios.get(url);
                const data = res.data;
                resolve(
                    data.map(acount => ({
                        ...acount,
                        createdAt: new Date(acount.createdAt)
                    }))
                );
            }catch(err){
                reject(err);
            }
        });
        /*const res = axios.get(url, {
            params: {
            }
        });
        const data = res.data;
        return data.map(acount => ({
            ...acount,
            createdAt: new Date(acount.createdAt)
        }));
        /*return async (resolve,reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(acount => ({
                        ...acount,
                        createdAt: new Date(acount.createdAt)
                    }))
                );
            } catch(err) {
                reject(err);
            }
        };*/
    }
    // Create Acount
    static insertUser(gmail,usuario,contrasena){
        return axios.post(url, {
            gmail: gmail,
            usuario: usuario,
            contrasena: contrasena
        });
    }
    // Delete Acount
    //static deleteUser(id){
      //  return axios.delete('${url}${id}');
    //}
}

export default CreateAcountService;