import { connect } from 'react-redux'
import Breadcrumb from '../../components/layout/Breadcrumb'

const mapStateToProps = state => ({
  visible: state.app.layout.bread
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Breadcrumb)
