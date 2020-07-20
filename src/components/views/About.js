import React from 'react';
import {withRouter} from 'react-router'
const About = (props) => {
    const { match: { params } } = props;
return (
    <div>
      <h2>About</h2>
    </div>
  )
}

export default withRouter(About);