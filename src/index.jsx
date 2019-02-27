import React, {Component} from "react";
import PropTypes from "prop-types";
import CollectorContext from "../../product-issue/node_modules/@walmart/feds-ny-core/lib/analytics/backplane/collector-context";
import ExceptionCollector from "../../product-issue/node_modules/@walmart/feds-ny-core/lib/analytics/collectors/exception-collector";
import AnalyticsProvider from "../../product-issue/node_modules/@walmart/feds-ny-core/lib/analytics/backplane/analytics-provider";

export const Main1 = () => <div/>;
export default class Main extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (<div>
            <h1>Hello World</h1>
            <p>{this.props.message}</p>
        </div>);
    }
}
Main.propTypes = {
    message: PropTypes.string
};
export const PAC_CSS_URL = "ccm['product-app'].pacBundle.ossCssUrl";
export const PAC_JS_URL = "ccm['product-app'].pacBundle.ossJsUrl";
