import ReactDOM from 'react-dom'
import React from 'react'
import jquery from 'jquery';
window.jQuery = jquery;
window.$ = jquery;
import LayoutControl from './LayoutControl'
import Skills from './Skills'
import "./Home.css"

const BoxStyles ={

    box:{
        width: '28%',
        height:'50%',
        float:'left',
        margin:20

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
    
   
}



 class Home extends React.Component{

    //this.cardUrl = ""
    constructor(){
        super();

        this.state = {
            open:false
        }
    }

    cardClicked(gotoUrl)
    {
        $("#boxes").hide();
        this.cardUrl =  gotoUrl;
        $("#"+gotoUrl + "Page").show();
        //this.setState({cardUrl:gotoUrl});
        this.forceUpdate();
    }
    cardAnimate(elementId){
     
        $("#boxes").hide();
        this.setState({open: true});
        $("#"+elementId + "Page").show();
        // $("#"+elementId).addClass("animateBox");

    }
    componentDidMount(){
        $(".individualPage").hide();
    }
    render(){

        return (
            <div id="Home">

                <a href="/"><h1>Chen's portfolio</h1></a>
                <div id="boxes" style={{ height: '100%', margin: 10 }}>
                    
                  
                        <div style={Object.assign({}, BoxStyles.box, BoxStyles.box1)}>
                            <div style={BoxStyles.label}>
                                <a href="#" onClick={this.cardClicked.bind(this, "BlogLayout")}>Responsive Blog design</a>
                            </div>
                        </div>
                        <div style={Object.assign({}, BoxStyles.box, BoxStyles.box2)} onClick={this.cardAnimate.bind(this, "Skills")}>
                            <span>Skills</span>
                        </div>

                        <div style={Object.assign({}, BoxStyles.box, BoxStyles.box3)}></div>
                    
                    </div>

                    <div id="SkillsPage" className="individualPage">
                        <Skills isOpen={this.state.open} id="Skills" />
                    </div>
                    <div className="individualPage" id="BlogLayoutPage">
                        <LayoutControl id="layoutControl"  url={this.cardUrl}/>
                    </div>
                
            </div>
        )}
    

    }
export default Home;