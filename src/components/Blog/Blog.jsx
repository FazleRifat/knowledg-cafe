import PropTypes from "prop-types";
const Blog = ({ blog }) => {
  const {
    cover,
    title,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtag,
  } = blog;
  return (
    <div>
      <div>
        <div className="card card-compact w-[100%] bg-base-100 shadow-xl mb-5">
          <figure className="mb-3">
            <img
              src={cover}
            />
          </figure>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
                <img src={author_img} className="w-20" alt="" />
                <div>
                    <p className="text-2xl font-bold ">{author}</p>
                    <p className="text-gray-500">{posted_date}</p>
                </div>
            </div>
            <p className="text-gray-400">{reading_time} min read</p>
          </div>
          <div className="card-body text-left">
            <h2 className="card-title text-5xl">{title}</h2>
            <p className="text-gray-500">{hashtag}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
