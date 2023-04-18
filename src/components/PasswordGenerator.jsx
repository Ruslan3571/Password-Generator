import React, { useState } from 'react';
import { PasswordServise } from '../services/PasswordServise';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PasswordGenerator() {
  let [state, setState] = useState({
    generatedPassword: '',
    passwordLength: 20,
    symbol: false,
    number: false,
    lower: false,
    upper: false,
  });

  let updateInput = event => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  let updateCheck = event => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  let submit = event => {
    event.preventDefault();
    let passwordObj = PasswordServise.getPasswordObj(state);
    let thePassword = PasswordServise.generatePassword(
      passwordObj,
      state.passwordLength
    );

    setState({ ...state, generatedPassword: thePassword });
  };

  let copyToClipboard = () => {
    const passwordInput = document.querySelector(
      'input[name="generatedPassword"]'
    );
    navigator.clipboard.writeText(passwordInput.value);
    toast.success('Код успішно скопійований');
  };

  return (
    <React.Fragment>
      <div className="container mt-5" style={{ position: 'relative' }}>
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <div className="card shadow-lg">
              <div className="card-header bg-warning p-3">
                <p className="h4">Password Generator</p>
              </div>
              <div className="card-body bg-warning">
                <form onSubmit={submit}>
                  <div className="mb-2">
                    <div className="input-group">
                      <span className="input-group-text">Password</span>
                      <input
                        value={state.generatedPassword}
                        onChange={updateInput}
                        name="generatedPassword"
                        type="text"
                        className="form-control"
                        placeholder="Generated Password"
                      />
                      <span
                        onClick={() => copyToClipboard()}
                        style={{ cursor: 'pointer' }}
                        className=" input-group-text"
                      >
                        <i className="fa fa-clipboard"></i>
                      </span>
                    </div>
                  </div>
                  <div className="mb-2">
                    <div className="input-group">
                      <input
                        value={state.passwordLength}
                        onChange={updateInput}
                        name="passwordLength"
                        type="number"
                        className="form-control"
                        placeholder="Password Length"
                        required={true}
                      />
                      <span className="input-group-text">Password Length</span>
                    </div>
                  </div>
                  <div className="mb-2">
                    <div className="input-group">
                      <span className="input-group-text bg-white">
                        <input
                          onChange={updateCheck}
                          name="symbol"
                          type="checkbox"
                          className="form-check-input"
                        />
                      </span>
                      <input
                        type="text"
                        placeholder="Symbols"
                        className="form-control"
                        disabled={true}
                      />
                    </div>
                  </div>
                  <div className="mb-2">
                    <div className="input-group">
                      <span className="input-group-text bg-white">
                        <input
                          onChange={updateCheck}
                          name="number"
                          type="checkbox"
                          className="form-check-input"
                        />
                      </span>
                      <input
                        type="text"
                        placeholder="Numbers"
                        className="form-control"
                        disabled={true}
                      />
                    </div>
                  </div>
                  <div className="mb-2">
                    <div className="input-group">
                      <span className="input-group-text bg-white">
                        <input
                          onChange={updateCheck}
                          name="lower"
                          type="checkbox"
                          className="form-check-input"
                        />
                      </span>
                      <input
                        type="text"
                        placeholder="Lowercase Letters"
                        className="form-control"
                        disabled={true}
                      />
                    </div>
                  </div>
                  <div className="mb-2">
                    <div className="input-group">
                      <span className="input-group-text bg-white">
                        <input
                          onChange={updateCheck}
                          name="upper"
                          type="checkbox"
                          className="form-check-input"
                        />
                      </span>
                      <input
                        type="text"
                        placeholder="Uppercase Letters"
                        className="form-control"
                        disabled={true}
                      />
                    </div>
                  </div>
                  <div className="mb-2 mt-2">
                    <input
                      type="submit"
                      value="Generate"
                      className="btn btn-outline-dark"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="style-background"></div>
        <ToastContainer />
      </div>
    </React.Fragment>
  );
}

export default PasswordGenerator;
