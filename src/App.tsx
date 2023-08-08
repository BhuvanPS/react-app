import ListGroup from "./components/ListGroup";
function App() {
  let items = ["hibfjhb", "ko", "kd"];
  return (
    <div>
      {" "}
      <ListGroup items={items} heading={"test"}></ListGroup>
    </div>
  );
}

export default App;
