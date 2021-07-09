import React from "react";
import Tap from "./Tap";

class App extends React.Component {
    buttonConsole = () => {
        console.log("Кнопка выводит в console");
};
    buttonAlert = () => {
        alert("Кнопка выводит в alert");
};
    buttonParametr = (item) => {
        console.log(`Кнопка выводит ${item}`)
};
    
    render() {
        return (
            <div>
                <Tap clickFuction = {this.buttonConsole} label = "Button 1" />
                <Tap clickFuction = {this.buttonAlert} label = "Button 2" />
                <Tap clickFuction = {this.buttonParametr} label = "Button 3" />
            </div>
    );
  }
}
export default App;