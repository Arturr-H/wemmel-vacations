import React from "react";
import Cursor from "../../components/cursor/Cursor";
import "./styles.css";
import imggg from "../index/f1.png";
import { ActivitySquare, ArrowLeft, AtSign, Bus, Clock2Icon, Contact, EggFried, Hotel, LucideBadgeDollarSign, MapPin, Phone } from "lucide-react";

/* Interfaces */
interface Props {}
interface State {
    yPercent: number,
}

export class Malaga extends React.PureComponent<Props, State> {
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
            <><Cursor />
            <div className="container" style={{
                overflowY: "scroll",
                scrollbarWidth: "none",
            }}>
                <img src={imggg} className="malagaimg" />

                <div style={{
                    zIndex: 1,
                    display: "flex",
                    flexDirection: "column",
                    width: "70%",
                }}>
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
                    <h1>Malaga</h1>

                    <div className="title-row">
                        <Hotel size={"1.8rem"} />
                        <h2>Hotell</h2>
                    </div>
                    <p>Ni bor på hotellet H10 Croma Málaga
                        <br />
                        Hotellet ligger i den historiska stadskärnan, två kilometer från stranden och 500 meter från centrum. För er som älskar konst och galleri är det här hotellet perfekt eftersom det erbjuds en konstnärlig atmosfär i hela hotellet. Ni bor i två olika sorters rum, antingen i ett Superior-rum eller familjerum. I Superior-rummet är det antingen en King-size, Queen-size eller två enkelsängar medan i familjerummet finns det en King-size säng och en bäddsoffa. På rummen finns det badrock och tofflor, kosmetisk spegel, hårtork och Rituals miljövänliga duschartiklar. Det finns även gratis nespresso-maskin, gratis värdeskåp, skrivbord med stol, minibar (mot extra kostnad), Luftkonditionering, smart TV och telefon. Alla rummen har även tillgång till solterrassen och en takfläkt. Superior-rummen har också en möblerad terrass.   
                    </p>

                    <div className="title-row">
                        <EggFried size={"1.4rem"} />
                        <h4>Frukost</h4>
                    </div>
                    <p>
                        På hotellet erbjuds det frukost varje dag mellan klockan 07:00-11:00. Därefter finns det en restaurang du kan boka bord på för lunch och middag mellan klockan 13:00-23:00. Ifall du i stället är sugen på tapas kan du besöka La Mundial tapasbar som finns på hotellet, den är öppen klockan 08:30-17:00. Det erbjuds även en bar på taket mellan klockan 11:00-12:00 samt ända fram till klockan 01:00 på fredagar och lördagar. Därefter finns det en bar i lobbyn som är öppen klockan 11:00-23:00. 
                    </p>

                    <div className="title-row">
                        <ActivitySquare size={"1.4rem"} />
                        <h4>Hotellaktiviteter</h4>
                    </div>
                    <p>
                        På hotellet finns det även en inomhuspool och en utomhuspool som är öppna mellan klockan 08:00-21:00. Det finns ett gratis gym som är öppet mellan klockan 06:30-22:30 och en cykeluthyrning mot extra kostnad. Det finns även gratis WiFi på hela hotellet och tillgång till garage mot en extra kostnad.   
                    </p>

                    <hr />
                    <div className="title-row" style={{ marginBottom: "2rem" }}>
                        <Bus size={"2.8rem"} />
                        <h2 style={{ fontSize: "3rem"}}>Utflykter</h2>
                    </div>


                    <div className="title-row">
                        <MapPin size={"1.8rem"} />
                        <h2>Gibraltar</h2>
                    </div>
                    <p>
                        Trots att det vackra Málaga erbjuder nästan obegränsat turistande, har vi valt att åka på lite utflykter under de kommande dagarna. Först kommer vi åka på utflykt till Gibraltar, där vi både kommer få se delfiner och ha tid att utforska stadskärnan på egen hand. Resan är bokad via tripadvisor14 och mer information finns på utflyktssidan15 på deras hemsida, självklart även på vår anslagstavla. Vi kommer att åka buss till Gibraltar och det är mycket viktigt att alla får med sig sin dokumentation, då vi kommer korsa en gränskontroll där det krävs. Resan kommer ta 2 och en halv timme och det kommer finnas en lokalguide som berättar intressanta fakta om Gibraltar och andra monument under färden.
                    </p>
                    <p>
                        Väl framme i Gibraltar kommer vi ha 3 timmar för sightseeing på egen hand, sedan tar båtfärden 1 och en halv timme. Sist åker vi tillbaka med samma buss som vi kom med, även hemfärden tar 2 och en halv timme. Biljetterna får ni i mobiltelefonerna, om någon inte har en fungerande mobil så får ni prata med oss så löser vi biljett på annat vis. Förutom biljetten gäller det att alla har med sig sin dokumentation och att alla har ätit en ordentlig frukost, då det kommer bli en lång dag. Upplevelsen är tyvärr inte gratis, utan kommer kosta 729,59 kr per vuxen och 506,82 kr för barn. Observera att mat och dryck inte ingår i detta pris. 
                    </p>

                    <div className="title-row">
                        <Clock2Icon size={"1.4rem"} />
                        <h4>Tider</h4>
                    </div>
                    <p>
                        Upphämtning från hotellet kl 07:15, tillbaka senast kl 17:15. 
                    </p>
                    <div className="title-row">
                        <LucideBadgeDollarSign size={"1.4rem"} />
                        <h4>Priser</h4>
                    </div>
                    <p>
                        729,59 kr eller 63,47 € per vuxen och 506,82 kr eller 44,09 € per barn.
                    </p>

                    <hr />

                    <div className="title-row">
                        <MapPin size={"1.8rem"} />
                        <h2>El Chorro</h2>
                    </div>
                    <p>
                        Vi ska även besöka El Chorro, mer specifikt vandringsleden Caminito del Rey som genomgår den jättelika bergsklyftan och erbjuder 7,7 kilometer av häpnadsväckande utsikt. Vi kommer ha med oss en lokalguide och hela resan är arrangerad av företaget Get Your Guide16 som även tillhandahåller med buss. Trots att allt är arrangerat krävs det att ni tar med er vissa nödvändigheter, såsom egen mat och dryck, ID-kort och bekväma kläder och skor då vi kommer gå mycket. Sandaler, husdjur, drönare, alkohol, vandringsstavar och selfiepinnar hör till de saker som absolut inte tillåts under vandringen. Observera även att minderåriga måste gå i sällskap av vuxen, åldersgränsen är 8 år och att den olycksfallsförsäkring som annars ingår inte gäller de över 65 års ålder. All information finns även på vår anslagstavla eller på utflyktssidan17 hos Get Your Guide. Denna utflykt kostar oavsett ålder 697 kr per person.  
                    </p>
                    <div className="title-row">
                        <Clock2Icon size={"1.4rem"} />
                        <h4>Tider</h4>
                    </div>
                    <p>
                        Upphämtning kl 08:15, tillbaka senast 15:15 
                    </p>
                    <div className="title-row">
                        <LucideBadgeDollarSign size={"1.4rem"} />
                        <h4>Priser</h4>
                    </div>
                    <p>
                        697 kr eller 60,63 € per person.
                    </p>

                    <hr />

                    <div className="title-row">
                        <Bus size={"1.8rem"} />
                        <h2>Hemresa</h2>
                    </div>
                    <p>
                        Tyvärr så måste alla goda ting komma till ett slut, denna resa är inget undantag. Ni checkar ut senast kl. 9:50 för att hinna med en transferbuss18 via bolaget Mytransfers kl. 10:00 till flygplatsen som tar 14 minuter. Vi följer med er till incheckningsdisken och tar förväg där. Ert flyg avgår kl. 12:45 den 10 juli. Det åker direkt till Stockholm, Arlanda med SAS. Flyget tar 4h och 20 minuter och har flightnumret SK1584. 
                    </p>

                    <hr />

                    <div className="title-row" style={{ marginBottom: "1rem" }}>
                        <Contact size={"1.8rem"} />
                        <h2>Kontakt</h2>
                    </div>
                    <div className="title-row" style={{ marginBottom: "0.5rem" }}>
                        <Phone size={"1rem"} />
                        <h4>+34 619 345 679</h4>
                    </div>
                    <div className="title-row" style={{ marginBottom: "0.5rem" }}>
                        <AtSign size={"1rem"} />
                        <h4>vacationinfo@wemmel.com</h4>
                    </div>
                </div>
            </div>
            </>
        );
    }
}
