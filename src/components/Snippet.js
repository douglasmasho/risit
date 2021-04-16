import React, {useEffect, useRef, useState} from 'react';
import RItem from "./RItem";
import {connect} from "react-redux";
import {nanoid} from "nanoid";

const Snippet = (props) => {
    const formatterRef = useRef(null);
    const editAmountRef = useRef();
    const editDetailRef = useRef();
    const editIDRef = useRef(null);
    const [editedAmount, setEditedAmount] = useState("");
    const [editedDetail, setEditedDetail] = useState("");


    formatterRef.current = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD', 
      });

      const totalRef = useRef(null);
      
     totalRef.current = props.items.reduce((a,c)=>{
        return a + parseFloat(c.amount);
        }, 0);

    // const total = parseFloat(totalUnRounded.toFixed(2)

    ///edit funtion
    const edit = (type, payload)=>{
        console.log(payload);
        editIDRef.current = payload;
        console.log(editIDRef.current);
        switch(type){
            case "detail": 
               editDetailRef.current.style.display = "block";
               break;
            case "amount": 
               editAmountRef.current.style.display = "block";
               break;
               default: 
               //do nothing
        }
    }

    const submitEdit=(e)=>{
        e.preventDefault();
        //execute edit function with the payload and the uid of the item
        console.log(editIDRef);
    }

    const editChange = (type, payload)=>{
        switch(type){
            case "detail": 
               setEditedDetail(payload)
            break;
            case "amount": 
            case "detail": 
               setEditedAmount(payload)
            break;
            default: 
            //nothing
        }
    }

    const handleChange = e=>{
// editChange("detail", e.current.value)
    }
    
    return (
        <div className="u-margin-top-big">
        
        <div className="center-hrz">
        <div style={{backgroundColor: props.backColor, padding: "2rem", width: props.width, borderRadius: "10px"}}>
                <div className="rItems--header row">
                    <p className="row-8--child black-text" style={{color: "black"}}>Description</p>
                    <p className="row-8--child black-text" style={{color: "black"}}>Amount N$</p>   
                </div>
            <div>
              {props.items.map((item)=>(<RItem key={nanoid()} rObject={item} edit={edit} currentEdit={editIDRef.current}/>))}
            </div>
            <h2 className="white-text bigger-text u-margin-top">Total: N{formatterRef.current.format(totalRef.current)}</h2>
            <div className="edit u-margin-top center-hrz--col"> 

            <form id="edit-description" style={{display: "none"}} ref={editDetailRef}>
                    <h1 className="white-text">Edit Description</h1>
                       <div className="input-group center-hrz--col row-2--child">
                            <input type="text" name="number" id="description" className="input-number" placeholder="Description" required onChange={(e)=>{
                                
                                console.log(e.current)
                            }}/>
                            <label htmlFor="amount" className="input--label">Description</label>
                        </div>   
                       <button type="submit" className="btn normal-text">Edit Item Description</button>      
                </form>

                <form id="edit-amount" style={{display: "none"}} ref={editAmountRef}>
                    <h1 className="white-text">Edit Amount</h1>
                       <div className="input-group center-hrz--col row-2--child">
                            <input type="number" name="number" id="amount" className="input-number" placeholder="Amount in N$" required  step=".01" onChange={(e)=>{
                                editChange("detail", e.current.value)
                            }}/>
                            <label htmlFor="amount" className="input--label">Amount in N$</label>
                        </div>   
                       <button type="submit" className="btn normal-text">Edit Item Amount</button>      
                </form>

            </div>
        </div>
        </div>
        </div>
    )
}

const mapStateToProps = state=>({
    items: state.receiptItems
})

export default connect(mapStateToProps, null)(Snippet);
