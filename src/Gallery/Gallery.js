import React , {Component} from 'react';
import './Gallery.css';
import PictureHolder from '../PictureHolder/PictureHolder';
import Header from './Header/Header';
import View from './View/View';

class Gallery extends Component{
  constructor(props){
    super(props)
    this.ScrollRef = React.createRef()
  }
  state = {
    GridClick:true,
    ListClick:false,
    ScrollCheck:false,
    SizeWidth:window.innerWidth
  }
  componentDidMount(){
    window.addEventListener("resize",this.updateDimension);
  }
  updateDimension = () => {
    console.log('Resize '+window.innerWidth);
    this.setState({SizeWidth:window.innerWidth});
  }

  ScrollPage = ()=>
  {
    //console.log('Hello');
    //console.log('listElm.scroll  '+this.ScrollRef.current.scrollTop+" "+this.ScrollRef.current.clientHeight+" "+this.ScrollRef.current.scrollHeight);
    //this.setState({ScrollTop:this.ScrollRef.current.scrollTop , ClientHeight:this.ScrollRef.current.clientHeight, ScrollHeight:this.ScrollRef.current.scrollHeight });
    if(this.ScrollRef.current.scrollTop+this.ScrollRef.current.clientHeight>=this.ScrollRef.current.scrollHeight-20)
    {
      this.setState({ScrollCheck:true})
    }
    //console.log("screen.width "+window.innerWidth);
    /*  if(this.ScrollRef.current.scrollTop + this.ScrollRef.current.clientHeight >= this.ScrollRef.current.scrollHeight)
      {
        console.log('It\'s passes');
      }*/

  }
GridClick = () =>{
  this.setState({GridClick:true,ListClick:false});
}
ListClick = () =>{
  this.setState({GridClick:false,ListClick:true});
}

  render()
  {
    let Display = <View GridClick={this.GridClick.bind()} ListClick={this.ListClick.bind()} />;
    if(this.state.SizeWidth >600)
    {
      Display = <View GridClick={this.GridClick.bind()} ListClick={this.ListClick.bind()} />;
    }
    else {
      Display=null;
    }
    return(
        <div className="Picture" onScroll={this.ScrollPage.bind(this)} ref={this.ScrollRef} id="style-7">
          <Header />
          {Display}
          <PictureHolder ScrollCheck={this.state.ScrollCheck}  GridClick={this.state.GridClick} ListClick={this.state.ListClick}  SizeWidth={this.state.SizeWidth}/>
        </div>
    );
  }
}

export default Gallery;
