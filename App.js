const parent = React.createElement("div", { id: "parent" },
  [React.createElement("div", { id: "child" }, [
    React.createElement('h1', null, "I am a h1 Tag"),
    React.createElement('h2', null, "I am a h2 Tag")
  ])], [React.createElement("div", { id: "child2" }, [
    React.createElement('h1', null, "I am a h1 Tag"),
    React.createElement('h2', null, "I am a h2 Tag")
  ])]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);