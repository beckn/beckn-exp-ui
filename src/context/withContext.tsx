import React , { useReducer,createContext} from 'react'

interface AppContextInterface {
    titleText: string;
    titleStyle: string;
  }

const sampleAppContext= [
   {
      titleText: "welcome to the beckn experience center",
      titleStyle: "mainTitle"
   },
   {
      titleText: "welcome to the beckn experience center",
      titleStyle: "secTitle"
   },
   {
      titleText: "what do you want to do?",
      titleStyle: "secTitle"
   },
   {
      titleText: "how would you like to book your ride?",
      titleStyle: "secTitle"
   },
];

// const len= sampleAppContext.length-1;
export const context=createContext<AppContextInterface>(sampleAppContext[0]);

const Withcontext = (props:any) => { 
   return (
      <context.Provider value={sampleAppContext[0]}>
         {props.children}
      </context.Provider>
   )
}

export default Withcontext;