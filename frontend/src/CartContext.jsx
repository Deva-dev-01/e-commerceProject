
 export const CardData = createContext();



const CartContext = ({children}) => {
     const [data] = useState(params)
  console.log(data,"data")
  return (
  <CardData.Provider value={params} >
{children}

  </CardData.Provider>
  )
}

export default CartContext



