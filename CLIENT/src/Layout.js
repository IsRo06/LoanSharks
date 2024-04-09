import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cars">Cars Page</Link></li>
          <li><Link to="/account">Accounts Page</Link></li>
          <li><Link to="/employee-information">Employee Information</Link></li>
          <li><Link to="/admin-panel">Admin Panel</Link></li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};