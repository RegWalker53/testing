import React, { Component } from 'react';
import { connect} from 'react-redux';
import * as actions from '../actions';

class CommentBox extends Component {
  constructor (props) {
    super(props);
     this.state = { comment: '' };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState({ comment: '' });
  }

  handleChange (event) {
    this.setState({ comment: event.target.value});
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="comment-box">
        <h4>Add a comment</h4>
        <textarea
          value={this.state.comment}
          onChange={this.handleChange.bind(this)} />
        <div>
          <button action="submit">
            Submit Comment
          </button>
        </div>
      </form>
    );
  }
}
/*
function mapStateToProps(state) {
  return { comment: state.comment}
}
*/
export default connect(null, actions) (CommentBox);
