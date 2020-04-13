import React from "react";
import "./App.css";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0,
            isTableVisible: true,
        };
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }
    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }
    handleClickOutside = (event) => {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState({ isTableVisible: false });
        }
    };

    _onMouseMove = (event) => {
        const table = this.refs.tableEl;
        const height = this.refs.tableEl.clientHeight;
        const width = this.refs.tableEl.clientWidth;

        // we can just you event.offsetX which give the relative position of the mouse with respect to
        // the div as here we are dealing with neseted elements and not a plain div, a table has <tr> and
        // <td> elements which confuses react, which element is the point of reference, more info:
        // https://stackoverflow.com/questions/3234256/find-mouse-position-relative-to-element

        const obj = this.refs.tableEl.getBoundingClientRect();
        const x = event.clientX - obj.left; //x position within the element.
        const y = event.clientY - obj.top; //y position within the element.

        let oX = Math.floor((x / width) * 10) + 1;
        let oY = Math.floor((y / height) * 10) + 1;
        //   console.log(`X->${event.nativeEvent.offsetX} Y->${event.nativeEvent.offsetY}`);

        this.setState({ x: oX, y: oY });
        // console.log(this.refs);
        if (this.refs.tableEl) {
            for (var i = 0; i < table.rows.length; i++) {
                for (var j = 0; j < table.rows[i].cells.length; j++) {
                    if (i < this.state.y && j < this.state.x) {
                        // console.log('do we ever come here')
                        table.rows[i].cells[j].style.background = "#def";
                    } else {
                        table.rows[i].cells[j].style.background = "white";
                    }
                }
            }
        }
    };

    markdownTable = () => {
        let array = [];
        let str = "",
            i = 0,
            j = 0;
        // every table should have a heading
        for (i = 1; i <= 2; i++) {
            for (j = 1; j <= this.state.x; j++) {
                str += i === 1 ? "|     " : "| --- ";
            }
            str += "|";
            array.push(str);
            str = "";
        }

        for (i = 1; i <= this.state.y; i++) {
            for (j = 1; j <= this.state.x; j++) {
                str += "|     ";
            }
            str += "|";
            array.push(str);
            str = "";
        }
        str = array.join("\n");
        console.log(str);
        document.querySelector(".txt").innerHTML = str;
        this.toggleBox();
    };

    toggleBox = () => {
        this.setState((prevState) => ({
            isTableVisible: !prevState.isTableVisible,
        }));
    };

    render() {
        const { x, y, isTableVisible } = this.state;

        return (
            <div>
				<h2>Joplin markdown-table-generator draft 1 🎉🎉</h2>
               <div className='txtDiv'><textarea className="txt"></textarea></div> 
                <div className="dropdown">
                    <button className="dropdownButton" onClick={this.toggleBox}>
                        <i className="fa fa-table 3x"></i>
                    </button>

                    <div
                        className={`tablecontainer ${
                            isTableVisible ? "" : "hidden"
                        }`}
                        ref={this.setWrapperRef}
                    >
                        <table
                            className="tableEl"
                            onMouseMove={this._onMouseMove}
                            onMouseOut={this._onMouseOut}
                            ref="tableEl"
                        >
                            <tbody>
                                <tr>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                </tr>
                                <tr>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                </tr>
                                <tr>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                </tr>
                                <tr>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                </tr>
                                <tr>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                </tr>
                                <tr>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                </tr>
                                <tr>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                </tr>
                                <tr>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                </tr>
                                <tr>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                </tr>
                                <tr>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                    <td onClick={this.markdownTable}> </td>
                                </tr>
                            </tbody>
                        </table>
                        <p className="rc">
                            Rows:{y} Columns:{x}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

