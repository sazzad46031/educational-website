import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Dreams from "../Dreams/Dreams";
import Hiset from "../Hiset/Hiset";
import Skill from "../Skill/Skill";
import Testimonial from "../Testimonial/Testimonial";




const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Dreams></Dreams>
            <Testimonial></Testimonial>
            <Hiset></Hiset>
            <Skill></Skill>
            {/* <Contact></Contact> */}
        </div>
    );
};

export default Home;