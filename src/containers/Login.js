import { connect } from 'react-redux'
import Login from '../pages/Login'
import { onLogin } from '../actions/index'

const mapStateToProps = state => ({
  user: state.app.user
})

const mapDispatchToProps = {
  onLogin: onLogin.request
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
