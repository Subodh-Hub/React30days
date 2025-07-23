const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement("div", {}, [
      React.createElement(
        Pizza,
        {
          name: "Pepporina Pizza",
          description: "Wow its so delicious with sausage slice pizza",
        },
        "",
      ),
      React.createElement(
        Pizza,
        {
          name: "Mozerilla Pizza",
          description: "Wow its so delicious with mozerilla cheese pizza",
        },
        "",
      ),
      React.createElement(
        Pizza,
        {
          name: "Hawain Pizza",
          description: "Wow its so delicious with pineapple topping pizza",
        },
        "",
      ),
    ]),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
