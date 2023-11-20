import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import BackButton from "../BackButton";

function LoadingDetails() {
    return (
        <div className="w-full">
            <BackButton/>
            <div className='grid grid-cols-2 max-xl:grid-cols-1 gap-16'>
                <Skeleton height={"400px"} width={"100%"}/>

                <div className="flex flex-col justify-between py-4">
                    <Skeleton height={30} width={"300px"}/>

                    <div className="flex max-md:flex-col xl:justify-between gap-8 my-8">

                        <div className="flex flex-col gap-2">
                            <Skeleton height={30} width={"300px"}/>
                            <Skeleton height={30} width={"300px"}/>
                            <Skeleton height={30} width={"300px"}/>
                            <Skeleton height={30} width={"300px"}/>
                            <Skeleton height={30} width={"300px"}/>
                        </div>

                        <div className="flex flex-col gap-2">
                            <Skeleton height={30} width={"300px"}/>
                            <Skeleton height={30} width={"300px"}/>
                            <Skeleton height={30} width={"300px"}/>
                        </div>

                    </div>

                    <div className="flex max-md:flex-col gap-2">
                        <Skeleton height={30} width={"100px"}/>
                        <Skeleton height={30} width={"190px"}/>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default LoadingDetails;