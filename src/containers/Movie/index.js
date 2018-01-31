import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Movie from '../../pages/Movie'

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Movie))
