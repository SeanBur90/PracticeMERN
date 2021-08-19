import React from "react";
import { Link } from "react-router-dom";

import { Button } from "@material-ui/core";

export default function Navbar() {
  return (
    <div>
      <Button component={Link} to="/">
        Home
      </Button>
      <Button component={Link} to="/library">
        Library
      </Button>
      <Button component={Link} to="/light">
        Light Example
      </Button>
    </div>
  );
}
