import { createContext, useReducer } from "react";
  const ThemeContexttt = createContext();
 
 const initialData = { theme: localStorage.getItem("mttheme")=== null?"light":localStorage.getItem("mttheme")==="light"?"light":"dark" };
 const reducer = (firstState, action) => {
  switch (action.type) {
    case "CHANGE-THEME":
      return { ...firstState, theme: action.newValue };
    default:
      return firstState;
  }}
  
  export function ThemeProvider({ children }) {
    const [firstState, dispatch] = useReducer(reducer, initialData);
  const changeTheme = (newName) => {
    localStorage.setItem("mttheme", newName)
    dispatch({ type: "CHANGE-THEME", newValue: newName });
  }
    return (
       <ThemeContexttt.Provider value={{ ...firstState,changeTheme}}>
        {children}
       </ThemeContexttt.Provider>
    );
  }
  
  export default ThemeContexttt;