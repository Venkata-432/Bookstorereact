import { Component } from "react";
import {Link} from "react-router-dom";
import BookService from "./BookService";

class HomeComponent extends Component{

    state={
        books:[]
    }
    
    componentDidMount(){
       BookService.getBooks().then(res=>{
           console.log("output of data: "+JSON.stringify(res));
           this.setState({books:res.data});
       })
    }

    deleteBook(id){
        BookService.deleteBook(id).then(res=>{
            this.setState({books:this.state.books.filter(book=>book.id!==id)});
        });
    }

    render(){
        return(
            <div>
                <h1>Book Depot App</h1>
                <div>
                   <Link to={`/addBook`}>
                        <button className="btn btn-success">Add Book</button>
                    </Link>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                       <thead className="bg-dark" style={{color: "black"}}>
                            <tr className="notbold">
                                <th>#</th>
                                <th>Book Code</th>
                                <th>Book Name</th>
                                <th>Author Name</th>
                                <th>Price</th>
                                <th>Description</th>
                            </tr>
                       </thead>
                       <tbody>
                            {
                                this.state.books.map(book=>
                                    <tr key={book.id}>
                                        <td>{book.id}</td>
                                        <td>{book.bookCode}</td>
                                        <td>{book.bookName}</td>
                                        <td>{book.authorName}</td>
                                        <td>{book.price}</td>
                                        <td>{book.description}</td>
                                        <td>
                                            <Link to={`/updateBook/${book.id}`}>
                                                <button className="btn btn-warning">Edit</button>
                                            </Link>
                                            <Link to={`/viewBook/${book.id}`}>
                                                <button className="btn btn-success">View</button>
                                            </Link>
                                            <button onClick={() => this.deleteBook(book.id)}
                                                className="btn btn-danger">Delete</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        )
    }
}
export default HomeComponent;