import { Component } from "react";
import BookService from "./BookService";

class UpdateBookComponent extends Component{

    state={
        id:this.props.match.params.id,
        bookCode:'',
        bookName:'',
        authorName:'',
        price:'',
        description:''
    }
    componentDidMount(){
        BookService.getBook(this.state.id).then(res=>{
            let book=res.data;
            this.setState({bookCode:book.bookCode,bookName:book.bookName,authorName:book.authorName,price:book.price,description:book.description});
        })
    }
    changeBookCodeEvent=()=>{
       this.setState({bookCode:event.target.value});
    }
    changeBookNameEvent=()=>{
        this.setState({bookName:event.target.value}); 
    }
    changeAuthorNameEvent=()=>{
        this.setState({authorName:event.target.value});
    }
    changePriceCodeEvent=()=>{
        this.setState({price:event.target.value});
    }
    changeDescriptionEvent=()=>{
        this.setState({description:event.target.value});
    }
    
    saveRecord=(event)=>{
        let book={bookCode:this.state.bookCode,bookName:this.state.bookName,authorName:this.state.authorName,price:this.state.price,description:this.state.description};

        BookService.updateBook(this.state.id,book).then(res=>{
            this.props.history.push(`/HomeComponent`);
        })
    }
    render(){
        return(
            <div>
                <form>
                    <h3>Update Book Details</h3>
                    Book Code<input type="text" value={this.state.bookCode} onChange={this.changeBookCodeEvent()}></input><br/>
                    Book Name<input type="text" value={this.state.bookName} onChange={this.changeBookNameEvent()}></input><br/>
                    Author Name<input type="text" value={this.state.authorName} onChange={this.changeAuthorNameEvent()}></input><br/>
                    Price<input type="text" value={this.state.price} onChange={this.changePriceEvent()}></input><br/>
                    Description<input type="text" value={this.state.description} onChange={this.changeDescriptionEvent()}></input><br/>
                    <button type="submit" value="submit" onClick={this.saveRecord}></button>
               </form>
            </div>

        );
    }
}
export default UpdateBookComponent;