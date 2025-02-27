import { FaPenToSquare, FaListUl } from "react-icons/fa6";

export const Tracking = () => {
  return (
    <section className="tracking">

      <h1 className="titles">Ingresar Información</h1>

      <h3 className="subtitles">Sección 1</h3>

      <form action="">

        <label className="inputTitles">Código Línea</label>
        <div className="flex mb-5">
          <i className="border border-placeholder rounded-s-lg p-3 bg-menu-hover text-icons"><FaPenToSquare /></i>
          <input type="text" className="inputText" placeholder="Ingrese Código Línea" />
        </div>

        <label className="inputTitles">Línea Estrátegica</label>
        <div className="flex mb-5">
          <i className="border border-placeholder rounded-s-lg p-3 bg-menu-hover text-icons"><FaListUl /></i>
          <select className="inputText">
            <option value="">Seleccion una opción</option>
            <option value="">opcion 1</option>
            <option value="">opcion 2</option>
            <option value="">opcion 3</option>
            <option value="">opcion 4</option>
          </select>
        </div>

        <label className="inputTitles">Ponderación Línea estratégica</label>
        <div className="flex mb-4">
          <i className="border border-placeholder rounded-s-lg p-3 bg-menu-hover text-icons"><FaPenToSquare /></i>
          <input type="text" className="inputText" placeholder="Ingrese Ponderación Línea estratégica" />
        </div>

        <label className="inputTitles">Código Componente</label>
        <div className="flex mb-5">
          <i className="border border-placeholder rounded-s-lg p-3 bg-menu-hover text-icons"><FaListUl /></i>
          <select className="inputText">
            <option value="">Seleccion una opción</option>
            <option value="">opcion 1</option>
            <option value="">opcion 2</option>
            <option value="">opcion 3</option>
            <option value="">opcion 4</option>
          </select>
        </div>

        <label className="inputTitles">Componente</label>
        <div className="flex mb-4">
          <i className="border border-placeholder rounded-s-lg p-3 bg-menu-hover text-icons"><FaPenToSquare /></i>
          <input type="text" className="inputText" placeholder="" disabled />
        </div>

        <label className="inputTitles">Ponderación Componente</label>
        <div className="flex mb-4">
          <i className="border border-placeholder rounded-s-lg p-3 bg-menu-hover text-icons"><FaPenToSquare /></i>
          <input type="text" className="inputText" placeholder="Ingrese Ponderación Componente" />
        </div>

        <label className="inputTitles">Código Programa </label>
        <div className="flex mb-5">
          <i className="border border-placeholder rounded-s-lg p-3 bg-menu-hover text-icons"><FaListUl /></i>
          <select className="inputText">
            <option value="">Seleccion una opción</option>
            <option value="">opcion 1</option>
            <option value="">opcion 2</option>
            <option value="">opcion 3</option>
            <option value="">opcion 4</option>
          </select>
        </div>

        <label className="inputTitles">Programa </label>
        <div className="flex mb-4">
          <i className="border border-placeholder rounded-s-lg p-3 bg-menu-hover text-icons"><FaPenToSquare /></i>
          <input type="text" className="inputText" placeholder="" disabled />
        </div>




        <section className="flex gap-4 mt-8">

          <button className="btnReset">Limpiar</button>
          <button className="btnSave">Guardar</button>

        </section>

      </form>

    </section>



  )
}
