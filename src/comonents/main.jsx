import React, { useContext, useEffect, useState } from "react";
import useCovid from "./useCovid";
import { DarkModeContext } from "./darkmode";

function Main() {
    const [value,setValue] = useState("")
    const {deaths} = useCovid(value)
    const {isDark, darkMode} = useContext(DarkModeContext)
    return(
        <main style={{background:isDark?"black":"white"}}>
            <button onClick={darkMode}>{isDark?"Light":"Dark"}</button>
            <h1 style={{color:isDark?"white":"black"}}>Covid-19 results</h1>
            <form action="">
            <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} />
            </form>
            <h2 style={{color:isDark?"white":"black"}}>{deaths}</h2>
        </main>
    )
}

export default Main