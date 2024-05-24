"use client"

const Feedback = ()=>{
    return (
        <div className="w-full h-full flex justify-between items-center"  >
            <div className="xl:w-1/2 lg:w-1/2 h-full grid place-items-center">
                <section className="px-10 lg:pl-[20px] flex flex-col gap-5 text-[#1E1E1E]" >
                    <h1 className="text-3xl font-bold" >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                    <p className=" text-base font-medium" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia risus sem, nec elementum ligula suscipit sit amet. Praesent sit amet maximus augue, quis pulvinar lorem. Aliquam vitae augue at nunc elementum tempus a condimentum elit.</p>
                </section>
            </div>
            <div className="xl:w-1/2 lg:w-1/2 xl:ml-24 lg:ml-[120px] h-fit grid place-items-center">
                <section className="w-3/4 h-fit flex flex-col gap-10" >
                    <input type="text" placeholder="Email" className="w-full z-10 bg-transparent border-0 border-b-2 border-[#1E1E1E] placeholder-[#1E1E1E] outline-none text-[#1E1E1E]" />
                    <textarea placeholder="Comment here..." className=" w-full z-10 h-[200px] bg-transparent border-2 rounded-lg p-2 border-[#1E1E1E] placeholder-[#1E1E1E] outline-none text-[#1E1E1E]"></textarea>
                   <div className="w-full h-fit grid place-items-end" >
                   <button className="border-2 z-10 border-[#1E1E1E] hover:border-[#008DDA] hover:text-[#008DDA] text-[#1E1E1E] h-fit w-fit px-7 text-lg font-semibold rounded-full py-1" >Submit</button>
                   </div>
                </section>
            </div>
        </div>
    )
}

export default Feedback