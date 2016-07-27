import React, { Component, PropTypes } from 'react';
import Prism from '../vendors/prism.js';


export default class exampleCode extends Component {


    static propTypes = {
        name: PropTypes.string
    };

    constructor(...args) {
        super(...args);
    }

    componentDidMount() {
        Prism.highlightAll();
    }


    render() {
        let fileName = this.props.name;

        let source = require(`!raw!./${fileName}/${fileName}.js`);

        return (<pre className="language-jsx"><code className="language-jsx">{source}</code></pre>)
    }
}