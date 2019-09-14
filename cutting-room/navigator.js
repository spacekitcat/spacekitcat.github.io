function Widget(props) {
  return (
    <div>
      <h1>Your personal bad things day:</h1>
      <h2>{props.time}</h2>
    </div>);
}

function App() {
  const date = new Date();
  date.setDate(date.getDate() + Math.round(Math.random() * 255));
  return (
    <div>
      <Widget time={date.toLocaleDateString()} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('navigator'));
