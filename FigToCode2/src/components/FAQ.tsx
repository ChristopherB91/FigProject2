import "../App.css";
import giraffe from "../assets/FAQImgs/GuyWGiraffe.svg";

const Question: {
  Q: string;
  Symbol: string;
  Symbol2: string;
  Plus: boolean;
  A?: string;
}[] = [
  {
    Q: "How much does a Teams subscription cost?",
    Symbol: "+",
    Symbol2: "-",
    Plus: true,
  },
  {
    Q: "Do I still need to purchase licenses for the Mac app?",
    Symbol: "+",
    Symbol2: "-",
    Plus: true,
  },
  {
    Q: "What are the differences between Contributors and Viewers?",
    Symbol: "+",
    Symbol2: "-",
    Plus: false,
    A: "Contributors are members of your team who need access to use the Mac app to create and edit Sketch documents. These prices don’t include sales tax, which may still apply. Head over to our pricing page to get full details.",
  },
  {
    Q: "How long does the free Teams subscription trial last?",
    Symbol: "+",
    Symbol2: "-",
    Plus: true,
  },
  {
    Q: "Will program for Teams replace volume licensing?",
    Symbol: "+",
    Symbol2: "-",
    Plus: true,
  },
];

function Faq() {
  return (
    <div>
      <div className="subTitle" style={{ border: "Solid 1px #151515" }}>
        <p>FAQS</p>
      </div>
      <h1>Common Questions</h1>
      <h3>
        The online form also provides links to a set of frequently asked
        questions, other information materials related to the financial
        disclosure programme.
      </h3>
      {Question.map((item, index) => {
        function switcher() {
          if (item.Plus == true) {
            item.Plus = false;
            console.log(item.Plus);
          } else if (item.Plus == false) {
            item.Plus = true;
            console.log(item.Plus);
          }
        }
        return (
          <div style={{ color: "black", fontFamily: "NeueMachinaUltra" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h2 key={index}>{item.Q}</h2>
              <h2 onClick={switcher}>
                {item.Plus ? item.Symbol : item.Symbol2}
              </h2>
            </div>
            <h3>{item.Plus ? undefined : item.A}</h3>
            <hr style={{ backgroundColor: "#151515", height: "1px" }} />
          </div>
        );
      })}
      <img src={giraffe} alt="Guy next to giraffe" />
    </div>
  );
}

export default Faq;
