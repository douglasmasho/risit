import React, {useEffect} from 'react';
import companyLogo from "../assets/iamvotingnam.svg";
import {connect} from "react-redux";
import Snippet from "./Snippet"
const Create = (props) => {
    const {firstName, lastName, email, company, address1, address2, city} = props.donorInfo;

    return (
        <div className="u-padding-top-large">
            <h1 className="header-text u-margin-bottom">Preview</h1>
            <div className="center-hrz">
                <div className="receipt"> 
                <div className="row" style={{justifyContent: "space-between"}}>
                    <div>
                            <div className="center-hrz center-vert--row  u-margin-bottom div1">
                                <img src={companyLogo} alt="" className="receipt__logo u-margin-right"/>   
                                <h1 className="receipt__company-name">IAMVoting <br/> <span>Namibia</span></h1>
                            </div> 
                                <div>
                                    <p className="receipt__company-info">Windhoek Namibia</p>
                                    <p className="receipt__company-info">info@iamvotingnam.org</p>
                                    <p className="receipt__company-info">+264 81 550 3063</p>
                                </div>
                    </div>
                       
                    <div>
                      <p className="receipt__title">Donation <span>Receipt</span></p>
                      <div>
                          <h1>Donor Information</h1>
                         <p className="receipt__donor-info">{firstName} {lastName}</p>
                         <p className="receipt__donor-info">{email}</p>
                         <p className="receipt__donor-info">{company}</p>
                         <p className="receipt__donor-info">{address1}</p>
                         <p className="receipt__donor-info">{address2}</p>
                         <p className="receipt__donor-info">{city}</p>
                      </div>
                    </div>
                    
                </div>
                <Snippet width="100%"/>
                </div>
            </div>

        </div>
    )
}

const mapStateToProps = state=>({
    donorInfo: state.donorInfo
})

export default connect(mapStateToProps, null)(Create);
