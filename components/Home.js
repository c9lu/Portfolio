import ReactDOM from 'react-dom'
import React from 'react'
import jquery from 'jquery';
window.jQuery = jquery;
window.$ = jquery;
import LayoutControl from './LayoutControl'

const BoxStyles ={

    box:{
        width: 300,
        height:300,
        float:'left',
        margin:15

    },
   
    box3:{
        backgroundColor:'purple'
    },
    box1:{
        backgroundColor:'red'

    },
    box2:{
        backgroundColor: 'yellow'
    }
    ,
    label:{
        
        fontColor: 'white',
        fontSize:20,
        paddingTop:'45%',
        width:100,
        marginLeft:'auto',
        marginRight:'auto',
        
    }
}



 class Home extends React.Component{

    //this.cardUrl = ""
    

    cardClicked(gotoUrl)
    {
        this.cardUrl =  gotoUrl;
       
        //this.setState({cardUrl:gotoUrl});
        this.forceUpdate();
    }
    render(){

        return ( 
            <div id="root">
                
          {this.cardUrl==null || this.cardUrl=="" ? null: <LayoutControl url={this.cardUrl} id="layoutControl" /> }
          {this.cardUrl==null || this.cardUrl=="" ? <div id="boxes"> 
            <h1>Responsive layouts</h1>
            <div style={{height:350, margin:10}}>
              <div style={Object.assign({},BoxStyles.box, BoxStyles.box1)}>
                 <div style={BoxStyles.label}>
                  <a href="#" onClick={this.cardClicked.bind(this, "BlogLayout")}>Blog design</a>
                 </div>
              </div>
              <div style={Object.assign({}, BoxStyles.box, BoxStyles.box2)}></div>
              <div style={Object.assign({}, BoxStyles.box, BoxStyles.box3)}></div>
              </div>
              <h1 style={{clear:'both'}}>Svg animations </h1>  
             
              </div>:null}
        </div>
        )}
    

    }
export default Home;