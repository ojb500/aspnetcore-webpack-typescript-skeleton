import './main.css';

// opt in to Hot Module Replacement
const c : any = (<any>module)["hot"];
if (c)
    c.accept();

// Make an application!
document.querySelector("div#js").innerHTML = "my HTML";
