import ReactDOM from 'react-dom'
import React from 'react'
import jquery from 'jquery';
window.jQuery = jquery;
window.$ = jquery;
import "./LayoutControl.css"

class LayoutControl extends React.Component{
    
    state = {
        radio:
        "theme1"};

    changeIframeSize(ev)
    {
        //current width is in percentage.
        
        $("#displayArea").width(($(window).width()-20)* ev.target.value/100)//ev.target.value * 100)
    }
   
    constructor(props)
    {
      //  alert(props.url);
            super();
           
            jQuery("#displayArea").src=props.url;

    }
    setTheme(e){ //alert(e);
        this.setState({
            radio: e.target.value
          })
       var iframe=document.getElementById("displayArea");
       $(iframe)[0].contentWindow.postMessage({'source':'theme', 'value':e.target.value}, window.location.href)
    
    }
    changePostPadding(ev){
        var iframe= document.getElementById("displayArea");
        $(iframe)[0].contentWindow.postMessage({'source': 'padding', 'value': ev.target.value}, window.location.href);
      
    }

    changeMargin(ev){
        var iframe = document.getElementById("displayArea");
       $(iframe)[0].contentWindow.postMessage({'source':'margin', 'value':ev.target.value}, window.location.href);
    }
    componentDidMount()
    {//this gets called after render.

      //  var width = 0.5;
        // $("#displayArea").width($("#displayArea").width * 0.5);
        //$("#displayArea").width('50%') ;  
       
    }
   render()
   {
   
    return(
    <div className="container2">
        <iframe id="displayArea" width="100%" height="100%" src={this.props.url}>

        </iframe>
        <div className="controlPanel">
            <table>
                <tr>
                    <td width="0.2" rowSpan="2">
                        <a href="/">Home</a>
                    </td>
                    <td>
                        <span>Screen size:</span>
                    </td>
                    <td>
                        <input type="range" id="frameSlider" onChange={this.changeIframeSize} min="0" max="100" defaultValue="100"/>
                    </td>

                    <td>
                        <span>Padding size (individual posts):</span>
                    </td>
                    <td>
                        <input type="range" id="postPaddingSlider" onChange={this.changePostPadding} min="0" max="100" defaultValue="36"/>
                    </td>
                    <td>

                        <span>Margin size (individual posts): </span>
                    </td>
                    <td>
                        <input type ="range" id="postMarginSlider" onChange={this.changeMargin} min="0" max="100" defaultValue="0"/>
                    </td>

                    <td>
                        <span>Themes: </span>
                          <input type="radio" value="theme1" name="theme" onChange={this.setTheme.bind(this)} checked={this.state.radio==='theme1'}/>
                          <label for="theme1" className="themeSelection">1</label>

                          <input type="radio" value="theme2" name="theme" onChange={this.setTheme.bind(this)} checked={this.state.radio==='theme2'}/>
                          <label for="theme2" className="themeSelection">2</label> 
                    </td>

                 
                    
                </tr>
                
            </table>
        </div>    
    </div>
    );
   }
  
}


export default LayoutControl;