import React from "react";
import { Link } from "react-router-dom";

const Header = ({ token, setUser }) => {
  return (
    <div>
      <span>logo</span>
      <input type="text" />

      {token ? (
        <button
          onClick={() => {
            setUser(null);
          }}
        >
          Se déconnecter
        </button>
      ) : (
        <>
          <button>
            <Link to="/signup">S'inscrire</Link>
          </button>
          <button>
            <Link to="/login">se connecter</Link>
          </button>
        </>
      )}
      <button>
        <Link to="/publish">vends tes articles</Link>
      </button>
    </div>
  );
};

export default Header;
