const Footer = () => {
    return (
        <div className='min-w-screen text-white bg-gray-700 h-36'>
            <div className='flex justify-center'>
                <div>
                    <h1 className='text-lg ml-16 pt-4 mb-4'>
                        CONTACT
                    </h1>
                    <h1 className='ml-16 text-sm mb-2'>
                        Rijschool Arena
                    </h1>
                    <h1 className='ml-16 text-sm mb-2'>
                        Arena@gmail.com
                    </h1>
                    <h1 className='ml-16 text-sm'>
                        06 24606514
                    </h1>
                </div>

                <div className='ml-36'>
                    <h1 className='text-lg pt-4 mb-4'>
                        ADRESGEGEVENS
                    </h1>
                    <h1 className='text-sm mb-2'>
                        Iraklia 13
                    </h1>
                    <h1 className='text-sm mb-2'>
                        Hoofddorp
                    </h1>
                    <h1 className='text-sm'>
                        2134AN
                    </h1>
                </div>

                <div className='ml-36'>
                    <h1 className='text-lg pt-4'>
                        ALGEMENE INFORMATIE
                    </h1>
                    <div>
                        <button>
                            <h1 className='text-sm'>
                                Cookies →
                            </h1>
                        </button>
                    </div>
                    <div>
                        <button>
                            <h1 className='text-sm'>
                                Privacyverklaring →  
                            </h1>
                    </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;