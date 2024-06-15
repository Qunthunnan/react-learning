import { Consumer } from "../../App"

export function Context () {
    return (
        
            <Consumer>
                {
                    value => (
                        <>
                            <h2>Тест Context</h2>
                            <p>data context props: {value}</p>
                        </>
                    ) 
                }
            </Consumer>


       

    )
}