import React, { useState } from "react";
import RecibirPedido from "../scenes/recibirPedido"
import EntregarPedido from "../scenes/entregarPedido"
import BuscarPedido from "../scenes/buscarPedido"
import Clientes from "../scenes/clientes"
import Prendas from "../scenes/prendas"
import Registros from "../scenes/registros"

export default function MainContainer() {
  const [currentPage, setCurrentPage] = useState("recibirPedido");


  const renderPage = () => {
    switch (currentPage) {
      case "recibirPedido":
        return <RecibirPedido />;
      case "entregarPedido":
        return <EntregarPedido />;
      case "buscarPedido":
        return <BuscarPedido />;
      case "clientes":
        return <Clientes />;
      case "prendas":
        return <Prendas />;
      case "registros":
        return <Registros />;
      default:
        break;
    }
  };

  const pageSetter = (page) => setCurrentPage(page);

  return (
    <div>
      {/* passing props to child NavTabs */}
      <NavTabs currentPage={currentPage} pageSetter={pageSetter} />

      {renderPage()}
      {/* {currentPage !== "AboutMe" ? <Footer /> : null} */}
    </div>
  );
}
