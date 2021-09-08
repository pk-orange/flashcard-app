import React from "react";
import CreateDeckButton from './CreateDeckButton'

function Header() {
  return (
      <nav class="navbar navbar-light bg-dark text-light">
          <div class="container-fluid">
              <span class="navbar-text text-bold px-3 my-1 py-2 bg-light rounded text-dark border-info border">
                <strong>flashcard-app</strong>
              </span>
              <CreateDeckButton />
          </div>
      </nav>
  )
}

export default Header;
