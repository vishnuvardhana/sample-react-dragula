import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'uikit/dist/css/uikit.css';
import ColClass from './grid/col';
import GridClass from './grid/grid';
import DndClass from './dnd/dnd';
import UIkit from 'uikit';

class GenerateDraggable extends Component {
    render() {

        return (<div className="uk-panel">
            This is panel {this.props.panelIndex} content  {this.props.index + 1}
        </div>)
    }

}


class App extends Component {
    render() {
        let panel1 = [];
        let panel2 = [];
        panel1.length = 5;
        panel2.length = 4;
        panel1.fill(0);
        panel2.fill(0);
        return (
            <div className="uk-container">
                <br/>
                <h5 className="uk-text-center">Move Cards across panels and within panels too</h5>
                <DndClass dndClass1={'container-1'} dndClass2={'container-2'}>
                    <GridClass gutter={'small'}>

                        <ColClass width={'1-2'} className={'containers container-1'} >
                            {panel1.map(function (panel, index) {
                                return <GenerateDraggable index={index} panelIndex={1} />
                            })}
                        </ColClass>
                        <ColClass width={'1-2'} className={'containers container-2'} >
                            {panel2.map(function (panel, index) {
                                return <GenerateDraggable index={index} panelIndex={2} />
                            })}
                        </ColClass>

                    </GridClass>
                </DndClass>
            </div>
        );
    }
}

export default App;
