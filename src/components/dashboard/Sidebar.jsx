import React from "react";

const Sidebar = () => {
  return (
    <nav class="mt-5 sidebar sidebar-offcanvas" id="sidebar">
      <div class="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
        <a
          class="sidebar-brand brand-logo text-light text-decoration-none"
          href="app/inicio"
        >
          Jattar
        </a>
        <a hidden class="sidebar-brand brand-logo-mini" href="app/inicio">
          <img src="assets/img/logo.png" alt="logo" />
        </a>
      </div>
      <ul class="nav mt-1">
        <li class="nav-item nav-category">
          <span class="nav-link text-light">Menú</span>
        </li>
        <li class="nav-item menu-items">
          <a class="nav-link" href="inicio">
            <span class="menu-icon">
              <i class="bx bx-home bx-md"></i>
            </span>
            <span class="menu-title">Inicio</span>
          </a>
        </li>
        <li class="nav-item menu-items">
          <a
            class="nav-link"
            data-bs-toggle="collapse"
            href="#ui-ventas"
            aria-expanded="false"
            aria-controls="ui-basic"
          >
            <span class="menu-icon">
              <i class="menu-icon tf-icons bi bi-building-down bx-md"></i>
            </span>
            <span class="menu-title">Ventas</span>
            <i class="menu-arrow"></i>
          </a>
          <div class="collapse" id="ui-ventas">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                {" "}
                <a class="nav-link" href="vent/venta">
                  Nueva Venta
                </a>
              </li>
              <li class="nav-item">
                {" "}
                <a class="nav-link" href="cxc/cuentas_cobrar">
                  Cuentas por Cobrar
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li class="nav-item menu-items">
          <a
            class="nav-link"
            data-bs-toggle="collapse"
            href="#ui-com"
            aria-expanded="false"
            aria-controls="ui-basic"
          >
            <span class="menu-icon">
              <i class="menu-icon tf-icons bi bi-building-up bx-md"></i>
            </span>
            <span class="menu-title">Compras</span>
            <i class="menu-arrow"></i>
          </a>
          <div class="collapse" id="ui-com">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                {" "}
                <a class="nav-link" href="com/compra">
                  Nueva Compra
                </a>
              </li>
              <li class="nav-item">
                {" "}
                <a class="nav-link" href="cxp/cuentas_pagar">
                  Cuentas por Pagar
                </a>
              </li>
            </ul>
          </div>
        </li>

        <li class="nav-item menu-items">
          <a class="nav-link" href="rpt/reporte">
            <span class="menu-icon">
              <i class="bi bi-file-earmark-pdf bx-md"></i>
            </span>
            <span class="menu-title">Reportes</span>
          </a>
        </li>

        <li class="nav-item menu-items">
          <a class="nav-link" href="cot/cotizacion">
            <span class="menu-icon">
              <i class="menu-icon tf-icons bi bi-receipt bx-md"></i>
            </span>
            <span class="menu-title">Cotización</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
