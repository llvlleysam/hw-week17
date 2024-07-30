import { useContext, useState } from 'react'
import './App.css'
import Cart from './Components/Cart/Cart'
import FormList from './Components/Form/Form'
import { RootContext } from './Context/RootContextProvider'
import { useQuery } from 'react-query'
import { http } from '../api'
import axios from 'axios'
import { SvgSpinners3DotsBounce, SvgSpinnersBarsScaleFade, SvgSpinnersBlocksShuffle2 } from './Components/spinner/spinner'

function App() {
  // const contextData = useContext(RootContext)
  const [searchValue,setSearchValue]=useState("")
  const [searchBtn,setSearchBtn]=useState("")
  async function getCart(){
    const response = await http.get(`/users?firstName_like=${searchBtn}`)
    return response.data
  }
  const {data,isLoading}=useQuery({queryKey:["carts",searchBtn],queryFn:getCart})

  return (
    <div className='w-full h-screen flex flex-col items-center justify-center bg-gradient-to-r from-red-400 to-red-900 gap-4'>
      <div className='w-full flex flex-col items-center gap-4'>
      <FormList/>
      <div className='w-2/5 flex flex-row-reverse gap-2 bg-gradient-to-r to-red-400 from-red-900 rounded-2xl drop-shadow-lg p-4'>
        <input onChange={(e)=>setSearchValue(e.target.value)} className='py-2 rounded-lg drop-shadow-lg w-full border-black border-2' type="text" />
        <button onClick={()=>setSearchBtn(searchValue)} className='px-4 transition-all bg-purple-700 hover:bg-purple-500 text-white rounded-lg drop-shadow-lg'>{ isLoading && searchValue!=="" ? <SvgSpinners3DotsBounce/> :"جستجو"}</button>
      </div>
      </div>
      {isLoading ?<div><SvgSpinnersBarsScaleFade/></div> :<div className='w-full grid grid-cols-4 gap-4 p-4'>
        {data?.map(item=><Cart key={item.id} detailUser={item} />)}
      </div>}
    </div>
  )
}

export default App
