import {TicketsContextProvider} from "./TicketsContext"

const ContextWrapper = ({children}) => {
  return (
    <>
        <TicketsContextProvider>
            {children}
        </TicketsContextProvider>
    </>
  )
}

export default ContextWrapper