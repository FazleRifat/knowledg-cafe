import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="md:w-1/3">
        <div><h3 className="text-4xl">Spent time:</h3></div>
        <div><h3>Bookmarks:{bookmarks.length}</h3></div>
      {
        bookmarks.map(bookmark =><Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
      }
    </div>
  );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.object.isRequired,
  };
export default Bookmarks;
