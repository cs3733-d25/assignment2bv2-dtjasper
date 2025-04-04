import '../App.css'
export default function Form2(){
    return (
        <>
            <form>
                <label htmlFor="fullname">Please Enter Your Full Name:</label>
                <input type="text" id="fullname"/>
                <br/> <br/>
                <p>Which fiber crafts do you do?</p>
                <input type="checkbox" id="crochet"/>
                <label htmlFor="crochet">Crochet</label>
                <br/>
                <input type="checkbox" id="knitting"/>
                <label htmlFor="knitting">Knit</label>
                <br/>
                <input type="checkbox" id="embroidery"/>
                <label htmlFor="embroidery">Embroidery</label>
                <br/>
                <input type="checkbox" id="crossstitch"/>
                <label htmlFor="crossstitch">Cross Stitch</label>
                <br/>
                <p>What is your favorite type of project to make?</p>
                <input type="radio" id="decor" name="projects"/>
                <label htmlFor="decor">Decor</label>
                <input type="radio" id="clothes" name="projects"/>
                <label htmlFor="clothes">Clothes</label>
                <input type="radio" id="animals" name="projects"/>
                <label htmlFor="animals">Stuffed Animals</label>
                <br/> <br/>
                <p>Select your favorite thing I have made!</p>
                <select>
                    <option value="dog">Stuffed Shark Toy</option>
                    <option value="shirt">Patchwork Shorts</option>
                    <option value="skirt">Eye Sweater</option>
                </select>
                <br/> <br/>
                <label htmlFor="comments">Comments</label>
                <textarea id="comments" rows={4} cols={50}>
    Put Comments Here!
  </textarea>
                <br/> <br/>
                <button type="submit">Submit</button>


            </form>
        </>
    )
}

