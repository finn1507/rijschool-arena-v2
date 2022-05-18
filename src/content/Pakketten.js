import Pakket from './Pakket.js';


const Pakketten = () => {
    return (
        <div>
            <div className='min-w-screen bg-gray-200'>
                <div className=' mx-16 mt-8 py-8'>
                    <h1 className='font-bold text-2xl mb-2'>
                        Lespakketten
                    </h1>
                    <p>
                        Hier zijn alle lespakketten van rijschool Arena
                        te vinden. Ook zijn de kosten voor losse lessen hier te vinden.
                    </p>
                </div>
            </div>
            <div className='mx-16 mt-8'>
                <h1 className='text-2xl font-bold'>
                    Pakketen schakel 
                </h1>
            </div>
            <div className='flex justify-start pb-8'>
                <Pakket titel='Lespakket 1 €2000,-' uren='30'/>
                <Pakket titel='Lespakket 2 €2500,-' uren='45'/>
                <Pakket titel='Lespakket 3 €3000,-' uren='50'/>
            </div>
            <div className='px-16 pt-8 bg-gray-200'>
                <h1 className='text-2xl font-bold'>
                    Pakketen automaat
                </h1>
            </div>

            <div className='flex justify-start bg-gray-200 pb-8'>
                <Pakket titel='Lespakket 1 €2000,-' uren='30'/>
                <Pakket titel='Lespakket 2 €2500,-' uren='45'/>
                <Pakket titel='Lespakket 3 €3000,-' uren='50'/>
            </div>
            
        </div>
    )
}

export default Pakketten