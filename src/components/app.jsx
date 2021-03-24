import React from "react";
import TopCards from "./TopCards";
import SingleCard from "./SingleCard";

function App() {
  return (
    <div>
      <TopCards />
      <SingleCard
        name="Fury Sliver"
        img="https://c1.scryfall.com/file/scryfall-cards/art_crop/front/0/0/00006596-1166-4a79-8443-ca9f82e6db4e.jpg?1562609251"
      />
    </div>
  );
}

export default App;
