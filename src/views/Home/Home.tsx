
import {useEffect, useMemo, useState} from "react";
import COUNTRIES_API from '../../api/countries.ts'
import CountryLists from "../../components/CountryLists";
import Forms from "./components/Forms.tsx";


function Home() {
    const [countriesLoading, setCountriesLoading] = useState<string>("idle")
    const [countries, setCountries] = useState<[]>([])

    //Search & region filtering
    const [region, setRegion] = useState<string>("all")
    const [searchTerm, setSearchTerm] = useState<string>("")

    // Fetch countries data
    useEffect(() => {
        const ApiCall = async () => {
            let fetchedData
            try {
                fetchedData = region === "all" ? await COUNTRIES_API.all() : await COUNTRIES_API.getByRegion(region)
                setCountriesLoading("successful")
            } catch (e) {
                setCountriesLoading("rejected")
            }

            if (countriesLoading === "successful") {
                setCountries(fetchedData)
            }

            if (countriesLoading === "rejected") {
                setCountries([])
            }
        }
        ApiCall()

    }, [region, countriesLoading]);

    // Filtered or Unfiltered data result
    const countriesState: any = useMemo(() => {
        return !searchTerm ? countries : countries.filter(({name: {common: commonName}}: {
                name: {
                    common: string
                }
            }) => commonName.toLowerCase().startsWith(searchTerm)
        )
    }, [searchTerm, countries])

    return (
        <>
             <Forms searchTerm={searchTerm} setSearchTerm={setSearchTerm} setRegion={setRegion}/>
            <CountryLists countriesLoading={countriesLoading} countriesState={countriesState}/>
        </>
    );
}

export default Home;