import './App.css';

//Object { _id: "61d455e68c48231dde71e861", auteur: "kuba", message: "salut tt le monde", … }

function App() {
  const str = fetch('http://localhost:4242').then(res => {return res.json()});
  console.log(str);
  return (
    <div className="App">
      <h1>Front pour projet Orchestration de services</h1>
    </div>
  );
}

export default App;
