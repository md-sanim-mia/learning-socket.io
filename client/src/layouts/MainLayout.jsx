import { Outlet } from "react-router-dom"
import Siteber from "../compoments/Siteber/Siteber"

const MainLayout = () => {
  return (
    <div>
      <Siteber/>
      <div className=" min-h-screen">
          {/* sticky header */}
          {/* dynamic content */}
          <div className="flex-1 md:ml-64">
            <div className="p-5">
              <Outlet />
            </div>
          </div>
        </div>
    </div>
  )
}

export default MainLayout
