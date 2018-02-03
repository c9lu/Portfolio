import React, { StatelessComponent } from 'react'
import * as d3 from 'd3';
import "./Skills.css"
var skills = [
    {"C#":["OPG - Retails Sales Analysis tool", "OPG - Capital Tracking", "OPG - MyTeam Web API", "OPG - Collaboration Framework" , "OPG - Residential module Web API", "AIMIA - travel mobile applications", 
    "AIMIA - RBC Batch Process", "Microsoft C# Certification"]},
    {"ASP.NET_MVC":["OPG - Retails Sales Analysis tool", "OPG - Capital Tracking", "OPG - Collaboration Framework" ,"OPG - Mobile workflow approval optimization"]},
    {"ASP.NET_Web_API" :["OPG - MyTeam Web API","OPG - Residential module Web API" ]},
    {"React.js": ["OPG - Corporate website enhancements", "My portfolio"]},
    {"Angular_2" :["My blog website","ML - Spotify data analysis"]},
    {"JAVA" :["ML - Spotify data analysis", "Ryerson - school projects"]},
    {"Spring_Framework":["ML - Spotify data analysis"]},
    {"TypeScript":["My blog website","ML - Spotify data analysis" , "Oxford - My Team enhancements", "Oxford - Residential enhancements"]},
    {"JavaScript":["My portfolio", "My blog website", "OPG - Collaboration Framework", "OPG - Retails Sales Analysis tool",  "OPG - Capital Tracking"]}
]
var colorDictionary= [{"OPG - Retails Sales Analysis tool": "yellow"},{"My portfolio": "red"},{"OPG - Collaboration Framework": "blue"},
{"My blog website":"green" }, {"ML - Spotify data analysis":"purple"}, {"Microsoft C# Certification": "pink"},{"My blog website":"orange"}, 
{"OPG - Mobile workflow approval optimization": "brown"}, {"OPG - Residential module Web API" :"green"}]
class Skills extends React.Component{

    

    constructor(){
        super();
       
    }

    getObjectKeys(){
        var keys= [];
        skills.map(function(e){
            keys.push(Object.getOwnPropertyNames(e)[0]);

        })
        return keys; 
    }
    componentDidMount(){
        
        this.keys = this.getObjectKeys();

       
        this.width = window.innerWidth*0.9;
        this.height = window.innerHeight* 0.9;
        var self = this;
          this.svg = d3.select(".container").append("svg")
              .attr("width", self.width)
              .attr("height", self.height);

    this.xAxis= this.renderXAxis(this.svg);
    this.yAxis = this.renderYAxis();
    this.zAxis = d3.scaleOrdinal().range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"])

    this.renderBars();
    this.generateLegend();
    }
    renderXAxis(_svg){
        var _keys=this.keys;
        var x = d3.scaleBand().rangeRound([0,this.width]).paddingInner(0.1).domain(_keys);//d3.scaleOrdinal().domain(Object.keys(skills)).range([0,1000]).padding(1);
  
  
        //.scaleBand().rangeRound([0, this.width]).padding(0.1),
     //   y= d3.scaleLinear().rangeRound([this.height,0]);

        var xAxis = d3.axisBottom().scale(x);
       
        _svg.append("g").attr("class", "x axis") .attr("transform", "translate(40," + 800 + ")").call(xAxis);

        this.svg = _svg;
        return x;

    }

    renderBars(){
        var stack= d3.stack();
        var _keys = this.keys;
        var _xAxis = this.xAxis;
        var _yAxis = this.yAxis;
        var _zAxis = this.zAxis.domain(_keys);

        /*var dataset = d3.stack().keys(_keys).map(function(project){
            return skills.map(
                function(d){
                    return {x: Object.getOwnPropertyNames(d.data), y: }
                }

            )
        })*/
        var self=this;

       var bars = this.svg.append("g").selectAll("g").data(stack.keys(_keys)(skills))
        
                  .enter().append("g")
                  .selectAll("rect").data(d=>d).enter().append("rect")
                  .attr("fill", function(d,i)
                  {
                      self.getGridientColors(d.data[Object.getOwnPropertyNames(d.data)],  Object.getOwnPropertyNames(d.data)["0"])
                      return "url(#myPattern_"+ Object.getOwnPropertyNames(d.data)["0"]+")" //zAxis(d.key);//colorDictionary[i];
                })
               //  .selectAll("rect").data(d=>d).enter().append("rect")
              
                .attr("x", function(d, i){
                   return _xAxis(Object.getOwnPropertyNames(d.data)[0])+100
                })
                .attr("y", function(d){
                    return _yAxis(d.data[Object.getOwnPropertyNames(d.data)].length)
                })
                .attr('width', 60)
                .attr("height", function(d)
                {
                    return 800-_yAxis(d.data[Object.getOwnPropertyNames(d.data)].length) 
                })
            ;
      
    }
    generateLegend(){
        var legend = this.svg.selectAll(".legend").data(colorDictionary).enter().append("g").attr("class", "legend")
                     .attr("transform", function(d,i){
                         return "translate(10, "+ 200 + ")"
                     });
                    legend.append("rect")
                    .attr("x", function(d, i){
                        if((i+1)%3==1){
                            return 150;
                        }
                        else if((i+1)%3==2){
                            return 500;
                        }
                        
                        else{
                            return 850;
                        }
                    } )
                    .attr("y", function(d,i){
                        if(i>=3&& i<6){
                            return 2*30;
                        }
                        else if(i<3){
                            return 30;
                        }
                        else if(i>=6 && i<9){
                            return 90;

                        }

                    })
                    .attr("width", 15)
                    .attr("height", 15)
                    .style("fill", function(d, i){
                        return Object.values(d)[0];
                    })

                    legend.append("text").attr("x", function(d,i){
                        if((i+1)%3==1){
                            return 150+25;
                        }
                        else if((i+1)%3==2){
                            return 500+25;
                        }
                        
                        else{
                            return 850+25;
                        }
                        
                        
                        
                        //return (i+1)*170
                    }).attr("y", function(d,i){
                        if(i>=3&& i<6){
                            return 2*30+10;
                        }
                        else if(i<3){
                            return 30+10;
                        }
                        else if(i>=6 && i<9){
                            return 90+10;

                        }

                    })
                    .text(function(d, i){
                        return Object.keys(d)[0];
                    })
                
                
    }
    getGridientColors(projects, key){
        var _xAxis = this.xAxis;
        var _yAxis = this.yAxis;

        var height =  800-_yAxis(projects.length)
       
        var self= this;
        var i =-1;
        var pattern = self.svg.append("svg:defs")
            .append("svg:pattern")
            .attr("width", 60)
             .attr("height",height)
             .attr("id", "myPattern_"+key)
             .attr("patternUnits","userSpaceOnUse");

        projects.forEach(function(p){
            i=i+1;

            


            var c = colorDictionary.filter(project => Object.keys(project)[0]==p);
            //colorDictionary[p];
            pattern.append("rect").attr("height",height/projects.length )
            .attr("width", 60)
            .attr("y", function(){
                    return (height/projects.length)*(i);

            } )
            .attr("fill", function(){if (c!== undefined && c.length>0) 
                return c[0][p]; 
                else return null;})
                
                ;

            
        })


    
    }

    renderYAxis(){
        var self= this;

        var y = d3.scaleLinear().domain([0,20]).range([800, 0]).nice();//.paddingInner(1)//.tickSize(1);//.nice();
        var yAxis = d3.axisLeft(y);//.tickSize(1);
     //   yAxis =  yAxis.tickPadding(1);
        this.svg.append("g").attr("class", "y axis")
        .attr("transform", "translate(40," + 0 + ")")
        .call(yAxis)
       /*
        .append("text")
       
        .attr('x',2)
        
        .attr('y',1)
        .attr("dy", 1)
        .style("text-anchor", "middle")
        .style('fill', 'black')
         .text("asdfasdf")*/
        ;
        return y;
    }
    render(){
      //  alert(this.props.isOpen);
     if(this.props.isOpen==true){
      //      $(".container").removeClass("invisible")
            $(".container").addClass("animateBox");
     }
        return (
            <div className="container">
             

            </div>
        )

    }

}

export default Skills;