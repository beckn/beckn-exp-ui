import { createContext } from "react";
import { v4 as uuidv4 } from "uuid";

export const EventApiContext = createContext();

export const EventApiProvider = ({ children }) => {
  const expId = uuidv4();

  const postExpId = async () => {
    await fetch("https://api.experience.becknprotocol.io/v2/xc/experience", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify({
        experienceId: expId,
        experienceCenterId: "1",
        eventSourceAppId: "mobilityreferencebap-staging.becknprotocol.io",
        start_ts: Date.now(),
      }), // body data type must match "Content-Type" header
    })
      .then((response) => console.log(`Event Created with`, response))

      .catch((error) => console.log("error", error));
  };

  return (
    <EventApiContext.Provider value={{ expId, postExpId }}>
      {children}
    </EventApiContext.Provider>
  );
};
export default EventApiContext;
