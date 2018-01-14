import './main.css';

const c : any = (<any>module)["hot"];
if (c)
    c.accept();

window.onload = () => {
    document.querySelector("div#js").innerHTML = "some HTML";
}
