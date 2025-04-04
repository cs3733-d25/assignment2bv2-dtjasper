import List1 from './list1.tsx';
import Table1 from './table1.tsx';
import Form1 from './form1.tsx';

export default function Hobby1() {
    return (
        <>

            <img
                src="src/assets/banner.jpg"
                alt="image"

            />

            <h1>
                Yael and his Magic: The Gathering Obsession
            </h1>


            <p>
                One of my biggest (and admittedly, most expensive) hobbies is Magic: The Gathering, a trading card game
                where
                players can collect cards and use them to build decks to play against each other. I appreciate the wide
                variety of
                different strategies you can employ with such a modular and player-oriented set of rules.
            </p>

            <p>
                While I won't get into the complexity of the main game's rules here, perhaps the easiest path to
                understanding M:TG
                is through a short introduction of its colors. Almost every card is a combination of these five colors:
            </p>

            <List1 />


            <p>
                See, every color in MTG has a certain archetype which defines its playstyle in the game. Different
                combinations of
                colors yield different ways to play.
            </p>

            <Table1 />

            <br/><br/>
            <hr/>

            <Form1 />

            <br/><br/>

            <hr/>
        </>
        )
        }