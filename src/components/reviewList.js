import React from 'react'
import ReactStars from 'react-stars';
import Review from './review';
export default class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {reviews: []};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event);
   let temp = {reviews: [...this.state.reviews]};
   let value = event.target.value;
   temp.reviews.push({value: value});
    console.log(temp);
   this.setState(temp);
  
  }

  handleSubmit(event) {
    event.preventDefault();
  }
  render() {
    return(
    <div>
      <form onSubmit={this.handleChange}>
        <label>
          <input type="text"   onBlur={this.handleChange}/>
        </label>
        <input type='button' value="Submit" />
      </form>

     {this.state.reviews.map( x => (
       <Review value={x.value}/>
       
     )

     

     ) }
    </div>
    )
  }
}
