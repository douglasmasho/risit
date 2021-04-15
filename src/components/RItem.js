import React, {useRef} from 'react';
import * as actionCreators from "../redux/actions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

const RItem = (props) => {
    const {detail , amount, uid} = props.rObject;
    const formatterRef = useRef(null);
    formatterRef.current = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD', 
      });

      const removeItem = ()=>{
        props.removeRItem(uid);
      }
    return (
        <div className="rItems--data row">
            <li className="white-text rItems--row row-8--child">
                <p>{detail}</p>
            </li>  
            <li className="white-text rItems--row row-8--child">
                <p >{formatterRef.current.format(amount)}</p>
                <p onClick={removeItem}>X</p>
            </li>   
        </div>
    )
}

const mapDispatchToProps = dispatch=>{
    return bindActionCreators(actionCreators, dispatch);
}
export default connect(null, mapDispatchToProps)(RItem);
