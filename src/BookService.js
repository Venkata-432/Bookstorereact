import axios from "axios";

const apiurl="http://localhost:10432/bookdepot";

class BookService{

    createBook(book){
       return axios.post(apiurl+"/createBook",book);
    }
    getBook(id){
        return axios.get(apiurl+"/viewBookById/"+id);
    }

    updateBook(id){
        return axios.put(apiurl+"/updateBook/"+id);
    }

    deleteBook(id){
        return axios.delete(apiurl+"/deleteBook/"+id);
    }

    getBooks(){
        return axios.get(apiurl+"/books");
    }

}

export default new BookService();