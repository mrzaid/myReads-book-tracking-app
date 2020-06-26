import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from "./Search_Page"
import MainPage from './Main_Page'
 import {Switch , Route} from 'react-router-dom'
class BooksApp extends React.Component {
  state = {
    books : []
  }

  componentDidMount(){
    BooksAPI.getAll().then(books=>{this.setState({books:books})})
  
  
  }
  moveShelf = (book,shelf) =>  {
BooksAPI.update(book,shelf);
BooksAPI.getAll().then(books=>{this.setState({books:books})})


  }
  render() {
    console.log(this.state.books);
    return (
      <div className="app">
        <Switch>
          <Route exact path='/' render={()=>
            <MainPage
          books={this.state.books}
          moveShelf ={this.moveShelf}
          />

          } 
          
          />
          
          <Route  path='/search' render={()=>
            <SearchPage
            moveShelf ={this.moveShelf}
            books={this.state.books}

            />
          
          }
          
          />
         
          </Switch>
      </div>
    )
  }
}

export default BooksApp
