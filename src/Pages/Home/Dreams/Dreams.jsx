

const Dreams = () => {
    return (
        <div className="lg:flex lg:gap-20">
            <div className="bg-slate-100 pt-[6%] lg:w-[50%] relative">
                <div className="sticky top-48">
                    <img src="./public/icon-sparkles.svg" alt="" className="w-[66px] absolute pl-8 lg:left-[400px]"/>
                    <p className="text-[#20262C] text-4xl lg:text-7xl font-extrabold pl-20 pl-5 lg:pl-[480px] lg:pb-32">Dreams <br></br>deserve...</p>
                </div>
            </div>
            <div className="lg:w-[50%] pt-[6%] pl-8 pr-5 lg:pr-96">
                <h3 className="text-[#20262C] text-2xl lg:text-6xl font-light pb-10">Accessible and flexible PSI assessment programs built on decades of experience</h3>
                <p className="font-light text-xl text-[#64686C] pb-12">We have partnered with our clients for decades to deliver and grow their programs. And we apply our expertise, tried and tested science and the latest technology to our own PSI programs. Making dreams a reality with a <span className="underline text-[#1424A1] hover:text-[#9E0442]">High School Equivalency Test</span> (HiSET) for adult learners and <span className="underline text-[#1424A1] hover:text-[#9E0442]">Skills for English</span>, a qualification that enables speakers of other languages to demonstrate their knowledge of English language for a range of purposes, including work, study and settlement.</p>
                <img src="./public/image-comp.webp" alt="" className="pb-32"/>
            </div>
        </div>
    );
};

export default Dreams;