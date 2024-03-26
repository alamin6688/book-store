import { useLoaderData, useParams } from "react-router-dom";


const BookDetails = () => {
    const books = useLoaderData();
    const { bookId } = useParams();
    // console.log(bookId,books)
    const selectedBook = books.find(book => book.bookId === parseInt(bookId));
    // console.log(selectedBook)
    return (
        <div className="my-10 md:flex gap-5 justify-between items-center bg-gray-100 rounded-2xl shadow-xl mb-20">

            <div className="md:w-1/2 md:pl-4">
                <img className="w-full rounded-xl" src={selectedBook.image} />
            </div>

            <div className=" md:w-full rounded-xl flex-1 p-4">
            <h1 className="text-2xl md:text-3xl font-bold">
            {selectedBook.bookName}
            </h1>
            <p className="">
                By : {selectedBook.author}
            </p>
            <p className="text-xl font-bold">
                {selectedBook.category}
            </p>
            <p className="text-xl font-bold">
                Review: <span></span>
                <span className="text-xl font-normal">
                    {selectedBook.review}
                </span>
            </p>
            <div className="flex justify-start items-center gap-2 mr-4">
                <p className="text-xl font-bold">Tags:</p>
                <p className="text-green-400">
                    # {selectedBook.tags[0]}
                </p>
                <p className="text-green-400">
                    # {selectedBook.tags[1]}
                    </p>
                <p className="text-green-400">
                    # {selectedBook.tags[2]}
                </p>
            </div>
            <div className="space-y-0">
                <div className="flex gap-2 items-center">
                    <p>Number of Pages:</p>
                    <p>{selectedBook.totalPages}</p>
                </div>
                <div className="flex gap-2 items-center">
                    <p>Publisher:</p>
                    <p>{selectedBook.publisher}</p>
                </div>
                <div className="flex gap-2 items-center">
                    <p>Year of Publishing:</p>
                    <p>{selectedBook.yearOfPublishing}</p>
                </div>
                <div className="flex gap-2 items-center">
                    <p>Rating:</p>
                    <p>{selectedBook.rating}</p>
                </div>
            </div>
                <div className="flex gap-5">
                    <button className="btn  btn-primary text-black border bg-transparent border-green-400 px-6 hover:bg-green-400 hover:border-none">
                        Read
                    </button>
                    <button className="btn btn-primary bg-[#50B1C9] border-none text-white hover:bg-blue-500 hover:border-none">
                        Wishlist
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;