import React from "react";
import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/productos" activeStyle>
            Productos
          </NavLink>
          <NavLink to="/promociones" activStyle>
            Promociones
          </NavLink>
          <NavLink to="/envios" activeStyle>
            Envios
          </NavLink>
          <NavLink to="contacto" activeStyle>
            Contacto
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="contacto">Conectarse</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
