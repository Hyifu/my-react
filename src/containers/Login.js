import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Login from '../pages/Login'
import { onAuth } from '../actions'

const mapStateToProps = state => ({
  isFetching: state.app.auth.isFetching
})

const mapDispatchToProps = {
  onAuth: onAuth.request
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))
