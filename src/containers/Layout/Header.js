import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Header from '../../components/layout/Header'
import { headerRoutes } from '../../routes'

const mapStateToProps = state => ({
  visible: state.app.layout.header,
  headerRoutes
})

const mapDispatchToProps = {}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))
