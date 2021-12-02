function mapStateToProps(component) {
	switch (component) {
		case "Component_1": {
			return function (state) {
				return {
					value_1: state.value_1
				};
			}
		}
		case "Component_2": {
			return function (state) {
				return {
					value_2: state.value_2
				};
			}
		}
		case "Component_posts": {
			return function (state) {
				return {
					posts: state.posts
				};
			}
		}
		default: return undefined;
	}
}

export default mapStateToProps;