import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signIn } from '../actions/loggedActions';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logged = useSelector(state => state.logged);

  useEffect(() => {
    if (logged) {
      return navigate('/')
    };
  })


  const handleLogin = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    dispatch(signIn(name));
  };

  return (
    <div className="card">
      <div className="card-body">
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" name="name" />
          </div>
          <button type="submit" className="btn btn-primary">Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
