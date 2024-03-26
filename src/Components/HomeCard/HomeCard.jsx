// import { Link } from 'react-router-dom';
import { FaRegStar } from "react-icons/fa6";
import { Link } from "react-router-dom";


const HomeCard = ({card}) => {

const { bookId, bookName, category,tags, author, rating, image } = card;

return (
    <div className='w-[90%] p-3 border rounded-2xl'>
        <Link to={`/details/${bookId}`}>
            {image && <img src={image} className="w-full rounded-2xl md:max-w-sm" alt={bookName} />}
            <div className='space-y-2'>
                <div className='mt-2 flex justify-between text-green-400'>
                    <p># {tags[0]}</p>
                    <p># {tags[1]}</p>
                    <p># {tags[2]}</p>
                    {/* {
                        tags.map((tag,index)=>
                        <button key={index} className='bg-[#F4FCF3] text-[#57CD45] px-3 py-1 rounded-full mr-2'>{tag}</button>
                        )
                    } */}
                </div>
                <h1 className='text-xl text-black font-bold'>
                    {bookName}
                </h1>
                <h1 className='text-lg text-gray-600'>
                    By: {author}
                </h1>
                <hr className='border-dashed border-gray-300' />
                <div className='flex justify-between'>
                    <div>
                        <h1 className='text-lg text-gray-600'>
                            {category}
                        </h1>
                    </div>
                    <div className='flex items-center'>
                        <h1 className='text-lg mr-2 text-gray-600'> {rating}
                        </h1>
                        <FaRegStar />
                    </div>
                </div>
            </div>
        </Link>
    </div>
);
};

export default HomeCard;