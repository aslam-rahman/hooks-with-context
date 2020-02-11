import React, { useEffect, useContext } from 'react';
import {Context} from '../Store';
import { Button } from 'antd';

function Login() {
  const [state, dispatch] = useContext(Context);
  console.log('state', state);

  useEffect(() => {
    dispatch({type: 'SET_POSTS', payload: [{id: 1, name: 'Aslam'}]});
  });
  
  return (
    <div className="App">
      <div>Login</div>
      <Button type="primary">Button</Button>
    </div>
  );
}

export default Login;