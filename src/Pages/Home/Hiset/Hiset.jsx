

const Hiset = () => {
    return (
        <div className="max-w-screen-lg mx-auto pt-[6%] pb-[6%]">
            <div className="flex gap-20">
                <div className="w-1/2">
                    <p><img src="./public/logo-hiset.webp" alt="" className="w-[154px]"/></p>
                    <h2 className="font-medium text-[2rem] pt-3">Fulfil potential with our leading High School Equivalency (HSE) test</h2>
                    <p className="font-light text-xl text-[#64686C] pb-3">HiSET offers an alternative to a US high school diploma, by enabling students to earn a state-issued high school equivalency (HSE) credential. Through HiSET, test takers demonstrate they have the knowledge and skills equivalent to a high school graduate – unlocking a variety of educational and career opportunities. HiSET covers the core areas of Reading, Writing, Mathematics, Science, and Social Studies. Flexible computer based testing is offered in a proctored test centre or at home with online proctoring.</p>
                    <p className="font-light text-xl text-[#64686C]">Learn more on our dedicated HiSET website:</p>
                    <p className="text-lg font-extrabold flex flex-row items-center text-[#1424A1] hover:text-[#9E0442] pt-6">HiSET for test takers <span className="pl-4"><i className="fa-solid fa-angle-right  rounded-full flex justify-center items-center w-[25px] h-[25px] bg-slate-200 hover:text-white hover:bg-[#9E0442]"></i></span></p>
                    <p className="text-lg font-extrabold flex flex-row items-center text-[#1424A1] hover:text-[#9E0442] pt-6">HiSET for test centres and educators <span className="pl-4"><i className="fa-solid fa-angle-right  rounded-full flex justify-center items-center w-[25px] h-[25px] bg-slate-200 hover:text-white hover:bg-[#9E0442]"></i></span></p>
                </div>
                <div className="w-1/2 pt-20">
                    <img src="./public/image1.jpg" alt="" className="w-[493px]"/>
                </div>
            </div>
        </div>
    );
};

export default Hiset;