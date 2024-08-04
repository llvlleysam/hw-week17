import { useContext, useState } from 'react'
import './App.css'
import Cart from './Components/Cart/Cart'
import FormList from './Components/Form/Form'
import { useQuery } from 'react-query'
import { http } from '../api'
import { SvgSpinners3DotsBounce, SvgSpinnersBarsScaleFade, SvgSpinnersBlocksShuffle2 } from './Components/spinner/spinner'
import SkeletonCard from './Skeleton/Skeleton-card'
import { RootContext } from './Context/RootContextProvider'

function App() {
  const [searchValue,setSearchValue]=useState("")
  const [searchBtn,setSearchBtn]=useState("")
  const [pageCounter,setPageCounter]=useState(1)
  const {theme, toggleTheme}=useContext(RootContext)
  console.log(theme)
  // Fetch cart & Search
  async function getCart(){
    const response = await http.get(`/users?firstName_like=${searchBtn}&_page=${pageCounter}&_limit=4`)
    return {data : response.data,
      paginate : response.headers.get("X-Total-Count")
    }
  }
  const {data,isLoading}=useQuery({queryKey:["carts",searchBtn,pageCounter],queryFn:getCart})
  // Paginate
  // function nextBtn(){
  //   const limit=4
  //   const totalItems= data.paginate
  //   const totalPage= Math.ceil(totalItems/limit)
  //   if(pageCounter < totalPage){
  //     setPageCounter(pageCounter+1)}
  //   }
  // function prevBtn(){pageCounter > 1 ? setPageCounter(pageCounter-1):""}
  const limit=4
  const totalItems=data?.paginate
  const totalPage= Math.ceil(totalItems/limit)
    function getPageNumbers(){
      const pages = []
      const maxPageToShow = 3
      const halfMaxPageToShow = Math.floor(maxPageToShow/2)
      if (totalPage <= maxPageToShow){
        for(let i = 1 ; i <= totalPage ; i++){pages.push(i)}
      }else{
        let startPage = Math.max(pageCounter - halfMaxPageToShow , 1)
        let endPage = Math.min(pageCounter + halfMaxPageToShow , totalPage)
        if(startPage === 1){endPage = maxPageToShow}
        if(endPage === totalPage){startPage=totalPage - maxPageToShow+1}
        for(let i = startPage ; i <= endPage ; i++){pages.push(i)}
        if(startPage > 1){
          pages.unshift("...")
          pages.unshift(1)
        }
        if(endPage < totalPage){
          pages.push("...")
          pages.push(totalPage)
        }
      }
      return pages
    }
     console.log(getPageNumbers())
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center bg-gradient-to-r from-red-400 to-red-900 gap-4'>
      <button onClick={toggleTheme} className='fixed top-0 bg-white dark:bg-black p-2 rounded-full'>{theme==="Dark"?"Light Mode" : "Dark Mode"}</button>
      <div className='w-full flex flex-col items-center gap-4'>
      <FormList/>
      <div className='w-4/5  md:w-4/5 lg:w-2/5 flex flex-row-reverse gap-2 bg-gradient-to-r to-red-400 from-red-900 rounded-2xl drop-shadow-lg p-4'>
        <input onChange={(e)=>setSearchValue(e.target.value)} className='py-2 rounded-lg drop-shadow-lg w-full border-black border-2' type="text" />
        <button onClick={()=>setSearchBtn(searchValue)} className='px-4 transition-all bg-purple-700 hover:bg-purple-500 text-white rounded-lg drop-shadow-lg'>{ isLoading && searchValue!=="" ? <SvgSpinners3DotsBounce/> :"جستجو"}</button>
      </div>
      </div>
      {isLoading ?<div className='w-full grid grid-cols-4 gap-4 p-4'>{Array.from({length:4}).map(index=><SkeletonCard key={index}/>)}</div> :<div className='w-full grid grid-cols-4 gap-4 p-4'>
        {data?.data.map(item=><Cart key={item.id} detailUser={item} />)}
      </div>}
      <div className='bottom-0 fixed flex justify-center items-center h-16 px-4 rounded-tl-2xl rounded-tr-2xl gap-4 bg-gradient-to-b to-red-400 from-red-900 drop-shadow-lg'>
        <button onClick={()=>setPageCounter(pageCounter-1)} disabled={pageCounter===1}  className='text-3xl text-white/40 transition-all delay-100 hover:text-white'><i className="fa-solid fa-caret-right "></i></button>
        <p className='text-white/50 font-bold text-2xl flex gap-2'>{getPageNumbers().map(page=><button className={pageCounter===page ? "text-white":""} onClick={()=> typeof page == "number" && setPageCounter(page)} disabled={typeof page !== "number"}>{page}</button>)}</p>
        <button onClick={()=>setPageCounter(pageCounter+1)} disabled={pageCounter===totalPage} className='text-3xl text-white/40 transition-all delay-100 hover:text-white'><i className="fa-solid fa-caret-left"></i></button>
      </div>
    </div>
  )
}

export default App
