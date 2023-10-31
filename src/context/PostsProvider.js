"use client";
import { createContext, useContext } from "react";

import { posts } from "@/backend/dataBlogPosts";



export const PostContext = createContext();


export const PostsProvider = ({ children }) => {

  return (
    <PostContext.Provider value={{ posts }}>
      {children}
    </PostContext.Provider>
  );
};

// Make useUserContext Hook to easily use our context throughout the application
export function usePosts() {
  const context = useContext(PostContext);
  if (!context)
    throw new Error(
      `No se encontro el context, necesita usar dentro del provider`
    );

  return context;
}
