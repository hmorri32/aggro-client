import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as sessionActions from "../../actions/sessionActions";

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, mapDispatchToProps);
