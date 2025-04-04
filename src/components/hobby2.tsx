import '../App.css'
import Table2 from './table2.tsx'
import List2 from './list2.tsx'
import Form2 from "./form2.tsx";

export default function Hobby2App(){
    return(
        <>
            <h1>Crochet - Delia Jasper</h1>

            <img src="src/assets/crochet.jpg" width="600" alt="Crochet - Delia Jasper"/>

            <p className="intro">Crochet is a craft done with yarn and one hook. The panels are made by looping the yarn
                onto itself with the hook.
                It can be used to create many things, such as clothing items, decor, accessories, toys, and even
                tapestry. Fun Fact: Crochet uses more
                yarn than knitting!</p>

            <List2/>
            <Table2/>
            <br/>
            <h3>Q&A Form!</h3>
            <Form2/>
        </>
    )
}

