import React from "react";
import {Link} from "react-router-dom";

function CreateDeckButton() {
  return (
   <>
        <Link to="/decks/new" className="btn btn-success"><strong>+ Create Deck</strong></Link>
 </>
  )
}

export default CreateDeckButton;