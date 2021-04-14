import React from 'react';
import {connect} from "react-redux";
import * as actionCreators from "../redux/actions";
import {bindActionCreators} from "redux";


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.testFunc = this.testFunc.bind(this);
    }


    testFunc = ()=>{
        this.props.addTest("something");
    }
    testFunc2 = ()=>{
        console.log(this.props.test);
    }
    render() {
        return (
            <div>
                <button onClick={this.testFunc}>Add Something</button>
                <button onClick={this.testFunc2}>Check State</button>

                <h2 className="header-text">Input Donor Details</h2>
                <form action="">
                    <div className="center-hrz--col">
                        <div className="input-group center-hrz--col row-2--child">
                            <input type="text" name="text" id="firstName" className="input-textbox" placeholder="First name" required/>
                            <label htmlFor="firstName" className="input--label">First Name</label>
                        </div>
                        
                        <div className="input-group center-hrz--col row-2--child">
                            <input type="text" name="text" id="lastName" className="input-textbox" placeholder="Surname" required/>
                            <label htmlFor="lastName" className="input--label">Surname</label>
                        </div>

                        <div className="input-group center-hrz--col row-2--child">
                            <input type="text" name="text" id="email" className="input-textbox" placeholder="Email Address" required/>
                            <label htmlFor="email" className="input--label">Email Address</label>
                        </div>

                        <div className="input-group center-hrz--col row-2--child">
                            <input type="text" name="text" id="company" className="input-textbox" placeholder="Company" required/>
                            <label htmlFor="company" className="input--label">Company</label>
                        </div>

                        <div className="input-group center-hrz--col row-2--child">
                            <input type="text" name="fullAddress" id="address1" className="input-textbox" placeholder="Address Line 1" required/>
                            <label htmlFor="address1" className="input--label">Address Line 1</label>
                        </div>

                        <div className="input-group center-hrz--col row-2--child">
                            <input type="text" name="fullAddress" id="address2" className="input-textbox" placeholder="Address Line 2" required/>
                            <label htmlFor="address2" className="input--label">Address Line 2</label>
                        </div>

                        <div className="input-group center-hrz--col row-2--child">
                            <input type="text" name="fullAddress" id="City" className="input-textbox" placeholder="City" required/>
                            <label htmlFor="City" className="input--label">City</label>
                        </div>
                    </div>

                    <h2 className="header-text">Add donation item</h2>

                    <div className="center-hrz--col">
                        <div className="input-group center-hrz--col row-2--child">
                            <input type="text" name="text" id="detail" className="input-textbox" placeholder="Donation detail" required/>
                            <label htmlFor="detail" className="input--label">Donation detail</label>
                        </div>

                        <div className="input-group center-hrz--col row-2--child">
                            <input type="number" name="number" id="amount" className="input-number" placeholder="Amount in N$" required/>
                            <label htmlFor="amount" className="input--label">Amount in N$</label>
                        </div>         
                    </div>

                    <div className="center-hrz">
                       <button type="submit" className="btn normal-text">Add Item</button>   
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return ({
        test: state.test
    })
}

const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
