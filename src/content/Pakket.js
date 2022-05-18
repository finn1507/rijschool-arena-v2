import {BiChevronRight} from 'react-icons/bi'

const Pakket = ({titel, uren}) => {
    return (
        <div>
            <div 
            className='container border-2 border-gray-800 rounded-md 
            w-60 h-48 border-dotted mt-10 ml-16'>
                <div>
                    <h1 className='text-2xl pl-3'>
                        {titel} 
                    </h1>
                </div>
                <div className='mt-4 ml-6'>
                    <div className='flex mt-2'>
                        <BiChevronRight className='mr-1'/>
                        <h1 className=''>
                            {uren} uur
                        </h1>
                    </div>
                    <div className='flex mt-2'>
                        <BiChevronRight className='mr-1'/>
                        <h1>
                            incl. Tussentijdse toets
                        </h1>
                    </div>
                    <div className='flex mt-2'>
                        <BiChevronRight className='mr-1'/>
                        <h1>
                            incl. Examen CBR
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pakket