import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import ReadList from "../ReadList/ReadList";

const ListedBooks = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [sortBy, setSortBy] = useState(null); // State to track the selected sorting option

  const switchTabs = (index) => {
    setCurrentTab(index);
  };

  // Function to handle sorting based on the selected option
  const handleSortBy = (option) => {
    setSortBy(option);
  };

  return (
    <div className="my-10">
      <h1 className="text-3xl font-bold mb-4">Listed Books</h1>

      {/* Dropdown */}
      <div className="flex justify-center my-7">
        <details className="dropdown">
          <summary className="hover:bg-green-600 border-none outline-none m-1 btn bg-green-400 text-xl text-black font-bold">
            Sort by <FaAngleDown />
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <button onClick={() => handleSortBy("rating")}>Rating</button>
            </li>
            <li>
              <button onClick={() => handleSortBy("pages")}>
                Number of pages
              </button>
            </li>
            <li>
              <button onClick={() => handleSortBy("year")}>
                Published year
              </button>
            </li>
          </ul>
        </details>
      </div>

      <div role="tablist" className="tabs tabs-lifted">
        <Link
          to="read-book"
          role="tab"
          className={`tab ${currentTab === 0 ? "tab-active" : ""}`}
          onClick={() => switchTabs(0)}
        >
          <h1 className="text-2xl ">Read Books</h1>
        </Link>
        <Link
          to={`whitelist-books`}
          role="tab"
          className={`tab ${currentTab === 1 ? "tab-active" : ""}`}
          onClick={() => switchTabs(1)}
        >
          <h1 className="text-2xl ">Wishlist Books</h1>
        </Link>
        <a role="tab" className="tab"></a>
      </div>

      <div className="tab-content">
        {currentTab === 0 && <ReadList sortBy={sortBy} />}
        {currentTab === 1 && <div>Content for Whitelist Books</div>}
      </div>
      <Outlet />
    </div>
  );
};

export default ListedBooks;
