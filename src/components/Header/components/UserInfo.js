import React, {PropTypes} from 'react';
import './user-info.scss';

const UserInfo = (props) => {
	const count = props.notifications ? props.notifications.length : false;

  return (
		<div className="UserInfo">
			
				<button className="UserInfo-notifications">
					<i className="fa fa-envelope-o" />
					{ 
						count && 
						<span className="UserInfo-notifications-count">
							{count}
						</span>
					}
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
  userName: PropTypes.string.isRequired,
  notifications: PropTypes.array
};

export default UserInfo;
