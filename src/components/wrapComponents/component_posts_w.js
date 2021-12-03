import { connect } from 'react-redux';
import Component_posts from '../component_posts';
import mapStateToProps from '../../store/mapStateToProps';
import mapDispatchToProps from '../../store/mapDispatchToProps';

const COMPONENT_POSTS_W = connect(mapStateToProps("Component_posts"), mapDispatchToProps("Component_posts"))(Component_posts);

export default COMPONENT_POSTS_W;