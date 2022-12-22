import react from "react";
import CardWithContent from "./CardWithContent";
import redditIcon from "../../assets/reddit-logo.svg";
import vectorIcon from "../../assets/Vector.svg";

import "./CardWithContentContainer.css";

const CardWithContentContainer = () => {
  return (
    <>
      <div className="container">
        <CardWithContent
          title={"travel buddy"}
          subtitle={"book via travel app"}
          imageUrl={vectorIcon}
        />
        <CardWithContent
          title={"whatsapp"}
          subtitle={"book a ride via chat"}
          imageUrl={redditIcon}
        />
      </div>
    </>
  );
};

export default CardWithContentContainer;
