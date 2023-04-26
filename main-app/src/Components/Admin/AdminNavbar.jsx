import React from "react";
import "./Admin.css";
import { Avatar, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import iconGrab from "../../Assets/iconGrab.png"

function AdminNavbar() {
  return (
    <div className="AdminNavbar" style={{ marginBottom: "30px" }}>
      <div>
        <h1>
          <Link to="/">
            <img
              style={{ height: "30px", cursor: "pointer" }}
              src={iconGrab}
              alt=""
            />
          </Link>
        </h1>
      </div>

      <div>
        <h1>Admin's Page</h1>
      </div>

      <Stack direction="row">
        <Avatar
          name="Nitin Jambal"
          src="https://bit.ly/broken-link"
          cursor={"pointer"}
        />
      </Stack>
    </div>
  );
}

export default AdminNavbar;
