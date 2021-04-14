import React, {createRef} from 'react';
import {connect} from "react-redux";
import * as actionCreators from "../redux/actions";
import {bindActionCreators} from "redux";
import Preview from "./Preview";


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: "",
            amount: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.detailRef = createRef();
        this.amountRef = createRef();

    }

    handleChange = ({target})=>{
        this.setState((state, prevState)=>({
            [target.id] : target.value,
        }))
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        console.log(this.state);
        this.detailRef.current.value = "";
        this.amountRef.current.value = "";
        ///dispatch the state to the reducer
        this.props.addRItem(this.state);

    }

    testFunc2 = ()=>{
        console.log(this.props.items);
    }


    render() {
        return (
            <div>
                {/* <button onClick={this.testFunc}>Add Something</button> */}
                <button onClick={this.testFunc2}>Check State</button>

                <h2 className="header-text">Input Donor Details</h2>
                <form action="" onSubmit={this.handleSubmit}>
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
                            <input type="text" name="text" id="detail" className="input-textbox" placeholder="Donation detail" required onChange={this.handleChange} ref={this.detailRef} />
                            <label htmlFor="detail" className="input--label">Donation detail</label>
                        </div>

                        <div className="input-group center-hrz--col row-2--child">
                            <input type="number" name="number" id="amount" className="input-number" placeholder="Amount in N$" required onChange={this.handleChange} ref={this.amountRef} step=".01"/>
                            <label htmlFor="amount" className="input--label">Amount in N$</label>
                        </div>         
                    </div>
                    <div className="center-hrz">
                       <button type="submit" className="btn normal-text">Add Item</button>   
                    </div>
                </form>
                <Preview/>      
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return ({
        test: state.test,
        items: state.receiptItems
    })
}

const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
