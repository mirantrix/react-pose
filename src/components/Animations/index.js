import React from 'react';
import AnimationStyle from './animation-style';
import { RightToLeft, LeftToRight, TopToBottom } from '../animation-settings';

class Animations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          top: false,
          left: false,
          right: false
        };
     }

    render(){
        return(
            <React.Fragment>
                <div className="container">
                    <div className="buttonContainer">
                        <button className="button" onClick={() => this.fromTop()}>From Top</button>
                        <button className="button" onClick={() => this.fromRight()}>From Right</button>
                        <button className="button" onClick={() => this.fromLeft()}>From Left</button>
                    </div>
                    <div className="animationContainer">
                        <AnimationStyle isActive={this.state.top} animationType={TopToBottom} className="div">
                            <h2>SUPERIOR DIGITAL CRAFTMANSHIP</h2>
                            <p>We specialize in creating world-class web and mobile applications. We believe...</p>
                            <a href="www.grio.com">LEARN HOW WE WORK</a>
                        </AnimationStyle> 
                        <AnimationStyle isActive={this.state.left} animationType={LeftToRight} className="div">
                            <h2>SUPERIOR DIGITAL CRAFTMANSHIP</h2>
                            <p>We specialize in creating world-class web and mobile applications. We believe...</p>
                            <a href="www.grio.com">LEARN HOW WE WORK</a>
                        </AnimationStyle> 
                        <AnimationStyle isActive={this.state.right} animationType={RightToLeft} className="div">
                            <h2>SUPERIOR DIGITAL CRAFTMANSHIP</h2>
                            <p>We specialize in creating world-class web and mobile applications. We believe...</p>
                            <a href="www.grio.com">LEARN HOW WE WORK</a>
                        </AnimationStyle> 
                    </div>
                </div>
            </React.Fragment>
        )
    }

    fromTop() {
        this.setState(state => ({
            top: true,
            right: false,
            left: false,
        }));
     }

     fromLeft() {
        this.setState(state => ({
            top: false,
            right: false,
            left: true,
        }));
     }

     fromRight() {
        this.setState(state => ({
            top: false,
            right: true,
            left: false,
        }));
     }


    
}

export default Animations;