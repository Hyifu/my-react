import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Sider from '../../components/layout/Sider'

const mapStateToProps = state => ({
  visible: state.app.layout.sider,
  siderNav: state.app.auth.siderNav
})

const mapDispatchToProps = {}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sider))
