import { connect } from 'react-redux'
import Switcher from '../components/Switcher'

const mapStateToProps = state => ({
  headerRoutes: state.app.routes.headerRoutes,
  siderRoutes: state.app.routes.siderRoutes
})

export default connect(mapStateToProps, null)(Switcher)
