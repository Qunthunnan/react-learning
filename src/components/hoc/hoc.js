export function Hello ({name}) {
    return (
        <h1>Hello {name}!</h1>
    )
}

export function withLog(BaseComponent, logic) {
    return (props) => {
        logic()

        return ( <BaseComponent {...props}/> )
    }
}

