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

            <ol>
                <li id="firstitem">White</li>
                <li>Blue</li>
                <li>Black</li>
                <li>Red</li>
                <li>Green</li>
            </ol>

            <p>
                (White is highlighted in gold because it's my favorite)
            </p>

            <p>
                See, every color in MTG has a certain archetype which defines its playstyle in the game. Different
                combinations of
                colors yield different ways to play.
            </p>

            <table
                id="collapse"
            >
                <caption id="caption">
                    TABLE CAPTION
                </caption>
                <tr>

                    <th></th>
                    <th>Abbreviation</th>
                    <th>Archetype</th>
                    <th>Playstyle</th>
                </tr>
                <tr>

                    <td><b>White</b></td>
                    <td>W</td>
                    <td>Life, Light, Order</td>
                    <td>Often very safe. Focused less <br/>on winning and more on not <br/>losing.</td>
                </tr>
                <tr>

                    <td><b>Blue</b></td>
                    <td>U</td>
                    <td>Deception, Intelligence, Control</td>
                    <td>Intended for players who <br/>want to win through their wits <br/>and planning rather than <br/>traditional
                        brute force.
                    </td>
                </tr>
                <tr>

                    <td><b>Black</b></td>
                    <td>B</td>
                    <td>Death, Decay, Power</td>
                    <td>Usually used by players who <br/>like to further explore <br/>fundamental mechanics of the <br/>game
                        and flip them on their <br/>heads. Nothing is sacred.
                    </td>
                </tr>
                <tr>

                    <td><b>Red</b></td>
                    <td>R</td>
                    <td>Aggression, Chaos</td>
                    <td>Used by players who don't <br/>want to give their opponents <br/>any breathing room. Red <br/>players
                        win quickly, or not at <br/>all.
                    </td>
                </tr>
                <tr>

                    <td><b>Green</b></td>
                    <td>G</td>
                    <td>Nature, Abundance, Strength</td>
                    <td>Green is a simple, <br/>but powerful color. If your <br/>opponent has power, Green <br/>has more. If
                        your opponent is <br/>big, Green is bigger. If your <br/>opponent has resources, Green <br/>has
                        more.
                    </td>
                </tr>
            </table>


            <br/><br/>
            <hr/>


            <form>

                <p>
                    While the game is entertaining enough, it's no secret that M:TG has its fair share of an economy
                    surrounding it.
                    Some cards are just more valuable than others, be they more strategically viable, more scarce, or just
                    cool
                    looking. This creates a natural supply and demand where players will frequently trade, buy and sell
                    cards with
                    each other.
                    each other.
                </p>

                <div className="dropdown">
                    <button className="dropbtn">Multiple Choice</button>
                    <div className="dropdown-content">
                        Choose one: <br/>
                        <label htmlFor="radio1">I will never spend money on Magic cards</label>
                        <input type="radio" id="radio1" name="radios"/>
                        <br/>
                        <label htmlFor="radio2">I do spend money on Magic cards</label>
                        <input type="radio" id="radio2" name="radios"/>
                        <br/>
                        <label htmlFor="radio3">I will spend money on Magic cards</label>
                        <input type="radio" id="radio3" name="radios"/>
                        <br/>
                        <label htmlFor="radio4">I spend too much money on Magic cards</label>
                        <input type="radio" id="radio4" name="radios"/>

                        <hr/>

                        Check all that apply:<br/>
                        <label htmlFor="box1">I trade cards to get better ones for play</label>
                        <input type="checkbox" id="box1"/> <br/>
                        <br/>
                        <label htmlFor="box2">I trade cards for money</label>
                        <input type="checkbox" id="box2"/> <br/>
                        <br/>
                        <label htmlFor="box3">I trade cards to collect</label>
                        <input type="checkbox" id="box3"/> <br/>
                    </div>
                </div>

                <br/><br/>

                <label htmlFor="text1">Name all, if any, trading card games you have heard of:<br/></label>
                <input type="text" id="text1"/>
                <br/><br/>

                <label htmlFor="text2">If you filled the above box in at all, list your favorite trading card of all time:<br/></label>
                <input type="text" id="text2"/>

                <br/><br/>

                <label htmlFor="textarea">Additional comments:</label>
                <textarea id="textarea">
        </textarea>

                <br/><br/>

                <input type="submit" value="Submit"/>
            </form>

            <br/><br/>
            <hr/>
            <br/><br/>

            <a href="public/styles.css">Want to see my CSS?</a>

            </body>
        </html>
        )
        }