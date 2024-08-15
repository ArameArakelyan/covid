import { useEffect, useState } from "react"



function useCovid(CountryCode) {
    const [deaths,setDeaths] = useState(null)

    useEffect(()=>{
        if (CountryCode.length===2) {
            async function fetching() {
                const res = await fetch(`https://disease.sh/v3/covid-19/countries/${CountryCode}`)
                if (!res.ok) {
                   
                }
                const data = await res.json()
                setDeaths(`Total deaths: ${data.deaths}`)
            }
            fetching()
        } else if (CountryCode.length>0) {
            setDeaths("Enter Country Code with 2 letters")
        }
    },[CountryCode])
    return {deaths}
}

export default useCovid