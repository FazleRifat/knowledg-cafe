import profile from '../../assets/images/profile.png'
const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-100 max-w-4xl mx-auto">
        <div className="flex-1">
          <a className="normal-case text-xl md:text-4xl font-bold">Knowledge Cafe</a>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={profile} />
              </div>
            </label>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Header;
