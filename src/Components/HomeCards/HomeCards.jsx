import { useEffect, useState } from "react";
import HomeCard from "../HomeCard/HomeCard";



const HomeCards = () => {

    const [booksCard, setBooksCard] = useState([]);

    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooksCard(data))
    }, [])


    return (
        <div>
            <div className="bg-gray-100 p-1 md:p-2 text-center shadow-lg mb-16 mt-16">
            <h1 className="text-5xl font-bold mb-20">Books</h1>
        </div>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-gray-100 rounded-3xl shadow-xl">
                {
                    booksCard.map(card => <HomeCard 
                        key={card.bookId}
                        card={card}>

                        </HomeCard>)
                }
            </div>
        </div>
    );
};

export default HomeCards;