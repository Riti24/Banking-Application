import React,{Component} from 'react';
import '../App';
import {Link} from 'react-router-dom';
import Navbar from './NavbarComponent';

// const Add=()=>{
//  return(
//      <div>byhbh</div>
//  )
    
// }

const RemoveItem=(props)=>{
    // const x=props.Data.filter((props.value)=>Data.id==props.value)[0];
    console.log("remove");
} 


class Offers extends Component{
    constructor(){
        super();
        this.state={
            Data:[],
            id:''
        }
        this.addItem= this.addItem.bind(this);
        this.renderCard= this.renderCard.bind(this)
    }
    
    componentDidMount(){
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>this.setState({Data:data}));
        setTimeout(()=>console.log(this.state.Data),1000) ;
       
    }
    addItem=(id)=>{
        this.setState({id:id})
      }
    
      renderCard=(id)=>{
        const temp="No data found";
        if(id!==""){
            return(
                    <div key={id}>
                        <h1>{this.state.Data[id].title}</h1>
                    </div>
                )
        }
        return (<div>{temp}</div>)
      }
   
    render(){

        const data=  this.state.Data.map((da)=>{
            return(
                  <div className="CardCart" key={da.id}>
                     
                  <div className="CarddataCart">
                      <img className="ProductImage"src={da.image}></img>
                      <p style={{height:"4rem", fontSize:"14px"}}>{da.title}</p>
                      <button onClick={()=>this.addItem(da.id)}><i className="fa fa-plus" aria-hidden="true" ></i></button>&nbsp; &nbsp;
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
                <div >
                    {this.renderCard(this.state.id)}
                    
                </div>
        </div>        
        );
    }
}

export default Offers;