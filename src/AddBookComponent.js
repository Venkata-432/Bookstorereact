import { Component } from "react";
import BookService from "./BookService";

class AddBookComponent extends Component{

    state={
        bookCode:'',
        bookName:'',
        authorName:'',
        price:'',
        description:''
    }

    bookCodeHandler=(event)=>{
         this.setState({bookCode:event.target.value});
    }
    bookNameHandler=(event)=>{
        this.setState({bookName:event.target.value});
    }
    authorNameHandler=(event)=>{
        this.setState({authorName:event.target.value});
    }
    priceHandler=(event)=>{
        this.setState({price:event.target.value});
    }
    descriptionHandler=(event)=>{
        this.setState({description:event.target.value});
    }

    saveRecord=()=>{
      let book=({bookCode:this.state.bookCode,bookName:this.state.bookName,authorName:this.state.authorName,price:this.state.price,description:this.state.description})
      console.log("Book details are "+JSON.stringify(book));
      BookService.createBook(book).then(res=>{
          console.log("Book created details are: "+res);

      })
    }

    render(){
        return(
            <div>
                <form>
                        <h3>Add Book</h3>
                        <label htmlFor="BookCodeTextInput">Book Code</label><br/>
                        <input id="BookCodeTextInput" value={this.state.bookCode} onChange={this.bookCodeHandler} placeholder="Book Code" /><br/>
                        <label htmlFor="BookNameTextInput">Book Name</label><br/>
                        <input id="BookNameTextInput" value={this.state.bookName} onChange={this.bookNameHandler} placeholder="Book Name" /><br/>
                        <label htmlFor="AuthorNameTextInput">Author Name</label><br/>
                        <input id="AuthorNameTextInput" value={this.state.authorName} onChange={this.authorNameHandler} placeholder="Author Name" /><br/>
                        <label htmlFor="PriceTextInput">Price</label><br/>
                        <input id="PriceTextInput" value={this.state.price} onChange={this.priceHandler} placeholder="Price" /><br/>
                        <label htmlFor="DescriptionTextInput">Description</label><br/>
                        <input id="DescriptionTextInput" value={this.state.description} onChange={this.descriptionHandler} placeholder="Description" /><br/>
                        <button type="submit" onClick={this.saveRecord}>Submit</button>
                </form>
            </div>
        )
    }
}
export default AddBookComponent;