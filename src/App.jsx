import { useState } from 'react'
import './App.css'
import Cart from './Components/Cart/Cart'
import FormList from './Components/Form/Form'
import { useQuery } from 'react-query'
import { http } from '../api'
import { SvgSpinners3DotsBounce, SvgSpinnersBarsScaleFade, SvgSpinnersBlocksShuffle2 } from './Components/spinner/spinner'

function App() {
  const [searchValue,setSearchValue]=useState("")
  const [searchBtn,setSearchBtn]=useState("")
  const [pageCounter,setPageCounter]=useState(1)
  // Fetch cart & Search
  async function getCart(){
    const response = await http.get(`/users?firstName_like=${searchBtn}&_page=${pageCounter}&_limit=4`)
    return response
  }
  const {data,isLoading}=useQuery({queryKey:["carts",searchBtn,pageCounter],queryFn:getCart})
  // Paginate
  async function nextBtn(){
    const limit=4
    const totalItems= await data.headers.get("X-Total-Count")
    const totalPage= Math.ceil(totalItems/limit)
    if(pageCounter < totalPage){
      setPageCounter(pageCounter+1)}
    }
  function prevBtn(){pageCounter > 1 ? setPageCounter(pageCounter-1):""}
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
        {data.data?.map(item=><Cart key={item.id} detailUser={item} />)}
      </div>}
      <div className='bottom-0 fixed flex justify-center items-center h-16 w-48 rounded-tl-2xl rounded-tr-2xl gap-4 bg-gradient-to-b to-red-400 from-red-900 drop-shadow-lg'>
        <button onClick={nextBtn} className='text-3xl text-white/40 transition-all delay-100 hover:text-white'><i className="fa-solid fa-caret-right "></i></button>
        <p className='text-white font-bold text-2xl'>{pageCounter}</p>
        <button onClick={prevBtn} className='text-3xl text-white/40 transition-all delay-100 hover:text-white'><i className="fa-solid fa-caret-left"></i></button>
      </div>
    </div>
  )
}

export default App
