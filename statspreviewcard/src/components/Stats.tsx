interface prop{
    number: string,
    type: string
}

const Stats = (prop : prop) => {
    return(
        <div>
            <h2>{prop.number}</h2>
            <h2 style = {{color: "hsla(0, 0%, 100%, 0.6)"}}>{prop.type}</h2>
        </div>
    )
}

export default Stats