import React from 'react'

interface Props {
    name: string
    height: number
}

const Header: React.FunctionComponent<Props> = ({ name, height }: Props) => {
    return (
        <div style={{ width: `${height}px`, background: 'white' }}>{name}</div>
    )
}

export default Header
