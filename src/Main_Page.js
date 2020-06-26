import React, { Component } from 'react';
import Books from "./Books"
import {Link} from "react-router-dom"
class MainPage extends Component {

    render() {
        console.log(this.props.books);

        return (


            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {this.props.books
                                        .filter(book => book.shelf === 'currentlyReading')
                                        .map(book => (<li key={book.id}>
                                            <Books
                                                book={book}
                                                moveShelf={this.props.moveShelf}
                                                currentShelf={"currentlyReading"}
                                            />
                                        </li>)




                                        )
                                    }


                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {this.props.books
                                        .filter(book => book.shelf === 'wantToRead')
                                        .map(book => (<li key={book.id}>
                                            <Books book={book}
                                                moveShelf={this.props.moveShelf}
                                                currentShelf={"wantToRead"}
                                            />
                                        </li>)




                                        )
                                    }

                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {this.props.books
                                        .filter(book => book.shelf === 'read')
                                        .map(book => (<li key={book.id}>
                                            <Books
                                                book={book}
                                                moveShelf={this.props.moveShelf}
                                                currentShelf={"read"}
                                            />
                                        </li>)
                                        )
                                    }

                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="open-search">
                <Link to='/search'>
                    <button>Add a book</button>
                    </Link>
                </div>
            </div>);
    }
}

export default MainPage;