import React from 'react'

//const styles = require("./BLayout.css");
import  "./BLayout.css"
//import "./BLayout2.css"
//import jQuery from 'jQuery'
//import "bootstrap/dist/css/bootstrap-theme.css"
import "bootstrap/dist/css/bootstrap.min.css"
import jquery from 'jquery';
window.jQuery = jquery;
window.$ = jquery;
import "bootstrap/dist/js/bootstrap.js"
//import "bootstrap"
const BlogStyle ={
    blogLayout:{width:'100%'},
    header: { width:'100%', height:'12%', display:'table'},
  
}
class BlogLayout extends React.Component{

    receiveMessage(params) {
       
        if(params.data.source=='margin')
             this.changeMargin(params.data.value);     
        else if(params.data.source=='theme'){
              this.setTheme(params.data.value);
        }
        else if(params.data.source == 'padding'){
             this.changePadding(params.data.value);
        }
    }

    componentDidMount(){
   
        $("#xSign").on("mousedown", function(){
         
            $('#sidebar').addClass('inactive');
            if($("#sidebar").hasClass("active")){
                $("#sidebar").removeClass("active");
            }
       })
        $(".navContainer").on("mousedown", function(){
      
            $("#sidebar").addClass('active');
            if($("#sidebar").hasClass("inactive")){
                $("#sidebar").removeClass("inactive");
            }
         
        })

        $(".list-content").addClass('grow');

        var self=this;
        window.addEventListener('message', self.receiveMessage.bind(this));
    }
    
    setTheme(params){ //alert(e);
        //var element = document.getElementById("blogLayout");
        //$("link").attr("href",$(this).attr('rel'));
        //element.href= e.target.value;
        var blogTitle = document.getElementById("blogtitle");
        var listContent = document.getElementsByClassName("list-content");
        var blogLayout = document.getElementById("blogLayout");
        var sideSection = document.getElementById("sideSection");
        if(params == "theme2"){
            $(blogTitle).css("background", "#4484ce");
           // $(blogLayout).css("background", "#A4D555");
            $(listContent).css("background", "#f9cf00");
            $(sideSection).css("color","#f19f4d" );
        }
        else{
            $(blogTitle).css("background",  "linear-gradient(to right, #805BA5 , #BC519E)");
        }
    
    }
    changePadding(ev){
        var element = document.getElementsByClassName("list-content");
        let paddingSize = jQuery(element).css("padding");
        var newPaddingSize = parseInt(ev);//paddingSize + ev.target.value/5;
        jQuery(element).css("padding", newPaddingSize);

    }

    changeMargin(ev){
        var element = document.getElementsByClassName("list-content");
        let marginSize = jQuery(element).css("margin");
        var newPaddingSize = parseInt(ev);//paddingSize + ev.target.value/5;
        jQuery(element).css("margin", newPaddingSize);

    }
    render(){

        return (
            <div>
                <div id="blogLayout">
                    <nav id="sidebar" >

                      
                        <div id="menulinks">
                            <div id="cross">
                                <span id="xSign">X</span>
                            </div>
                            <div id="links">  
                                <div className="sidelinks" >
                                    <a href="#" className="linkText" >Link 1</a>
                                </div>
                                <div className="sidelinks">
                                    <a href="#" className="linkText">Link 2</a>
                                </div>
                            </div>
                        </div>


                    </nav>

                    <div className="topHeader">

                        <div className="navContainer">
                            <div className="sandwichNav"></div>
                            <div className="sandwichNav"></div>
                            <div className="sandwichNav"></div>
                            <div className="sandwichNav"></div>
                        </div>
                        <nav className="nav2">

                            <a href="#" className="links">Link 1</a>
                            <a href="#" className="links">Link 2</a>
                            <a href="#" className="links">link 3</a>
                            <a href="#" className="links">link 4</a>
                            <a href="#" className="links">link 5</a>
                        </nav>
                    </div>
                    <header style={BlogStyle.header}>
                        <div id="blogtitle">
                            <span>Blog Title</span>
                        </div>


                    </header>

                    <div id="blogBody">
                        <div id="imagePanel">
                            <div id="cooking"><span className="imgLbl">Cooking</span></div>
                            <div id="pingpong"></div>
                            <div id="art"></div>
                        </div>

                        <div className="clear">
                            <div id="allPosts">
                                <ul className="list">
                                    <li className="list-item">
                                        <div className="list-content">
                                            <h2>Title</h2>
                                            <img src="http://baconmockup.com/250/200" alt="" />
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, eveniet.</p>

                                        </div>
                                    </li>

                                    <li className="list-item">
                                        <div className="list-content">
                                            <h2>Title</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, vel, quia. Non nostrum, consectetur ipsum doloribus enim maiores a laudantium, odio vel blanditiis id ea dolorum expedita fugit incidunt commodi.</p>

                                            <span>Read more</span>
                                        </div>
                                    </li>

                                    <li className="list-item">
                                        <div className="list-content">
                                            <h2>Title</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, vel, quia. Non nostrum, consectetur ipsum doloribus enim maiores a laudantium.</p>

                                        </div>
                                    </li>

                                    <li className="list-item">
                                        <div className="list-content">
                                            <h2>Title</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur optio ipsa fuga vel repudiandae impedit illum delectus nihil error animi nobis quaerat quidem, amet, praesentium aspernatur inventore numquam! Totam, dolorem inventore reprehenderit, culpa obcaecati!</p>

                                        </div>
                                    </li>

                                    <li className="list-item">
                                        <div className="list-content">
                                            <h2>Title</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo veniam tempore vero velit deleniti corporis recusandae placeat eum repellendus modi architecto.</p>

                                        </div>
                                    </li>


                                    <li className="list-item">
                                        <div className="list-content">
                                            <h2>Title</h2>
                                            <img src="http://baconmockup.com/250/200" alt="" />
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestiae esse.</p>

                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div id="sideSection">
                                <span className="catlinks heading"><b>CATEGORIES</b></span>
                                <a href="#" className="catlinks">Category 1</a>
                                <a href="#" className="catlinks">Category 2</a>
                                <a href="#" className="catlinks">Category 3</a>

                                <span className="catlinks heading2"><b>RECENT POSTS</b></span>
                                <a href="#" className="catlinks">Post 1</a>
                                <a href="#" className="catlinks">Post 2</a>
                                <a href="#" className="catlinks">Post 3</a>
                            </div>
                            <div class="clear"></div>
                        </div>
                    </div>
                </div>

            </div>
                
            );
    }
}

export default BlogLayout;