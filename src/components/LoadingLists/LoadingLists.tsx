import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function LoadingLists() {
    const skeleton: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    return skeleton.map(item =>
        <div key={item} className="flex flex-col bg-white rounded-md overflow-hidden shadow-md">
            <Skeleton direction={"ltr"} borderRadius={"4px"} count={1} height={150} width={"100%"}/>
            <ul className="px-4 py-8 flex flex-col gap-4">
                <li>
                    <Skeleton direction={"ltr"} borderRadius={"14x"} height={25}/>
                </li>
                <li>
                    <Skeleton direction={"ltr"} borderRadius={"4px"} height={25}/>
                </li>
                <li>
                    <Skeleton direction={"ltr"} borderRadius={"4px"} height={25}/>
                </li>
                <li>
                    <Skeleton direction={"ltr"} borderRadius={"4px"}  height={25}/>
                </li>
            </ul>
        </div>
    )
}

export default LoadingLists;