import "./App.css";

//Object { _id: "61d455e68c48231dde71e861", auteur: "kuba", message: "salut tt le monde", … }
function App() {
	const str = fetch("http://localhost:4242")
		.then((res) => res.json())
		.then((res) =>
    {
      let tabBody = document.querySelector("tbody");
    
    for (const user of res) {
      tabBody.innerHTML += `
        <tr>
        <td>${user.auteur}</td>
        <td>${user.message}</td> 
        </tr>
        `;
    } });

	return (
		<div className="App">
			<h1>Front pour projet Orchestration de services</h1>
      <table>
        <thead>
          <tr>
            <th>Auteur</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
         
        </tbody>
      </table>
		</div>
	);
}

export default App;
