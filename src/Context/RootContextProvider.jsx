import { createContext, useState } from "react"

export const RootContext = createContext()

export default function RootContextProvider({children}) {
    const [contextState , setContextState] = useState([
        {
            id:1,
            firstName : "میثم",
            lastName : "فرزعلیان",
            kinship : "دوست",
            phoneNumber : "09192963164",
            email : "meysam.farzalia@gmail.com"
        },
        {
            id:2,
            firstName : "مینا",
            lastName : "اصفرلو",
            kinship : "فامیل",
            phoneNumber : "09121234567",
            email : "mina00@gmail.com"
        },
        {
            id:3,
            firstName : "مرجان",
            lastName : "جامشیر",
            kinship : "اعضا خانواده",
            phoneNumber : "09192589631",
            email : "marjan.32mk@gmail.com"
        },
        {
            id:4,
            firstName : "حامد",
            lastName : "قریشی",
            kinship : "همکار",
            phoneNumber : "09358974563",
            email : "hamed.34tt@gmail.com"
        },
        {
            id:5,
            firstName : "غلام",
            lastName : "عصرزاد",
            kinship : "همکار",
            phoneNumber : "09192963164",
            email : "gholam.exampel@gmail.com"
        },
    ])
    const [editMode,setEditMode]=useState(null)
  return (
    <div>
        <RootContext.Provider value={{contextState, setContextState,editMode,setEditMode}}>
            {children}
        </RootContext.Provider>
    </div>
  )
}
