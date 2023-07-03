import Logo from "../components/assets/mockupLogo.jpeg"

const styles = {
     text: {
    color: "black",
  },
  selected: {
    backgroundColor: "#C4C4C4",
  },
};

function NavTabs({ currentPage, pageSetter }) {

// convenient variables
const btName = [
  'Recibir pedido',
  'Entregar pedido',
  'Buscar pedido',
  'Clientes',
  'Prendas',
  'Registros'
];
const pages = [
  "recibirPedido",
  "entregarPedido",
  "buscarPedido",
  "clientes",
  "prendas",
  "registros"
];

    return (
    <div className="fixed w-250 left-0 top-0 bottom-0 bg-custom-gray flex  flex-col justify-start over" >
        <div className=" flex justify-center">
            <img src={Logo} alt="logo img here" className="h-230 w-230 rounded-lg mt-3" />
        </div>
        <div className=" flex justify-center">
            <ul>
                {/* lista de botones */}
                <li className="mt-40">
                    <a 
                        href={`#${pages[0]}`}
                        onClick={() => pageSetter(pages[0])}
                        style={currentPage === "recibirPedido" ? styles.selected : styles.text}
                    >
                    <div
                     style={currentPage === pages[0] ? styles.selected : styles.text}
                     className=" bg-custom-green w-230 mb-30 h-50 flex justify-center items-center rounded-lg "><h2 className="text-center text-white">{btName[0]}</h2></div>
                    </a>
                </li>
                {/* 2 */}
                <li className="mt-30">
                    <a 
                        href={`#${pages[1]}`}
                        onClick={() => pageSetter(pages[1])}
                        style={currentPage === "recibirPedido" ? styles.selected : styles.text}
                    >
                    <div
                     style={currentPage === pages[1] ? styles.selected : styles.text}
                     className=" bg-custom-green w-230 mb-30 h-50 flex justify-center items-center rounded-lg "><h2 className="text-center text-white">{btName[1]}</h2></div>
                    </a>
                </li>
                {/* 3 */}
                <li className="mt-30">
                    <a 
                        href={`#${pages[2]}`}
                        onClick={() => pageSetter(pages[2])}
                        style={currentPage === "recibirPedido" ? styles.selected : styles.text}
                    >
                    <div
                     style={currentPage === pages[2] ? styles.selected : styles.text}
                     className=" bg-custom-green w-230 mb-30 h-50 flex justify-center items-center rounded-lg "><h2 className="text-center text-white">{btName[2]}</h2></div>
                    </a>
                </li>
                {/* 4 */}
                <li className="mt-30">
                    <a 
                        href={`#${pages[3]}`}
                        onClick={() => pageSetter(pages[3])}
                        style={currentPage === "recibirPedido" ? styles.selected : styles.text}
                    >
                    <div
                     style={currentPage === pages[3] ? styles.selected : styles.text}
                     className=" bg-custom-green w-230 mb-30 h-50 flex justify-center items-center rounded-lg "><h2 className="text-center text-white">{btName[3]}</h2></div>
                    </a>
                </li>
                {/* 5 */}
                <li className="mt-30">
                    <a 
                        href={`#${pages[4]}`}
                        onClick={() => pageSetter(pages[4])}
                        style={currentPage === "recibirPedido" ? styles.selected : styles.text}
                    >
                    <div
                     style={currentPage === pages[4] ? styles.selected : styles.text}
                     className=" bg-custom-green w-230 mb-30 h-50 flex justify-center items-center rounded-lg "><h2 className="text-center text-white">{btName[4]}</h2></div>
                    </a>
                </li>
                {/* 6 */}
                <li className="mt-30">
                    <a 
                        href={`#${pages[5]}`}
                        onClick={() => pageSetter(pages[5])}
                        style={currentPage === "recibirPedido" ? styles.selected : styles.text}
                    >
                    <div
                     style={currentPage === pages[5] ? styles.selected : styles.text}
                     className=" bg-custom-green w-230 mb-30 h-50 flex justify-center items-center rounded-lg "><h2 className="text-center text-white">{btName[5]}</h2></div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    );
}

export default NavTabs;
