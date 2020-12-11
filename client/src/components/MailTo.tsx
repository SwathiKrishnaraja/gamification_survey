import React from 'react'

type Props = {
    email: string,
    children: string
}
const MailTo: React.FC<Props> = ({ email, children }) => {
    return <a style={{ marginLeft: 3 }} href={`mailto:${email}`}><i>{children}</i></a>;
}



export default MailTo