import { connect } from 'react-redux'
import List from '../../pages/Movie/List'
import { onMovieList } from '../../actions/index'

const mapStateToProps = state => ({
  movieList: state.movie.movieList
})

const mapDispatchToProps = {
  onMovieList: onMovieList.request
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
