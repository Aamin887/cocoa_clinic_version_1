import { Outlet } from "react-router-dom"
import AdminNav from "../AdminDashNav/AdminNav"
function Layout() {
    return (
        <div className="container">
            <AdminNav />
            <Outlet />
        </div>
    )
}

export default Layout