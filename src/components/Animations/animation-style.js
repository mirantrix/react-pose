import React from 'react';
import { PoseGroup } from 'react-pose';
import './styles.css';


class AnimationStyle extends React.Component {

    render() {
        const Element = this.props.animationType;
        console.log(this.props.isActive);
        return (
        <PoseGroup>
            {this.props.isActive && 
            <Element key="modal" className="modal">
               {this.props.children}
            </Element>
            }
        </PoseGroup>
        );
    }
}

export default AnimationStyle;