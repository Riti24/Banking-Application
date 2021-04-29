import React, { Component } from 'react';
import '../App.css';
import {Link} from 'react-router-dom';



class Payments extends Component{
    constructor(){
        super();
        this.state={
            isModalOpen:false
        }
        
        
    }
    onModalClick=()=>{
        console.log(this.state.isModalOpen);
        this.setState({
           
                isModalOpen:!this.isModalOpen
        })
        console.log(this.state.isModalOpen)
        if (this.isModalOpen){
            
        }
    }
    // onSpanClick=()=>
    // {
    // //   const style={display:'none' }
    // //   return style;
    //   this.setState({
           
    //     isModalOpen:!this.isModalOpen
    //    })
    // }
    ontransferClick=()=>{
        alert("Paise nahi hai kahin bhi!!! Transfer kahan se karoge?? 🤑")
    }
    onbillpayClick=()=>{
        alert("Sorry.. too many payments are pending!!! System crashed... Please your bills on time 🤑   Click on next card")
    }
   

    render(){
       

        return(<div>
            <div style={{backgroundColor:'ghostwhite',height:'3rem',paddingTop:'1.5rem'}}>
                <ul className="list-unstyled" style={{display:'inline'}}>
                    <Link className="links" to="/home" >Home</Link>
                    <Link className="links" to="/payments" >Payments</Link>
                    <Link className="links" to="/settings">Settings</Link>
                    <Link className="links" to="/offers">Products & Offers</Link>
                 </ul>
            </div>
            <div className="PaymentsMain">
                <h1>Payments</h1>
                <h3>Make a payment/transfer</h3>
                <div  className="ParentCard">
                
                <div className="Card" onClick={this.ontransferClick} >{/*concept of bubbling... click anywhere in the card.. */}
                    <div className="Carddata">
                        {/* <h6 style={{alignContent:'center'}}>Bill Payment</h6> */}
                        <i className="fa fa-exchange fa-2x" aria-hidden="true"></i>
                        <p>Transfer between my accounts</p>
                    </div>
                </div>    
                    <div className="Card" onClick={this.onbillpayClick}>
                        <div className="Carddata">
                            {/* <h6 style={{alignContent:'center'}}>Bill Payment</h6> */}
                            <i className="fa fa-usd fa-2x" aria-hidden="true"></i>
                            <p>Pay BPAY bill</p>
                        </div>
                    </div>    
                    <div className="Card" onClick={this.onModalClick}>
                        <div className="Carddata">
                            {/* <h6 style={{alignContent:'center'}}>Bill Payment</h6> */}
                            <i className="fa fa-users fa-2x" aria-hidden="true"></i>
                            <p>Pay anyone</p>
                        </div>
                    </div >    
                    <div className="Card">
                        <div className="Carddata">
                            {/* <h6 style={{alignContent:'center'}}>Bill Payment</h6> */}
                            <i className="fa fa-money fa-2x" aria-hidden="true"></i>
                            <p>Tax deduction</p>
                        </div>
                    </div>    
                    <div className="Card">
                        <div className="Carddata">
                            {/* <h6 style={{alignContent:'center'}}>Bill Payment</h6> */}
                            <i className="fa fa-credit-card-alt fa-2x" aria-hidden="true"></i>
                            <p>Credit Card Transfer</p>
                        </div>
                    </div>  
                    </div>

                    <div className="modal" style={{display:this.state.isModalOpen?'block':'none' }}>
                        <button className="ModalClose" onClick={()=>{this.setState({isModalOpen:!this.state.isModalOpen})}} style={{display:this.state.isModalOpen?'block':'none' ,cursor:'pointer'}}>Close</button>
                    <form>
                    <label>Your Account Number</label>
                        <input type='text' ></input><br/> 
                    <label>Payee account number</label> 
                    <input type="text"></input> <br/>
                        
                    </form>
                    </div>  
                    
                </div>
           </div>     
        );
    }
}



export default Payments;