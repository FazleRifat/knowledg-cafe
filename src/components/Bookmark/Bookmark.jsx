import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div>
      <div className="bg-slate-200  p-5 rounded-lg mt-3">
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object
};

export default Bookmark;
