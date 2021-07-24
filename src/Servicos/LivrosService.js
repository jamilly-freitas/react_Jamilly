import axios from 'axios';

const urlbase = "http://localhost:8080/Livros";
const url_Livro = "http://localhost:8080/Livros/all";

class LivrosService {
    getLivro(){
        return axios.get(urlbase+"/all");
    }

    deleteLivro(id_Livro){
        return axios.delete(urlbase+"/delete_Livro/"+id_Livro);
    }

    editarLivro(Livro){
        return axios.put(urlbase+"/update_Livro/"+Livro.id_Livro, Livro);
    }

    criarLivro(Livro){
        return axios.post(urlbase+"/addLivros", Livro);
    }

    getLivroById(id_Livro){
        return axios.get(urlbase+"/locate_Livro/"+id_Livro);
    }
}
export default new LivrosService();