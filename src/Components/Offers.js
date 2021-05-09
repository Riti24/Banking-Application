import React,{Component} from 'react';
import '../App';
import {Link} from 'react-router-dom';
import Navbar from './NavbarComponent';

const Add=(props)=>{
 return(
     <div>{console.log("Hello Nikhil")}</div>
 )
    
}

const RemoveItem=(props)=>{
    // const x=props.Data.filter((props.value)=>Data.id==props.value)[0];
    console.log("remove");
} 


class Offers extends Component{
    constructor(){
        super();
        this.state={
            Data:[]
        }
        
    }
    
    componentDidMount(){
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>this.setState({Data:data}));
        setTimeout(()=>console.log(this.state.Data),1000) ;
       
    }
    AddItem=()=>{
        console.log("Add item");
        var val= 
        function f(){
            return (<div>
                <add></add>
            </div>)

            
        }
        console.log(val());
      }
    
    
   
    render(){
        const data=  this.state.Data.map((da)=>{
            return(
                
                  <div className="CardCart" key={da.id}>
                     
                  <div className="CarddataCart">
                      <img className="ProductImage"src={da.image}></img>
                      <p>{da.title}</p>
                      <button onClick={this.AddItem}><i className="fa fa-plus" aria-hidden="true" ></i></button>&nbsp; &nbsp;
                      <i className="fa fa-minus" aria-hidden="true" onClick={()=><RemoveItem value={da.id}></RemoveItem>}></i>
                  </div>

                  </div>
                 
            );   })
        return(
            <div>
               
                <div className="App">
                    <div style={{backgroundColor:'ghostwhite',height:'3rem',paddingTop:'1.5rem'}}>
                    <ul className="list-unstyled" style={{display:'inline'}}>
                        <Link className="links" to="/home" >Home</Link>
                        <Link className="links" to="/payments" >Payments</Link>
                        <Link className="links" to="/settings">Settings</Link>
                        <Link className="links" to="/offers">Products & Offers</Link>
                    </ul>
                    </div>
                    <h1>Mutual Funds</h1>
                </div>
                <div>
                
                  {data}
                  </div>
        </div>        

        );
    }
}

export default Offers;