import React, { useState } from "react";
import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <section className="navigation">
      <h1>Games Browser</h1>
      (<Link to="/">Back to browse</Link>)
    </section>
  );
};
