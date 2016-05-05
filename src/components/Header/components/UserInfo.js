import React, {PropTypes} from 'react';
import './user-info.scss';

const UserInfo = (props) => {
  return (
		<div className="UserInfo">
			<button className="UserInfo-notifications">
				<i className="fa fa-bell-o" />
				<span className="UserInfo-notifications-count">
					6
				</span>
			</button>

			<img 
				className="UserInfo-image" 
				src={props.image}
			/>

			<strong className="UserInfo-name">
				{props.userName}
			</strong>
		</div>
  );
};

UserInfo.propTypes = {
	image: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired
};

export default UserInfo;
