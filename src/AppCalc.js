import React from "react";
import Button from "./Button";

class AppCalc extends React.Component {
    state = {
        number: 0,
    };
    onClickPlus = () => {
        this.setState({ number: this.state.number + 1 });
    };
    onClickMinus = () => {
        this.setState({ number: this.state.number - 1 });
    };

    render() {
        return (
            <div>
                <Button onClick={this.onClickPlus} label="Plus" />
                {this.state.number}
                <Button onClick={this.onClickMinus} label="Minus" />
            </div>
        );
    }
}
export default AppCalc;
