import React, { useState } from "react";
import RecibirPedido from "../scenes/recibirPedido"
import EntregarPedido from "../scenes/entregarPedido"
import BuscarPedido from "../scenes/buscarPedido"
import Clientes from "../scenes/clientes"
import Prendas from "../scenes/prendas"
import Registros from "../scenes/registros"
import NavTabs from "./index"
import LogoSceen from "../scenes/logoScreen";

export default function MainContainer() {
  const [currentPage, setCurrentPage] = useState("");


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
        return <LogoSceen />;
    }
  };

  const pageSetter = (page) => setCurrentPage(page);

  return (
    <div className="h-screen w-screen overflow-hidden">
      {/* passing props to child NavTabs */}
      <NavTabs currentPage={currentPage} pageSetter={pageSetter} />
      {renderPage()}
    </div>
  );
}
