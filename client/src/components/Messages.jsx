import { PropTypes } from 'prop-types'

export function Messages ({messages, nickname ='Yo'}) {

    return(
        <>
            {
                messages.map((message, index) => {
                    return (
                        <div key={index} className={`messages ${message.from === nickname? 'my-message': 'other-message'}`}>
                                { nickname != 'Yo'
                                    ? <small>{message.from}: {message.messages}</small>
                                    : <small>{message.from}: {message.body}</small>
                                }
                        </div>
                    )
                })
            }
        </>
    )
}

Messages.propTypes = {
    messages: PropTypes.array.isRequired,
    nickname: PropTypes.string
}