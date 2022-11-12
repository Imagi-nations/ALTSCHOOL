
import { Textfit } from "react-textfit"
import "./Home.css"
function Home ({ value }){
  return (
    <Textfit className="home" mode="single" max={70}>
      {value}
   </Textfit>
  );
};

export default Home;
