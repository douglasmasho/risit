import React, {useEffect, useRef, useState} from 'react';
import RItem from "./RItem";
import {connect} from "react-redux";
import {nanoid} from "nanoid";
import * as actionCreators from "../redux/actions";
import {bindActionCreators} from "redux";

const Snippet = (props) => {
    const formatterRef = useRef(null);
    const editAmountRef = useRef();
    const editDetailRef = useRef();
    const editIDRef = useRef(null);
    const inputDetailRef = useRef(null);
    const inputAmountRef = useRef(null);
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
               editAmountRef.current.style.display = "none";

               break;
            case "amount": 
               editAmountRef.current.style.display = "block";
               editDetailRef.current.style.display = "none";
               break;
               default: 
               //do nothing
        }
    }

    const submitEditDetail=(e)=>{
        e.preventDefault();
        //execute edit function with the payload and the uid of the item
        const detail =document.querySelector("#description-edit").value
        if(document.querySelector(".green")){
            document.querySelector(".green").classList.remove("green");
          }
          editDetailRef.current.style.display = "none"; 
          inputDetailRef.current.value = "";  

        //run the action from here
        console.log("detail", detail, editIDRef.current);
        props.editRItem("detail", detail, editIDRef.current);
    }

    const submitEditAmount=(e)=>{
        e.preventDefault();
        //execute edit function with the payload and the uid of the item
        const amount =document.querySelector("#amount-edit").value
        if(document.querySelector(".green")){
            document.querySelector(".green").classList.remove("green");
          }
        editAmountRef.current.style.display = "none";
        inputAmountRef.current.value = "";
        //run the action from here
        console.log("amount", amount, editIDRef.current);
        props.editRItem("amount", amount, editIDRef.current);

    }

    // const editChange = (type, payload)=>{
    //     switch(type){
    //         case "detail": 
    //            setEditedDetail(payload);
    //         break;
    //         case "amount": 
    //         case "detail": 
    //            setEditedAmount(payload);
    //         break;
    //         default: 
    //         //nothing
    //     }
    // }

    const closeEdit = (type)=>{
        let el;
        switch(type){
            case "detail":
                el = editDetailRef.current
            break;    
            case "amount":
                el = editAmountRef.current
            break;    
        }
        el.style.display = "none";
        if(document.querySelector(".green")){
            document.querySelector(".green").classList.remove("green");
          }
    }
    
    return (
        <div className="u-margin-top-big">
        
        <div className="center-hrz">
        <div style={{backgroundColor: props.backColor, padding: "2rem", width: props.width, borderRadius: "10px"}}>
                <div className="rItems--header row">
                    <table style={{width: "100%"}}>
                        <td style={{width: "50%", }}> <p className="row-2--child black-text" style={{color: "black"}}>Description</p></td>
                        <td style={{width: "50%"}}> <p className=" black-text" style={{color: "black", textAlign: "right"}}>Amount N$</p>   </td>
                    </table>
                   
                    
                </div>
            <div>
              {props.items.map((item)=>(<RItem key={nanoid()} rObject={item} edit={edit} currentEdit={editIDRef.current}/>))}
            </div>
            <h2 className="white-text bigger-text u-margin-top receipt-data">Total: N{formatterRef.current.format(totalRef.current)}</h2>
            <div className="edit u-margin-top center-hrz--col"> 

            <form id="edit-description" style={{display: "none"}} ref={editDetailRef} onSubmit={submitEditDetail}>
                    <h1 className="white-text">Edit Description</h1>
                       <div className="input-group center-hrz--col row-2--child">
                            <input type="text" name="number" id="description-edit" className="input-number" placeholder="Description" required ref={inputDetailRef}/>
                            <label htmlFor="amount-edit" className="input--label">Description</label>
                        </div>   
                       <button type="submit" className="btn normal-text">Edit Item Description</button>  
                       <button className="btn normal-text" onClick={()=>{

                        closeEdit("detail");
                       }}>Close</button>    
                </form>

                <form id="edit-amount" style={{display: "none"}} ref={editAmountRef} onSubmit={submitEditAmount}>
                    <h1 className="white-text">Edit Amount</h1>
                       <div className="input-group center-hrz--col row-2--child">
                            <input type="number" name="number" id="amount-edit" className="input-number" placeholder="Amount in N$" required  step=".01"  ref={inputAmountRef}/>
                            <label htmlFor="amount-edit" className="input--label">Amount in N$</label>
                        </div>   
                       <button type="submit" className="btn normal-text">Edit Item Amount</button>    
                       <button className="btn normal-text" onClick={()=>{
                        closeEdit("amount");
                       }}>Close</button>    
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

const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators(actionCreators, dispatch)
} 

export default connect(mapStateToProps, mapDispatchToProps)(Snippet);
