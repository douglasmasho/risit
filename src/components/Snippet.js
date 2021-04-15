import React, {useEffect, useRef} from 'react';
import RItem from "./RItem";
import {connect} from "react-redux";
import {nanoid} from "nanoid";

const Snippet = (props) => {
    const formatterRef = useRef(null);
    formatterRef.current = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD', 
      });

      const totalRef = useRef(null);
      
     totalRef.current = props.items.reduce((a,c)=>{
        return a + parseFloat(c.amount);
        }, 0);

    // const total = parseFloat(totalUnRounded.toFixed(2)
    
    return (
        <div className="u-margin-top-big">
        
        <div className="center-hrz">
        <div style={{backgroundColor: props.backColor, padding: "2rem", width: props.width, borderRadius: "10px"}}>
                <div className="rItems--header row">
                    <p className="row-8--child black-text" style={{color: "black"}}>Description</p>
                    <p className="row-8--child black-text" style={{color: "black"}}>Amount N$</p>   
                </div>
            <div>
              {props.items.map((item)=>(<RItem key={nanoid()} rObject={item}/>))}
            </div>
            <h2 className="white-text bigger-text u-margin-top">Total: N{formatterRef.current.format(totalRef.current)}</h2>
        </div>
        </div>
        </div>
    )
}

const mapStateToProps = state=>({
    items: state.receiptItems
})

export default connect(mapStateToProps, null)(Snippet);
