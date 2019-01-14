import React , {Component} from 'react';
import './PictureHolder.css';

class PictureHolder extends Component {

  state = {
    GallerySize:0,
    IncrementDiv : 0,
    IncrementDivsor : 0,
    Counter:0,
    StartIndex:0,
    GalleryArray : [],
    Photos : [
      {src:'./images/Screenshot (0).jpg'},
      {src:'./images/Screenshot (1).png'},
      {src:'./images/Screenshot (2).png'},
      {src:'./images/Screenshot (3).png'},
      {src:'./images/Screenshot (4).png'},
      {src:'./images/Screenshot (5).png'},
      {src:'./images/Screenshot (6).png'},
      {src:'./images/Screenshot (7).png'},
      {src:'./images/Screenshot (8).png'},
      {src:'./images/Screenshot (9).png'},
      {src:'./images/Screenshot (10).png'},
    ]
  }

  componentWillMount() //This method is only called one time, which is before the initial render. Since this method is called before render() our Component will not have access to the Native UI (DOM, etc.). We also will not have access to the children refs, because they are not created yet.
  {
    var GallerySize = this.state.Photos.length;
    var DivValue = Math.floor(this.state.Photos.length/10);
    var DivisorValue = this.state.Photos.length%10;
    var Increase = 0;
    var NextStartIndex = this.state.StartIndex+10;
    var PhotoArray = [];

    for(var i=this.state.StartIndex;i<this.state.StartIndex+10;i++)
    {
        PhotoArray.push(this.state.Photos[i]);
    }
    Increase++;
    this.setState({GalleryArray:PhotoArray,Counter:Increase,StartIndex:NextStartIndex,IncrementDiv:DivValue,IncrementDivsor:DivisorValue,GallerySize:GallerySize});
    console.log('GalleryArray '+this.state.GalleryArray);
  }

  componentWillReceiveProps(nextProps)
  {
    //console.log('[Inside PictureHolder]',nextProps,this.props.ScrollCheck);
    if(this.props.ScrollCheck ===true)
    {
      console.log('HEEEEEEEEEE!');
      this.LoadMore();
    }
  }

  LoadMore = () => {
      //console.log('Hello its started!! ',this.state.StartIndex);


          for(var i=0;i<10;i++)
          {
            //PhotoArray.push(this.state.Photos[i]);
            this.state.GalleryArray.push(this.state.Photos[i]);
            //PhotoArray.splice(this.state.StartIndex,0,this.state.Photos[i]);
          }
      /*else{
        for(var j=this.state.StartIndex;j<this.state.StartIndex+this.state.IncrementDivsor;j++)
        {
          console.log('this.state.StartIndex+this.state.IncrementDivsor '+this.state.StartIndex+this.state.IncrementDivsor);
          this.state.GalleryArray.push(this.state.Photos[j]);
        }
      }*/
      this.setState({GalleryArray:this.state.GalleryArray});
      //console.log('GalleryArray '+this.state.GalleryArray);
  }

  Clicked = () =>{
    console.log('It has been clicked!');
  }
  render(){
    var Images = null;

    Images = this.state.GalleryArray.map( (loc,index) => {
    //console.log('index length '+this.state.Photos.length);
    //console.log('LOC  ',index,loc);
    /*if((loc === 'undefined')||(index >= this.state.GallerySize))
    {
      return <p>Load More Photo To Keep Scrolling!!</p>
    }*/
    return <p id={this.props.GridClick?"ImageId":"NoImageId"}><img src={require(`${loc.src}`)} key={index.src}  id={this.props.GridClick?"ImageSize":"NoImageSize"} alt="Pics" onClick={this.Clicked.bind(this) }/></p>
    });
    return(
      <div className={this.props.GridClick?"Poster":"NonPoster"} >
          {Images}
      </div>
    )
  }
}

export default PictureHolder;
