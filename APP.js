const heading =React.createElement("h1",{id:"heading"},"Hello world from React");
console.log(heading);//object
const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);