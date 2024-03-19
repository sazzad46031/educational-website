

const SingleTestimonial = ({item}) => {
    
    return (
        <div className="pt-10 pb-20">
            <div className="relative shadow-lg shadow-slate-200">
                <p className="pl-16 pt-20 pb-36 pr-16 border text-[#20262C] text-xl font-medium">"{item?.comment}"</p>
                <img src="./public/icon-quote-blue.svg" alt="" className="w-[80px] absolute -top-5 left-14"/>
            </div>
        </div>
    );
};

export default SingleTestimonial;