import { useEffect, useState } from "react";
import ListedBook from "../ListedBook/ListedBook";
import { IoIosArrowDropdown } from "react-icons/io";


const ListedBooks = () => {

    const [listedBooks, setListedBooks] = useState([]);

    useEffect(()=>{
        fetch('books.json')
        .then(res => res.json())
        .then(data => setListedBooks(data));
    },[]);

    

  return (
    <div> 
        <div className="bg-gray-100 p-1 md:p-2 text-center shadow-lg mb-16">
        <h1 className="text-5xl font-bold mb-20">Books</h1>
        </div>
        <h1 className="text-center mb-20">
            <button className="btn text-3xl bg-green-400 hover:bg-green-600 text-Black font-bold border-none rounded-lg">
                Sort By <IoIosArrowDropdown className="ml-1"></IoIosArrowDropdown>
            </button>
        </h1>

        {/* <div className="hero w-full bg-gray-300 rounded-3xl shadow-xl mb-20">
        <div className="hero-content w-full flex-col lg:flex-row">
          <img
            src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
        <div>
            <h1 className="text-4xl font-bold">
            The Catcher in the Rye
            </h1>
            <p className="py-4">
                By : Awlad Hossain
            </p>
            <div className="flex justify-start">
                <h3 className="mr-4">Tag:</h3>
                <div className="flex justify-center gap-2 mr-4">
                    <p>#alamin</p>
                    <p>#saif</p>
                </div>
                <div className="flex gap-2 justify-center">
                    <p>Icon</p>
                    Year of Publishing: 1924
                </div>
            </div>
            <div className="flex justify-start gap-2 mt-2">
            <div className="flex gap-2 justify-center">
                    <p>Icon</p>
                    Publisher: Scribner
                </div>
                <div className="flex gap-2 justify-center">
                    <p>Icon</p>
                    Page 192
                </div>
            </div>
            <div className="flex justify-between mt-6">
            <button className="btn btn-primary rounded-3xl">Category: </button>
            <button className="btn btn-primary rounded-3xl">Rating: 4.5</button>
            <button className="btn btn-primary rounded-3xl">View Details</button>
            </div>
        </div>
        </div>
        </div> */}
        <div className="p-4">
            {
               listedBooks.map(books => <ListedBook
                key={books.bookId} 
                books={books}>

                </ListedBook>) 
            }
        </div>

    </div>
  );
};

export default ListedBooks;
