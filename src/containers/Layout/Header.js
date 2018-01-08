import { connect } from 'react-redux'
import Header from '../../components/layout/Header'

const mapStateToProps = state => ({
  visible: state.app.layout.header
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
