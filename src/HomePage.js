import About from "./component/about";
import Photogrid from "./Photogrid";

const HomePage = () => {
    return (
        <div className="wrapper">
            <hr />
            <Photogrid />
            <About />
        </div>
    );
};

export default HomePage;
