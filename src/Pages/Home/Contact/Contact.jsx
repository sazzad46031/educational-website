

const Contact = () => {
    return (
        <div>
            <div className="max-w-screen-xl mx-auto my-36">
            <div className="bg-[url('./public/cta.jpg')] bg-cover pl-14 pt-40 pb-36">
                <p className="text-7xl font-extrabold text-white pb-6">We are here to help</p>
                <p className="text-2xl font-medium text-white pb-6">Put PSI’s secure testing solutions to work for you.</p>
                <button className="bg-[#1424A1] hover:bg-[#9E0442] mt-6 px-5 py-4 flex flex-row gap-10 rounded-md text-base font-extrabold items-center text-white">Contact Us<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none" className="text-yellow-500 hover:text-white w-[18px] h-[18px] flex flex-row"><path fillRule="evenodd" clipRule="evenodd" d="M27.1717 4H2.00015V0H34.0002V32H30.0002V6.82843L3.41436 33.4142L0.585938 30.5858L27.1717 4Z" fill="currentColor"></path></svg></button>
            </div>
            
        </div>
            <hr className="bg-[#64686C] h-[1px] border-0"></hr>
        </div>
    );
};

export default Contact;