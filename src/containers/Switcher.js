import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Switcher from '../components/Switcher'

const mapStateToProps = state => ({
  authorizedRoutes: state.app.routes.authorizedRoutes
})

export default withRouter(connect(mapStateToProps, null)(Switcher))
