import { connect } from 'react-redux'
import Sider from '../../components/layout/Sider'

const mapStateToProps = state => ({
  visible: state.app.layout.sider
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Sider)
