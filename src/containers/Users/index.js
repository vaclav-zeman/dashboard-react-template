import React, { Component, PropTypes } from 'react';
import Box from '../../components/Box';
import DataTable from '../../components/DataTable';

const Users = (props) => {
  const exampleData = {
    titles: ['ID', 'Name', 'Address', 'Country', 'E-mail', 'Order ID'],
    data: [
      [1, 'Charles Johnson', 'Mackenzie 14', 'United States', 'a@jognson.com', 143563],
      [2, 'Carrie Johnson', 'Mackenzie 25', 'United States', 'carrie@johnson.com', 53969],
      [3, 'Margaret Johnson', 'Low Reed 152', 'Canada', 'spam@gmail.com', 95935],
      [4, 'Mark Johnson', 'Popocatepetel', 'Costa Rica', 'costa@rica.com', 14141]
    ]
  };

  return (
    <div>
      <Box>
        <DataTable caption="Males" data={exampleData} />

        <DataTable caption="Females" data={exampleData} />

        <hr />
        <h2>Team diversity</h2>
        <p>
          <strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. 
          Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. 
          <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. 
          Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget 
          tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis 
          pulvinar facilisis. Ut felis.
        </p>

        <img src="http://lorempixel.com/400/200/" alt="Random image" />

        <ol>
           <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
           <li>Aliquam tincidunt mauris eu risus.</li>
        </ol>

        <blockquote>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget
             ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus 
             turpis elit sit amet quam. Vivamus pretium ornare est.
          </p>
        </blockquote>

        <h3>Important, right?!</h3>

        <ul>
           <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
           <li>Aliquam tincidunt mauris eu risus.</li>
        </ul>
      </Box>
    </div>
  );
};

export default Users;
