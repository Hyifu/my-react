import { connect } from 'react-redux'
import Footer from '../../components/layout/Footer'

const mapStateToProps = state => ({
  visible: state.app.layout.footer
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
