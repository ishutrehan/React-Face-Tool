import React from 'react';

class App extends React.Component {


	constructor(){
        super();
        this._nextClick = this._nextClick.bind(this);
        this._prevClick = this._prevClick.bind(this);
        this._handleClick = this._handleClick.bind(this);
        this.indx = 0;
        this.count = 0;

        this.X = 0;
        this.Y = 0;
        this.state = { indx : this.indx };     
    }
    
    _handleClick(e){
    	console.log(this.count)
    	if(this.count > 7) return false;
    	this.count = this.count + 1;
	    this.X = e.nativeEvent.offsetX;
	    this.Y = e.nativeEvent.offsetY;

	    var elemDiv = document.createElement('div');
	    var elemDivCount = document.createElement('div');
	    elemDivCount.innerHTML = this.count;
		elemDiv.style.cssText = 'position:absolute;top:'+this.Y+'px;left:'+this.X+'px;width:12px;height:12px;opacity:0.8;z-index:100; border:3px solid #6ddcc1; border-radius:1000px; box-sizing:border-box';
		elemDivCount.style.cssText = 'position:absolute;top:'+(this.Y - 17)+'px;left:'+(this.X+2)+'px;width:12px;height:12px;opacity:0.8;z-index:100;color:#6ddcc1;font-weight:bold';
		document.body.appendChild(elemDiv);
		document.body.appendChild(elemDivCount);

    }
    _prevClick(e) {
       this.indx--;
       if(this.indx < 1) {
    		this.indx = 0;
    	}
       this.setState({indx : this.indx});
    }
    _nextClick(e) {
    	if(this.indx > 1) {
    		return false;
    	}
        this.indx++;
        this.setState({indx : this.indx});
    }

	render() {
	  var mainImg = this.props.images[this.state.indx];
	  return(
			<div className="main">
	          <div>
	            <img className="focusMainImg" src={mainImg} onClick={this._handleClick} />
	          </div>
	          <div>
		      	<button type="button" onClick={this._prevClick}>Previous</button>&nbsp;&nbsp;
		      	<button type="button" onClick={this._nextClick}>Next</button>
	          </div>
	    	</div>
		);
	};
}


class ImageSlideShow extends React.Component {
    constructor(props, context){
        super(props, context);
        this.state = {};
        this.state.images= [];
		this.state.images = ['https://www.famousbirthdays.com/headshots/vin-diesel-2.jpg','https://www.famousbirthdays.com/headshots/paul-walker-6.jpg','https://pbs.twimg.com/profile_images/540619771901792256/rumsGVVS.jpeg'];
    }
    
	render(){
		return (
            <div>
				<App images = {this.state.images} />
            </div>
   		)
	}
}

export default ImageSlideShow;