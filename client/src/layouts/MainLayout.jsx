import { Outlet } from "react-router-dom"
import Siteber from "../compoments/Siteber/Siteber"

const MainLayout = () => {
  return (
    <div>
      <Siteber/>
      <div className="">
          {/* sticky header */}
          {/* dynamic content */}
          <div className=" flex-1  ml-[357px] bg-[#F0FDF4] min-h-screen mr-2 p-2">
            <div className="">
              <Outlet />
            </div>
          </div>
        </div>
    </div>
  )
}

export default MainLayout
