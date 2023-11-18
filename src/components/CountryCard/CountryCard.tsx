
type Props = {
    countries: []
    key: string
}
function CountryCard({key, countries}: Props) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const {flags, name: { common: counrtyName }, population, region, capital} = countries

    return (
        <article key={key} className="bg-white rounded-md overflow-hidden shadow-md">

            <div aria-label="Flag image container">
                <img src={flags.png} alt={counrtyName} className="object-cover max-w-full h-48" />
            </div>

            <div aria-label="Country card info" className="py-8 px-4">
                <h1 className="text-2xl font-bold mb-4 ">{counrtyName}</h1>

                <div className="text-md">
                    <p className="mb-1"><span className="font-bold">Population</span>: {population}</p>
                    <p className="my-1"><span className="font-bold">Region</span>: {region}</p>
                    <p className="mt-1"><span className="font-bold">Capital</span>: {capital}</p>
                </div>
            </div>

        </article>
    );
}

export default CountryCard;