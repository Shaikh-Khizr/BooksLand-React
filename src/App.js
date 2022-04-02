import { useState, useEffect } from 'react';

import BookCard from './BookCard';

import './App.css';
import SearchIcon from './search.svg';

const API_URL = 'https://api.itbook.store/1.0';

const App = () => {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const fetchBooks = async () => {
        const response = await fetch(`${API_URL}/new`);
        const data = await response.json();

        setBooks(data.books);
    }

    const searchBooks = async (title) => {
        const response = await fetch(`${API_URL}/search/${title}`);
        const data = await response.json();

        setBooks(data.books);
    }

    useEffect(() => {
        fetchBooks();
    }, []);

    return (
        <div className="app">
            <h1>BooksLand</h1>

            <div className="search">
                <input 
                  placeholder="Search for books"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                  src={SearchIcon}
                  alt="search"
                  onClick={() => searchBooks(searchTerm)}
                />
            </div>

            {
                books?.length > 0 
                ? (
                    <div className="container">
                        {books?.map((book) => (
                            <BookCard book={book} key={book.title} />
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No Books Found</h2>
                    </div>
                )
            }

        </div>
    );
}

export default App;