import { FaChartPie, FaFileCirclePlus, FaUser, FaGear, FaAngleDown } from "react-icons/fa6";
export const NavBar = () => {
  return (

    <>

      {/* SideBar */}
      <nav className="bg-white h-screen">

        <section className="mb-8 items-center p-4 text-center text-titles font-bold">
          Plan de Desarrollo Territorial
        </section>

        <section className="p-6">

          <ul className="">

            <li className="sideBarItem">
              <a href="#" className="flex items-center">
                <i><FaChartPie className="mr-4 size-5" /></i><span className="">Analiticas</span>
              </a>
            </li>
            <li className="sideBarItem">
              <a href="#" className="flex items-center">
                <i><FaFileCirclePlus className="mr-4 size-5" /></i><span className="">Ingresar Información</span>
              </a>
            </li>

          </ul>


        </section>



      </nav>

      {/* NavaBar */}
      <nav className="topMenu">

        <section className="flex items-center">
          <i><FaUser className="mr-2" /></i>
          <span className="font-medium hover:text-titles cursor-pointer">Inicia Sesión<FaAngleDown className="ml-2 hover:text-titles cursor-pointer inline"/></span>
          <i><FaGear className="ml-10 hover:text-titles cursor-pointer"/></i>
        </section>


      </nav>

    </>
  )
}
