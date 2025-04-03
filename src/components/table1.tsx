export default function Table1() {
    return(
        <table
            id="collapse"
        >
            <caption id="caption">
                TABLE CAPTION
            </caption>
            <tbody>
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
            </tbody>
        </table>
    )
}