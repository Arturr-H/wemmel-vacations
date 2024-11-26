import React from "react";
import Cursor from "../../components/cursor/Cursor";
import "./styles.css";
import f1 from "./f1.png";
import f2 from "./f2.jpg";
import f3 from "./f3.jpg";
import { Link } from "react-router-dom";

/* Interfaces */
interface Props {}
interface State {
    yPercent: number,
}

export class Index extends React.PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            yPercent: 0.5,
        }
    }

    /* Lifetime */
    async componentDidMount(): Promise<void> {
        document.addEventListener("mousemove", (e) => {
            this.setState({
                yPercent: e.clientY / window.innerHeight,
            })
        });
    }
    async componentWillUnmount(): Promise<void> {}

    /* Render */
    render(): React.ReactNode {
        return (
            <>
            <Cursor />
            <div className="container">
                <nav>
                    <Link id="cursor-remove" to={"/about"}>Om oss</Link>
                    <Link id="cursor-remove" to={"/sigma"}>Hjälp</Link>
                    <div style={{ flex: 1}} />
                    <Link id="cursor-remove" to={"/sigma"}>Skapa konto</Link>
                </nav>

                <h1>WEMMEL Vacations</h1>

                <div className="piccont">
                    <div className="pic3" onClick={() => window.location.href = "/malaga"}>
                        <img src={f1} alt="f1" style={{ objectPosition: `center ${this.state.yPercent * 100}%` }} />
                        <p>Málaga</p>
                    </div>
                    <div className="pic2">
                        <img src={f2} alt="f2" style={{ objectPosition: `center ${this.state.yPercent * 100}%` }} />
                        <p>New York</p>
                    </div>
                    <div className="pic1">
                        <img src={f3} alt="f3" style={{ objectPosition: `center ${this.state.yPercent * 100}%` }} />
                        <p>Andalucia</p>
                    </div>
                </div>
                {/* <p style={{ textAlign: "center", fontWeight: "bold" }}>
                    ¡Buenos días y bienvenidos a Málaga a todos los viajeros incredíbles! 
                </p>
                <p>
                    Vi är WEMMEL Vacations och år 2006 gick vi sex vänner ihop med en gemensam dröm, att bilda vårt eget reseföretag med fokus på kundens välbefinnande. Vi blev snabbt en populär svensk resebyrå och har vårt huvudkontor i centrala Stockholm. Sedan vår start har vi expanderat till 100 anställda guide- och reseledare, som är utplacerade på alla våra resmål. Vi har även 20 anställda som är baserade i Stockholm och arbetar med ekonomi, kommunikation och försäljning. Vi som företag har valt att specialisera oss inom Europas gränser och säljer därför exklusiva resor till Europas guldkorn, som bland annat inkluderar franska rivieran, italienska västkusten och Spaniens omtyckta städer. Under denna resa får ni resenärer möjligheten att lära känna alla grundarna till WEMMEL Vacations, som företagsnamnet även är inspirerat av. Med oss på denna resa har vi vår ekonomiansvarig William Halén, logistikansvarig Elvira Hofverberg, kommunikationsansvarig Mildred Holmberg, våra två guider Marco Mattsson Muriel och Erik Weck och slutligen jag, Linn Adolfsson som är destinationschef och även VD av företaget. Personligen har jag en stor passion för att vara ute i fältet och arbeta, därför försöker jag vara delaktig på så många resor jag kan. Tillsammans bildar vi grundstaplarna till vårt reseföretag och vi hoppas att vi ska kunna skapa en helt fantastisk vistelse under den här resan för er resenärer och med det välkomnar vi återigen er alla till den underbara spanska staden Málaga! 
                </p> */}
            </div>
            </>
        );
    }
}
