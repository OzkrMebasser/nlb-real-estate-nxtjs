"use client";
import { createContext, useContext } from "react";
// import dataQuestions from "../backend/dataQuestions.json"
import { questions } from "@/backend/dataQuestions";
//HAY QUE CAMBIAR A JS FILE


export const QuestionContext = createContext();


export const QuestionsProvider = ({ children }) => {

  return (
    <QuestionContext.Provider value={{ questions }}>
      {children}
    </QuestionContext.Provider>
  );
};

// Make useUserContext Hook to easily use our context throughout the application
export function useQuestions() {
  const context = useContext(QuestionContext);
  if (!context)
    throw new Error(
      `No se encontro el context, necesita usar dentro del provider`
    );

  return context;
}
