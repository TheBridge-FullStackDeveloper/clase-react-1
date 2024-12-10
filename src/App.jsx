import "./App.css";
import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";

function App() {
  const number = 10
  const frase =<p>Aqui esta mi frase</p>
  const users = [
    {
      id:1,
      name:"Alberto",
      email:"alberto@gmail.com"
    },
    {
      id:2,
      name:"Karen",
      email:"karen@gmail.com"
    },
    {
      id:3,
      name:"Jose",
      email:"jose@gmail.com"
    }
  ]
  return (
    <div>
      <Header/>
      {users.map(user=>{
        return (
          <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        )
      })}
      {/* <Welcome name="Breyner" lastname="Pavas"/>
      <Welcome name="Mario" lastname="Tomas"/>
      <Welcome name="Luis" lastname="Rioja"/>
      {/* <Header></Header> */}
       {/*<p>Hola Mundo</p>
      <p>{number}</p>
      {console.log("hola")}
      {frase} */}
    </div>
  );
}

export default App;
