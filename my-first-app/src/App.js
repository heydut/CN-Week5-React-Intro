import React from "react";
import "./App.css";
import images from "./imgs/index";

import Notice from "./components/Notice";
import Airbnb from "./components/Airbnb";
import Netflix from "./components/Netflix";

const App = () => {
  return (
    <div className="App">
      <div className="notice-app">
        <Notice
          image={images.pandemic}
          title="Don't think pandemic is over, Whitty warns"
          text="Unlocking too quickly would lead to a substantial surge in infection, UK chief medical adviser says."
          time="2h"
          tags="Health"
        />
        <Notice
          image={images.pay}
          title="Pay rise was set to be 2.1% - NHS Chief"
          text="NHS England boss backs ministers over pay dispute but does not rule out a one-off bonus for workers."
          time="1h"
          tags="UK Politics"
        />
        <Notice
          image={images.morgan}
          title="Charity criticises Morgan's comments about Meghan"
          text="Mental health charity Mind says it is 'disappointed' by comments Piers Morgan made on Monday."
          time="2h"
          tags="Entertainment & Arts"
        />
        <Notice
          image={images.unilever}
          title="Unilever drops word 'normal' from beauty products"
          text="The owner of Dove and Vaseline will remove the word from about 200 products in a push for inclusivity."
          time="10min"
          tags="Business"
        />
      </div>
      <div className="airbnb-app">
        <Airbnb image={images.airbnbHome} name="Entire homes" />
        <Airbnb image={images.airbnbUnique} name="Unique stays" />
        <Airbnb image={images.airbnbCabin} name="Cabins and cottages" />
        <Airbnb image={images.airbnbPets} name="Pets allowed" />
      </div>
      <div className="netflix-app">
        <Netflix image={images.netflixFate} />
        <Netflix image={images.netflixGambit} />
        <Netflix image={images.netflixOutside} />
        <Netflix image={images.netflixStarTrek} />
        <Netflix image={images.netflixWitcher} />
      </div>
    </div>
  );
};

export default App;
