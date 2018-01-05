import { connect } from 'react-redux'
import Login from '../../pages/Login'

const mapStateToProps = state => ({
  user: state.app.user
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
