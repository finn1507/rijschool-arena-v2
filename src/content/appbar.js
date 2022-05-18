import React from 'react';

const AppBar = () => {
    return (
    <div className='white shadow min-w-screen h-16'>
        <div className='flex justify-center'>
            <div className='text-2xl font-bold mt-4 mr-4 '>
                <a href='http://localhost:3000/'> 
                    Rijschool Arena
                </a>
            </div>
            <button className='mt-4 mr-4'>
                <h1 className='text-xl'>
                    Informatie
                </h1>
            </button>
            <button className='mt-4 mr-4'>
                <h1 className='text-xl'>
                    contact
                </h1>
            </button>
            <button className='mt-4 mr-4'>
                <h1 className='text-xl'>
                    Pakketten
                </h1>
            </button>
            <a href='https://www.cbr.nl/nl/mijncbr/u-staat-in-de-wachtrij.htm?orgurl=https%3A%2F%2Fwww.cbr.nl%2Fweb%2Fnl%2Fmijncbr%2Finloggen-op-mijn-cbr.htm%3Forgurl%3Dhttps%253A%252F%252Fwww.cbr.nl%252Fweb%252Fnl%252Fmijncbr.htm' className='mt-5 mr-4'>
                <h1 className='text-xl'>
                    Machtiging
                </h1>
            </a>
        </div>
    </div>
    )
}

export default AppBar;