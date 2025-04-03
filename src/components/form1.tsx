export default function Form1() {
    return (
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
    )
}