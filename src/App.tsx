import './App.css'
import Intro from "./components/intro.tsx";
import Hobby1 from './components/hobby1.tsx';
import Title from './components/title.tsx';
import Hobby2App from './components/hobby2.tsx';

function App() {
    const yael = "Yael Whitson"
    const delia = "Delia Jasper"

  return (
    <div>
        <Title/>
        <Intro name1={yael} name2={delia} />
        <Hobby1/>
        <Hobby2App/>
    </div>
  )
}

export default App
