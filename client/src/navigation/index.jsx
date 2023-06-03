import { React, useState } from "react";
import Logo from "../components/assets/mockupLogo.jpeg"
import NavBtn from "../components/NavButton";

function NavTabs({ currentPage, pageSetter }) {
    const [menu, setMenu] = useState(false)

    const switchMenu = () => {
    setMenu(!menu)
    }
const recibirPedido = 'Recibir pedido';
const entregarPedido = 'Entregar pedido';
const buscarPedido = 'Buscar pedido';
const clientes = 'Clientes';
const prendas = 'Prendas';
const registros = 'Registros';
    return (
    <div className="fixed w-250 left-0 top-0 bottom-0 bg-custom-gray flex  flex-col justify-start" >
        <div className=" flex justify-center">
            <img src={Logo} alt="logo img here" className="h-230 w-230 rounded-lg mt-3" />
        </div>

        <div className=" flex justify-center">
            <ul>
                <li className="mt-50"><NavBtn btName={recibirPedido}/></li>
                <li className="mt-5"><NavBtn btName={entregarPedido}/></li>
                <li className="mt-5"><NavBtn btName={buscarPedido}/></li>
                <li className="mt-5"><NavBtn btName={clientes}/></li>
                <li className="mt-5"><NavBtn btName={prendas}/></li>
                <li className="mt-5"><NavBtn btName={registros}/></li>
            </ul>
        </div>
    </div>
    );
}

export default NavTabs;
