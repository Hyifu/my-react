import { connect } from 'react-redux'
import Login from '../pages/Login'
import { onAuth } from '../actions'

const mapStateToProps = state => ({
  isFetching: state.app.auth.isFetching
})

const mapDispatchToProps = {
  onAuth: onAuth.request
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
