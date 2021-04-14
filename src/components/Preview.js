import React, {useEffect} from 'react';
import RItem from "./RItem";
import {connect} from "react-redux";
import {nanoid} from "nanoid";

const Preview = (props) => {
    const total = props.items.reduce((a,c)=>{
        return a + parseFloat(c.amount);
    }, 0);

    // const total = parseFloat(totalUnRounded.toFixed(2));

    useEffect(()=>{
        console.log(total);
    })
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD', 
        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
      });
    //   formatter.format(total);
       /* $2,500.00 */
    
    return (
        <div className="u-margin-top-big">
        <h1 className="header-text">Preview</h1>
        <div style={{backgroundColor:"#000957", padding: "2rem"}}>
            <div className="rItems--header row">
                <p className="row-8--child black-text">Description</p>
                <p className="row-8--child black-text">Amount N$</p>        
            </div>
            <div>
            {props.items.map((item)=>(<RItem key={nanoid()} rObject={item}/>))}
            </div>
            <h2 className="white-text bigger-text">Total: {formatter.format(total)}</h2>
        </div>
        </div>
    )
}

const mapStateToProps = state=>({
    items: state.receiptItems
})

export default connect(mapStateToProps, null)(Preview)
