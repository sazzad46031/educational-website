import './Banner.css';

const Banner = () => {
    return (
        <div className="bg-[url('./public/banner.webp')] px-8 bg-cover py-[6%] relative mt-[97px]">
            <div className='max-w-screen-lg mx-auto'>
            <div className="absolute h-full w-full top-0 left-0 opacity-80 overlay"></div>
            <div className='relative'>
                <p className="font-extralight text-xs lg:text-lg text-white pb-4"><span className="hover:text-[#9E0442] font-extrabold">Test Sponsors </span>/ PSI Programs</p>
                <h2 className="font-extrabold text-lg lg:text-7xl text-white pb-14">PSI programs</h2>
                <p className="text-white text-sm lg:text-2xl font-medium pb-16">We apply decades of experience to our own testing programs.</p>
            </div>
            </div>
        </div>
    );
};

export default Banner;