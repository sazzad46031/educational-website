

const SingleTestimonial = ({item}) => {
    
    return (
        <div>
            <p className="pl-8 pt-12 pb-28 pr-8 border text-[#20262C] text-xl font-medium">"{item?.comment}"</p>
        </div>
    );
};

export default SingleTestimonial;