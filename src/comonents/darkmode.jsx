import { createContext, useState } from "react";

const DarkModeContext = createContext()

function DarkModeProvider(props) {
    const [isDark, setIsDark] = useState(false)
    function darkMode() {
        setIsDark(!isDark)
    }
    return(
        <div>
            <DarkModeContext.Provider value={{isDark,darkMode}}>
                {props.children}
            </DarkModeContext.Provider>
        </div>
    )
}

export {DarkModeContext, DarkModeProvider}