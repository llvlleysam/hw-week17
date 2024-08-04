
export default function SkeletonCard() {
  return (
    
      <div className="flex col-span-4 md:col-span-2 lg:col-span-1 gap-5 justify-between bg-gray-200 rounded-lg p-4 text-white drop-shadow-lg">
      <div className="flex flex-col w-4/5 gap-2 items-start">
        <div className="bg-gray-400 animate-pulse rounded-md w-full h-4"></div>
        <div className="bg-gray-400 animate-pulse rounded-md w-full h-5"></div>
        <div className="bg-gray-400 animate-pulse rounded-md w-full h-5"></div>
        <div className="bg-gray-400 animate-pulse rounded-md w-full h-5"></div>
      </div>
    <div className="flex items-start gap-2">
          <button className="bg-gray-400 animate-pulse rounded-md w-4 h-4"></button>
          <button className="bg-gray-400 animate-pulse rounded-md w-4 h-4"></button>
    </div>
    </div>
  
  )
}
