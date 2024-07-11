import React,{createContext, useContext,useEffect,useState} from "react";

const ThemeContext=React.createContext();

const THEME = {
    dark:"dark",
    light:"light"
}

const ThemeContextProvider=(props)=>{

    const [theme, setTheme] = useState();
    const toggleTheme = () => {
        onThemeChange(theme!==THEME.dark);
    }

    const onThemeChange =(isDarkMode) => {
        if (isDarkMode){
            setTheme(THEME.dark);
            document.querySelector('html').setAttribute('data-theme',THEME.dark)
        }
        else{
            setTheme(THEME.light)
            document.querySelector('html').setAttribute('data-theme',THEME.light)
        }
    }
    useEffect(()=>{
        const isThemePreferenceDarkMode = window.matchMedia("(prefers-color-scheme:dark)").matches;

        onThemeChange(isThemePreferenceDarkMode);

        console.log(theme);
    },[])


    return (

        <ThemeContext.Provider {...props} value={{theme,toggleTheme}} />
    );
}

export const useTheme=()=> useContext(ThemeContext);

export default ThemeContextProvider;