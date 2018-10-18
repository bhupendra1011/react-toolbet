import React from "react";
import getUserDetails from "../actions/getUserDetails";
import { connect } from "react-redux";
import "./LandingPage.css";
// react redux is used for performance reasons instead of using low lever redux apis like getState, subscribe , dispatch

class LandingPage extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    const { isLoading, title, reviews, author } = this.props;
    return (
      <div>
        <p>
          This is the content of first Page <span>⓵</span>
        </p>
        <div className={`${!isLoading ? "App" : "App App--loading"}`}>
          <p> Book Title: {title}</p>
          <p> Author: {author}</p>
          <p> Reviews : {reviews}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps1 = ({ title, author, reviews, rating, isLoading }) => ({
  title,
  author,
  reviews,
  rating,
  isLoading
});

const mapStateToProps = state => {
  if (state.userDetails)
    return {
      title: state.userDetails.title,
      author: state.userDetails.author,
      rating: state.userDetails.rating,
      reviews: state.userDetails.reviews,
      isLoading: state.userDetails.isLoading
    };
  else return {};
};

const mapDispatchToProps = dispatch => ({
  fetchUser() {
    dispatch(getUserDetails());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPage);
