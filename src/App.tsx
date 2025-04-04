import './App.css';
import {Intro} from "./components/intro";
import {Hobby2App} from "./components/hobby2.tsx";

function App() {
  const yael = "Yael Whitson"
  const delia = "Delia Jasper"

  return (
      <div>
        <Intro name1={yael} name2={delia} />
        <Hobby2App/>
      </div>


  )
}

export default App
