import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import COUNTRIES_API from '../../api/countries.ts'
import BackButton from "../../components/BackButton";
import CountryContent from "./components/CountryContent.tsx";
import LoadingDetails from "../../components/LoadingDetails";

function Details() {
    const {id} = useParams()

    const [countryState, setCountryState] = useState(null)
    const [countryLoading, setCountryLoading] = useState<string>("idle")

    useEffect(() => {
        async function ApiCall() {
            let fetchedData
            try {
                if (id) {
                    fetchedData = await COUNTRIES_API.getByName(id)
                }
                setCountryLoading("successful")
            } catch (e) {
                setCountryLoading("rejected")
            }

            if (countryLoading === "successful") {
                setCountryState(fetchedData[0])
            }
            if (countryLoading === "rejected") {
                setCountryState(null)
            }
        }

        ApiCall();
    }, [countryLoading, id]);


    return (
        <div className="px-4 py-8 w-full">
            {
                countryLoading === "idle" ? (
                    <LoadingDetails/>
                ) : countryLoading === "successful" && countryState && (
                    <>
                        <BackButton/>
                        <CountryContent countryState={countryState}/>
                    </>
                )
            }
        </div>

    )

}

export default Details;