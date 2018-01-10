import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Sider from '../../components/layout/Sider'
import { siderRoutes } from '../../routes'

const mapStateToProps = state => ({
  visible: state.app.layout.sider,
  siderRoutes
})

const mapDispatchToProps = {}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sider))
