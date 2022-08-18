import About from "./component/about";
import Photogrid from "./Photogrid";
import Details from "./component/Details";

const HomePage = () => {
    return (
        <div className="wrapper">
            <hr />
            <Photogrid />
            <About />
            <Details />
        </div>
    );
};

export default HomePage;
