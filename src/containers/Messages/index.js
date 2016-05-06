import React, { Component, PropTypes } from 'react';
import Box from '../../components/Box';

const Messages = (props) => {
  return (
    <div>
      <Box>
				<h2>Send a message</h2>
				<p>This is an example of form component.</p>

				<div className="row">
					<form className="Form col-md-5">
						<div className="Form-control">
							<input className="Form-field" type="text" placeholder="Name (required)" />
							<span className="Form-error">Name is required</span>
						</div>

						<div className="Form-control">
							<input className="Form-field" type="text" placeholder="Surname (required)" />
						</div>

						<div className="Form-control">
							<div className="row">
								<div className="col-md-6">
									<select className="Form-field">
										<option value="" default>Choose category</option>
										<option value="">Category</option>
									</select>
									<span className="Form-error">Category is required</span>
								</div>

								<div className="col-md-6">
									<select className="Form-field">
										<option value="" default>Choose country</option>
									</select>
								</div>
							</div>
						</div>

						<div className="Form-control">
							<textarea rows="7" placeholder="Your message (required)" className="Form-field" />
						</div>

						<div className="Form-control">
							<input className="Form-button" type="submit" value="Send" />
						</div>
					</form>
				</div>
      </Box>
    </div>
  );
};

export default Messages;
