import { useContext, useState } from "react"
import { RootContext } from "../../Context/RootContextProvider"
import { useMutation, useQueryClient } from "react-query"
import { http } from "../../../api"
import { SvgSpinnersBarsRotateFade, SvgSpinnersBlocksShuffle2 } from "../spinner/spinner"


export default function Cart({detailUser}) {
  const contextData = useContext(RootContext)
  const [showModal,setShowModal] = useState(true)
  // function deleteUser(){
  //   let deletedUser = contextData.contextState.filter(item=>item.id !== detailUser.id)
  //   contextData.setContextState(deletedUser)
  // }

  const queryClient=useQueryClient()
  async function deleteCart(id){
    const response = await http.delete(`/users/${id}`)
  } 

  const {mutate,isLoading}=useMutation({
    mutationFn:deleteCart,
    onSuccess:()=>queryClient.invalidateQueries({queryKey:"carts"})
  })



  return (
    <>
    {showModal ? <div id={detailUser.id} className="flex gap-5 justify-between bg-gradient-to-r from-red-500 to-orange-500 rounded-lg p-4 text-white drop-shadow-lg">
      <div className="flex flex-col gap-2 items-start">
        <p className="font-bold text-xl">{`${detailUser.firstName} ${detailUser.lastName}`}</p>
        <p>{detailUser.phoneNumber}</p>
        <p>{detailUser.kinship}</p>
        <p className="text-xs">{detailUser.email}</p>
      </div>
    <div className="flex items-start gap-2">
        {contextData.editMode ? <div><SvgSpinnersBlocksShuffle2/></div> : <button onClick={()=>setShowModal(false)}><i className="fa-regular fa-trash-can"></i></button>}
        {contextData.editMode ? <div><SvgSpinnersBlocksShuffle2/></div> : <button onClick={()=>contextData.setEditMode({...detailUser,id:detailUser.id})}><i className="fa-regular fa-pen-to-square"></i></button>}
    </div>
    </div>
     :
     isLoading ?
     <div className="flex flex-col items-center justify-center gap-6 rounded-lg bg-white p-4">
     <SvgSpinnersBarsRotateFade/>
     </div>
     : 
     <div className="flex flex-col items-center justify-center gap-6 rounded-lg bg-white p-4">
      <p dir="ltr">Do you want delete this contact ?</p>
      <div className="flex gap-2 justify-center">
      <button onClick={()=>mutate(detailUser.id)} className="py-1 px-3 bg-red-500 rounded-xl text-white hover:bg-red-700 transition-all delay-75">Yes</button>
      <button onClick={()=>setShowModal(true)} className="py-1 px-3 bg-green-500 rounded-xl text-white hover:bg-green-700 transition-all delay-75">Cancel</button>
      </div>
    </div>
    }
    </>
  )
}
