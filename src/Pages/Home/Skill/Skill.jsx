

const Skill = () => {
    return (
        <div className="lg:px-[440px] py-[6%] px-8 bg-slate-100">
            <div className="flex flex-col lg:flex-row lg:gap-28 lg:items-center">
                <div className="lg:w-1/2 order-2">
                    <img src="./public/skill.webp" alt="" className="w-[459px] pt-16 lg:pt-0"/>
                </div>
                <div className="lg:w-1/2 order-1">
                    <img src="./public/englishskill.webp" alt="" className="w-[209px]"/>
                    <p className="text-xl font-light text-[#64686C] pt-5">Skills for English is a suite of English language tests used for work, study and residency purposes – the result of a partnership between the Scottish Qualifications Authority (SQA) and PSI.</p>
                    <p className="text-xl font-light text-[#64686C] pt-5">Mapped to the Common European Framework of Reference (CEFR), Skills for English is widely accepted for international academic admissions. It is also used to demonstrate progression in English language proficiency and for career improvement purposes. The suite includes tests approved by the UK Home Office for visa and immigration applications.</p>
                    <p className="text-xl font-light text-[#64686C] pt-5">Easy to prepare for, highly accessible and delivered in a single session, the tests are available through our network of test centres in over 130 countries outside of the UK, as well as the option to test at home with online proctoring.</p>
                    <button className="bg-[#1424A1] hover:bg-[#9E0442] mt-6 px-5 py-4 flex flex-row gap-10 rounded-md text-base font-extrabold items-center text-white">Learn More<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none" className="text-yellow-500 hover:text-white w-[18px] h-[18px] flex flex-row"><path fillRule="evenodd" clipRule="evenodd" d="M27.1717 4H2.00015V0H34.0002V32H30.0002V6.82843L3.41436 33.4142L0.585938 30.5858L27.1717 4Z" fill="currentColor"></path></svg></button>
                </div>
            </div>
        </div>
    );
};

export default Skill;