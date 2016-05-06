import React, { Component, PropTypes } from 'react';
import Box from '../../components/Box';
import DataTable from '../../components/DataTable';

const Messages = (props) => {
	const exampleData = {
    titles: ['ID', 'Name', 'Address', 'Country', 'E-mail'],
    data: [
      [1, 'Charles Johnson', 'Mackenzie 14', 'United States', 'a@jognson.com'],
      [2, 'Carrie Johnson', 'Mackenzie 25', 'United States', 'carrie@johnson.com'],
      [3, 'Margaret Johnson', 'Low Reed 152', 'Canada', 'spam@gmail.com'],
      [4, 'Mark Johnson', 'Popocatepetel', 'Costa Rica', 'costa@rica.com']
    ]
  };

  return (
    <div>
      <Box>
				<h2>Send a message</h2>
				<p>This is an example of form component.</p>

				<div className="row">
					<form className="Form col-md-5">
						<div className="Form-control">
							<input className="Form-field" type="text" placeholder="E-mail (required)" />
							<span className="Form-error">E-mail is required</span>
						</div>

						<div className="Form-control">
							<input className="Form-field" type="text" placeholder="Name (required)" />
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

					<div className="col-md-7">
						<DataTable data={exampleData} />
					</div>
				</div>
      </Box>
    </div>
  );
};

export default Messages;
