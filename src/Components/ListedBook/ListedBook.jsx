import { FaLocationDot } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { IoBookSharp } from "react-icons/io5";


const ListedBook = ({books}) => {

    const {bookName, author, image, totalPages, category, rating, tags, publisher, yearOfPublishing} = books;

    return (
        <div>
        <div className="hero md:w-full bg-gray-200 rounded-3xl shadow-xl mb-16 p-2">
        <div className="hero-content w-full flex-col lg:flex-row">
          <img
            src={image}
            className="max-w-[75%] md:max-w-sm rounded-3xl shadow-2xl m-0"
          />
        <div>
            <h1 className="text-3xl md:text-4xl font-bold">
            {bookName}
            </h1>
            <p className="">
                By : {author}
            </p>
            <div className="md:flex justify-start items-center">
                <h3 className="mr-4 font-bold">Tag:</h3>
                <div className="flex justify-start gap-2 mr-4">
                    <p># {tags[0]}</p>
                    <p># {tags[1]}</p>
                    <p># {tags[2]}</p>
                </div>
                <div className="flex justify-stat items-center">
                    <p><FaLocationDot className="text-[18px] text-black mr-1"></FaLocationDot></p>
                    Year of Publishing: {yearOfPublishing}
                </div>
            </div>
            <div className="md:flex justify-start gap-2">
                <div className="flex justify-start items-center">
                    <p>{<IoPersonSharp className="text-xl text-black mr-2"></IoPersonSharp>}</p>
                    Publisher: {publisher}
                </div>
                <div className="flex justify-start items-center">
                    <p>{<IoBookSharp className="text-xl text-black mr-2 md:ml-4"></IoBookSharp>}</p>
                    Page : {totalPages}
                </div>
            </div>
            <div className="flex-col text-center space-y-4 md:space-y-0 lg:flex md:flex-row justify-between mt-4">
            <div>
            <button className="btn bg-blue-300 hover:text-white hover:bg-blue-400 border-none text-blue-600 rounded-3xl">
                Category: {category}
            </button>
            </div>
            <div>
            <button className="btn bg-orange-200 hover:text-white hover:bg-orange-400 text-orange-600 border-none rounded-3xl">
                Rating: {rating}
            </button>
            </div>
            <div>
            <button className="btn bg-green-400 hover:bg-green-600 text-white border-none rounded-3xl">
                View Details
            </button>
            </div>
            </div>
        </div>
        </div>
        </div>
        </div>
    );
};

export default ListedBook;