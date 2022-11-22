import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <ul
      class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <a
        class="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div class="sidebar-brand-icon rotate-n-15">
          <i class="fas fa-laugh-wink"></i>
        </div>
        <div class="sidebar-brand-text mx-3">Money Manager</div>
      </a>

      <hr class="sidebar-divider my-0" />

      <hr class="sidebar-divider" />

      <div class="sidebar-heading">Interface</div>

      <li class="nav-item">
        <Link
        to={"/portal/personal"}
          class="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i class="fas fa-fw fa-cog"></i>
          <span>Personal</span>
        </Link>
      </li>

      <li class="nav-item">
        <Link to={"/portal/business"}
          class="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseUtilities"
          aria-expanded="true"
          aria-controls="collapseUtilities"
        >
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span>Business</span>
        </Link>
      </li>

      <hr class="sidebar-divider" />
    </ul>
  );
}

export default Sidebar;
