import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs() {
  const location = useLocation();

  const pathnames = location.pathname.split("/").filter(x => x);

  return (
    <nav style={{ padding: "10px 20px" }}>
      <ol style={{ display: "flex", gap: "8px" }}>
        <li>
          <Link to="/">Home</Link>
        </li>

        {pathnames.map((value, index) => {
          // incremental path
          const to = "/" + pathnames.slice(0, index + 1).join("/");

          return (
            <li key={to} style={{ display: "flex", gap: "8px" }}>
              <span>/</span>
              <Link to={to} style={{ textTransform: "capitalize" }}>
                {value}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
