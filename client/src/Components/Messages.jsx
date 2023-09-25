export function Messages ({messages, nickname ='Yo'}) {

    return(
        <>
            {
                messages.map((message, index) => {
                    return (
                        <div key={index} className={`d-flex p-3 ${message.from === nickname? 'justify-content-end': 'justify-content-start'}`}>
                            <div className={`card mb-3 border-1 ${message.from === nickname? 'bg-success bg-opacity-25': 'bg-light' }`}>
                                <div className='card-body'>
                                { nickname != 'Yo'
                                    ? <small className='text-muted'>{message.from}: {message.messages}</small>
                                    : <small className=''>{message.from}: {message.body}</small>
                                }
                                </div>  
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}