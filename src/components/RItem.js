import React, {useRef, useEffect} from 'react';
import * as actionCreators from "../redux/actions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

const RItem = (props) => {
    const {detail , amount, uid} = props.rObject;
    const formatterRef = useRef(null);
    const itemRef = useRef();

    let background;

    formatterRef.current = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD', 
      });

      useEffect(()=>{
          console.log(props.currentEdit);
      })

      const removeItem = ()=>{
        props.removeRItem(uid);
        document.querySelector("#edit-description").style.display = "none";
        document.querySelector("#edit-amount").style.display = "none";
      }

      const edit=(type)=>{
          props.edit(type,uid);
          console.log(uid);
          if(document.querySelector(".green")){
            document.querySelector(".green").classList.remove("green");
          }
          itemRef.current.classList= "rItems--data row green";
          console.log(itemRef.current.classList)
        // document.querySelector(`#${uid}`).classList.add("green");
      }

    return (
        <div className="rItems--data row" ref={itemRef} id={uid}>
            <li className="white-text rItems--row row-8--child" >
                <p onClick={()=>{
                    edit("detail");
                }}>{detail}</p>
            </li>  
            <li className="white-text rItems--row row-8--child" >
                <p onClick={()=>{
                    edit("amount");
                }}>{formatterRef.current.format(amount)}</p>
                <p onClick={removeItem}>X</p>
            </li>   
        </div>
    )
}

const mapDispatchToProps = dispatch=>{
    return bindActionCreators(actionCreators, dispatch);
}
export default connect(null, mapDispatchToProps)(RItem);
