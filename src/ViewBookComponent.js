import { Component } from "react";
import BookService from "./BookService";

class ViewBookComponent extends Component{

    state={
        id:this.props.match.params.id,
        book:{}
    }

    componentDidMount(){
        BookService.getBook(this.state.id).then(res=>{
            console.log("Book Details are: "+JSON.stringify(res));
            this.setState({book:res.data});
        })
    }

    render(){
        return(
            <div>
                  <h3>Book Details</h3>
                  Book Code:<p>{this.state.book.bookCode}</p><br />
                  Book Name:<p>{this.state.book.bookname}</p><br />
                  Author Name:<p>{this.state.book.authorname}</p><br />
                  Price:<p>{this.state.book.price}</p><br />
                  Description:<p>{this.state.book.description}</p><br />
            </div>
        )
    }
}
export default ViewBookComponent;