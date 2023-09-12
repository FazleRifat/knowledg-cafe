import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks,readingTime }) => {
  return (
    <div className="md:w-1/3">
        <div className="bg-purple-400 p-3 rounded-lg my-2 "><h3 className="text-4xl">Spent time:{readingTime}</h3></div>
        <div className="bg-violet-400 p-2 rounded-lg my-2 "><h3 className="text-3xl">Bookmarks:{bookmarks.length}</h3></div>
      {
        bookmarks.map(bookmark =><Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
      }
    </div>
  );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime:PropTypes.number
  };
export default Bookmarks;
