import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as sessionActions from "../actions/sessionActions.js";

function mapStateToProps(state) {
  return {logged_in: state.sessionReducer};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps);
