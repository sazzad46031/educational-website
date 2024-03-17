import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Dreams from "../Dreams/Dreams";
import Hiset from "../Hiset/Hiset";
import Skill from "../Skill/Skill";




const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Dreams></Dreams>
            <Hiset></Hiset>
            <Skill></Skill>
            <Contact></Contact>
        </div>
    );
};

export default Home;