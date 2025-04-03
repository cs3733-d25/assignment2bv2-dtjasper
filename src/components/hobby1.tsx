import List1 from './components/list1.tsx';
import Table1 from './components/table1.tsx';
import Form1 from './components/form1.tsx';

export default function Hobby1() {
    return (
        <html>
            <body>

            <nav>
                <ul>
                    <li><a href="https://magic.wizards.com/en">Official Main Website</a></li>
                    <li><a href="https://scryfall.com/">Search for Any Card</a></li>
                    <li><a href="https://moxfield.com/">Search for Player Created Decks</a></li>
                </ul>
            </nav>

            <img
                src="public/banner.png"
                alt="image"
                width="640"
                height="155"
            />

            <h1>
                Yael and his Magic: The Gathering Obsession
            </h1>

            <p>
                My name is Yael Whitson, a Robotics Engineering major at Worcester Polytechnic Institute. I am currently a
                junior,
                taking Software Engineering with Professor Wong.
            </p>

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
                (White is highlighted in gold because it's my favorite)
            </p>

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
            <br/><br/>

            <a href="public/styles.css">Want to see my CSS?</a>

            </body>
        </html>
        )
        }