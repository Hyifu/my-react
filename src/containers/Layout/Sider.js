import { connect } from 'react-redux'
import Sider from '../../components/layout/Sider'

const mapStateToProps = state => ({
  user: state.app.user
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Sider)
