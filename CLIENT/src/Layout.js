import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cars">Cars Page</Link>
          </li>
          <li>
            <Link to="/Signin">Sign in page</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};