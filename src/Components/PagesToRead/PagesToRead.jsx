import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PagesToRead = () => {
    // State to store the list of books from the readList in local storage
    const [bookList, setBookList] = useState([]);

    // Load book list from the readList in local storage on component mount
    useEffect(() => {
        // Retrieve stored book list from the readList in local storage
        const storedReadList = JSON.parse(localStorage.getItem('readList')) || [];
        const storedBookList = storedReadList.map(bookId => JSON.parse(localStorage.getItem(bookId)));

        // Set the book list state with the retrieved data
        setBookList(storedBookList);
    }, []);

    // Calculate the total pages to read from all books in bookList
    const totalToRead = bookList.reduce((total, book) => total + book.totalPages, 0);

    // Create data for the bar chart including the total pages to read
    const chartData = [
        ...bookList.map((book) => ({
            bookName: `${book.bookName}`,
            totalPages: book.totalPages,
        })),
        { bookName: `Total to Read`, totalPages: totalToRead }
    ];

    return (
        <div>
            <h2>Pages to Read</h2>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="bookName" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="totalPages" fill="#9BB0C1" label={{ position: 'top' }} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PagesToRead;
