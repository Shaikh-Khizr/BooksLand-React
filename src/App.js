import './App.css';

const Person = () => {
  return (
    <>
    <h1>Name: Khizr</h1>
    <h2>Last Name: Shaikh</h2>
    <h2>Age: 17</h2>
    </>
  )
}

const App = () => {
  return (
    <div className="App">
      <Person />
      <Person />
      <Person />
      <Person />
      <Person />
    </div>
  );
}

export default App;
