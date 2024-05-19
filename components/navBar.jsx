const NavBar = ({ user }) => {
  return (
    <div className="navbar bg-base-100">
      <a className="btn btn-ghost text-xl">daisyUI</a>
      <p>User Name: {user}</p>
    </div>
  );
};
export default NavBar;
