import '../App.css';


type NameProps = {
    name1: String;
    name2: String;
}

function Intro(props: NameProps) {
    return(
        <>
            <h1>Introductions!</h1>

            <h3>{props.name1}</h3>
            <p>My name is Yael Whitson, a Robotics Engineering major at Worcester Polytechnic Institute. I am currently a junior, taking Software Engineering with Professor Wong.</p>

            <h3>{props.name2}</h3>
            <p>My name is Delia, and I have been crocheting for about 5 years, since 2020 (covid hobby).
                I have made a lot of things including clothes, stuffed animals, and decor. I also started a little Instagram page for the things I make
                which is linked in the navigation. </p>



        </>
    )
}

export {Intro};