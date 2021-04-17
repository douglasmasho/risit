import React, {useEffect, useRef} from 'react';
import companyLogo from "../assets/iamvoting.png";
import {connect} from "react-redux";
import Snippet from "./Snippet";
import ReactToPdf from "react-to-pdf";
import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from 'react-component-export-image';
import  jsPDF  from "jspdf";
import html2canvas from "html2canvas";
import ReactToPrint from 'react-to-print';
import {nanoid} from "nanoid";
import moment from 'moment'


const Create = (props) => {
    const {firstName, lastName, email, company, address1, address2, city, country} = props.donorInfo;
    const functionRef = useRef(null)



      useEffect(()=>{
        const printDocument = ()=> {
            const input = pdfRef.current;
            console.log(document.querySelector("#receipt1"));
            html2canvas(input)
              .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                pdf.addImage(imgData, 'JPEG', 0, 0);
                // pdf.output('dataurlnewwindow');
                pdf.save("download.pdf");
              })
            ;
          }
          functionRef.current = printDocument;
      }, [])
    
    //   useEffect(()=>{
    //     const input = document.getElementById('receipt1');

    //       var doc = new jsPDF();
    //       doc.addHTML(input,15,15);
    //       doc.save("output.pdf")
    //   },[])

    const pdfRef = useRef(null);
    return (
        <div className="u-padding-top-large">
            <h1 className="header-text u-margin-bottom">Preview</h1>
            <div className="center-hrz" >
                <div className="receipt" id="receipt1" ref={pdfRef}> 
                <div className="row" style={{justifyContent: "space-between"}}>
                    <table style={{width: "100%"}}>
                        <tr>
                            <td style={{width: "50%"}}>
             
                    <div>
                            <div className="center-hrz center-vert--row  u-margin-bottom div1" >
                                <img src={companyLogo} alt="" className="receipt__logo u-margin-right"/>   
                                <h1 className="receipt__company-name">IAMVoting <br/> <span>Namibia</span></h1>
                            </div> 
                                <div>
                                    <p className="receipt__company-info">Windhoek Namibia</p>
                                    <p className="receipt__company-info">info@iamvotingnam.org</p>
                                    <p className="receipt__company-info">+264 81 550 3063</p>
                                </div>
                    </div>
                    </td>
                    <td style={{width: "50%"}}>
                    <div>
                      
                      <p className="receipt__title">Donation <span>Receipt</span></p>
                      <div className="u-margin-top receipt__donor-info-div">
                          <h1 className="receipt-donor-info">Donor Information</h1>
                         <p className="receipt__donor-info">Name: {firstName} {lastName}</p>
                         <p className="receipt__donor-info">Email: {email}</p>
                         <p className="receipt__donor-info">Comapany: {company}</p>
                         <p className="receipt__donor-info">Address:</p>
                         <p className="receipt__donor-info">{address1}</p>
                         <p className="receipt__donor-info">{address2}</p>
                         <p className="receipt__donor-info">{city}</p>
                         <p className="receipt__donor-info">{country}</p>
                      </div>
                      <p className="receipt__donor-info" style={{color: "white"}}>receipt no.: {nanoid()}</p>
                     <p className="receipt__donor-info" style={{color: "white"}}>Date: {moment().format("MMM Do YY")}</p>

                    </div>
                    </td>
                    </tr>
                    </table>
                </div>
                <Snippet width="100%"/>
                </div>
            </div>
            {/* <button onClick={()=>functionRef.current()}>Print</button>
            <button onClick={() => exportComponentAsPNG(pdfRef)}>
         Export As JPEG
       </button> */}
       <div className="center-hrz u-margin-top u-margin-bottom">
       <ReactToPrint style={{fontSize: "2rem"}} trigger={() => <button>Print this out!</button>} content={() => pdfRef.current} className="btn normal-text"/>
       </div>
        </div>
    )
}

const mapStateToProps = state=>({
    donorInfo: state.donorInfo
})

export default connect(mapStateToProps, null)(Create);
