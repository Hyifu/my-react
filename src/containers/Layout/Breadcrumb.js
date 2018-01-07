import { connect } from 'react-redux'
import Breadcrumb from '../../components/layout/Breadcrumb'

const mapStateToProps = state => ({
  user: state.app.user
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Breadcrumb)
