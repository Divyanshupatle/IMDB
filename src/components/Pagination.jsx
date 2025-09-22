export default function Pagination({nextPage, prevPage, pageNo}){
    return(
        <div className="flex bg-gray-400 w-full items-center justify-center h-[50px]">
            <div className="px-8" onClick={prevPage}><i class="fa-solid fa-arrow-left"></i></div>
            <div>{pageNo}</div>
            <div className="px-8" onClick={nextPage}><i class="fa-solid fa-arrow-right"></i></div>
        </div>
    )
}