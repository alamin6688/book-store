import { CiLocationOn } from "react-icons/ci";
import { IoPersonSharp } from "react-icons/io5";
import { IoBookSharp } from "react-icons/io5";


const ListedBook = ({books}) => {

    const {bookName, author, image, totalPages, category, rating, tags, publisher, yearOfPublishing} = books;

    return (
        <div>
        <div className="hero w-full bg-gray-200 rounded-3xl shadow-xl mb-20">
        <div className="hero-content w-full flex-col lg:flex-row">
          <img
            src={image}
            className="max-w-sm rounded-3xl shadow-2xl md:mr-4 mb-4"
          />
        <div>
            <h1 className="text-4xl font-bold">
            {bookName}
            </h1>
            <p className="py-4">
                By : {author}
            </p>
            <div className="flex justify-start items-center">
                <h3 className="mr-4 font-bold">Tag:</h3>
                <div className="flex justify-center gap-2 mr-4">
                    <p># {tags[0]}</p>
                    <p># {tags[1]}</p>
                    <p># {tags[2]}</p>
                </div>
                <div className="flex justify-center">
                    <p><CiLocationOn className="text-2xl text-black mr-1"></CiLocationOn></p>
                    Year of Publishing: {yearOfPublishing}
                </div>
            </div>
            <div className="flex justify-start gap-2 mt-2">
                <div className="flex justify-center items-center">
                    <p>{<IoPersonSharp className="text-xl text-black mr-2"></IoPersonSharp>}</p>
                    Publisher: {publisher}
                </div>
                <div className="flex justify-center items-center">
                    <p>{<IoBookSharp className="text-xl text-black mr-2 ml-4"></IoBookSharp>}</p>
                    Page : {totalPages}
                </div>
            </div>
            <div className="flex justify-between mt-6">
            <button className="btn bg-blue-300 hover:text-white hover:bg-blue-400 border-none text-blue-600 rounded-3xl">
                Category: {category}
            </button>
            <button className="btn bg-orange-200 hover:text-white hover:bg-orange-400 text-orange-600 border-none rounded-3xl">
                Rating: {rating}
            </button>
            <button className="btn bg-green-400 hover:bg-green-600 text-white border-none rounded-3xl">
                View Details
            </button>
            </div>
        </div>
        </div>
        </div>
        </div>
    );
};

export default ListedBook;