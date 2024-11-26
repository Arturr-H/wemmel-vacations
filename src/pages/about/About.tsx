import React from "react";
import Cursor from "../../components/cursor/Cursor";
import "./styles.css";
import { ArrowLeft } from "lucide-react";

/* Interfaces */
interface Props {}
interface State {
    yPercent: number,
}

export class About extends React.PureComponent<Props, State> {
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
            <div className="container" style={{ overflowY: "scroll" }}>
                <button onClick={() => window.location.href = "/"} style={{ position: "fixed", top: "1rem", left: "1rem", background: "rgb(30, 25, 230)",
                    border: "none",
                    cursor: "pointer",
                    padding: "1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                }} id="cursor-remove">

                    <ArrowLeft size={"1.25rem"} id="cursor-remove" color="#fff" />
                </button>
                <Cursor />

                <p style={{ textAlign: "center", fontWeight: "bold", fontSize: "2rem" }}>
                    Om oss
                </p>
                <p style={{ width: "70%"}} >
                    Vi är WEMMEL Vacations och år 2006 gick vi sex vänner ihop med en gemensam dröm, att bilda vårt eget reseföretag med fokus på kundens välbefinnande. Vi blev snabbt en populär svensk resebyrå och har vårt huvudkontor i centrala Stockholm. Sedan vår start har vi expanderat till 100 anställda guide- och reseledare, som är utplacerade på alla våra resmål. 
                </p>
                <p style={{ width: "70%"}} >
                    Vi har även 20 anställda som är baserade i Stockholm och arbetar med ekonomi, kommunikation och försäljning. Vi som företag har valt att specialisera oss inom Europas gränser och säljer därför exklusiva resor till Europas guldkorn, som bland annat inkluderar franska rivieran, italienska västkusten och Spaniens omtyckta städer.
                </p>
                <p style={{ width: "70%"}} >
                    Under denna resa får ni resenärer möjligheten att lära känna alla grundarna till WEMMEL Vacations, som företagsnamnet även är inspirerat av. Med oss på denna resa har vi vår ekonomiansvarig William Halén, logistikansvarig Elvira Hofverberg, kommunikationsansvarig Mildred Holmberg, våra två guider Marco Mattsson Muriel och Erik Weck och slutligen jag, Linn Adolfsson som är destinationschef och även VD av företaget. Personligen har jag en stor passion för att vara ute i fältet och arbeta, därför försöker jag vara delaktig på så många resor jag kan. Tillsammans bildar vi grundstaplarna till vårt reseföretag och vi hoppas att vi ska kunna skapa en helt fantastisk vistelse under den här resan för er resenärer och med det välkomnar vi återigen er alla till den underbara spanska staden Málaga! 
                </p>
            </div>
        );
    }
}
