import { connect } from 'react-redux'
import Header from '../../components/layout/Header'

const mapStateToProps = state => ({
  user: state.app.user
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
