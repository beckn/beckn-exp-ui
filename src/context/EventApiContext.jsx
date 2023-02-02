import { createContext } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

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

  const updateExpId = async (text) => {
    await fetch("https://api.experience.becknprotocol.io/v2/xc/experience", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify({
        experienceId: localStorage.getItem("expId"),
        end_ts: Date.now(),
        experienceFeedback: {
          user_review: "N",
          user_comment: text,
        },
      }),
    })
      .then((response) => response)

      .catch((error) => console.log("error", error));
  };

  const getEvent = async () => {
    try {
      const res = await axios.get(
        `https://api.experience.becknprotocol.io/v2/event/${localStorage.getItem(
          "expId"
        )}`
      );
      return res.data;
    } catch (error) {
      return error;
    }
  };

  return (
    <EventApiContext.Provider
      value={{ expId, postExpId, updateExpId, getEvent }}
    >
      {children}
    </EventApiContext.Provider>
  );
};
export default EventApiContext;
