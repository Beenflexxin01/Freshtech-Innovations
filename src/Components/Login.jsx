function Login() {
  return (
    <>
      <div className="login">
        <div className="containr">
          <div className="flex">
            <h2 className="secondary-header home">Home</h2>
            <button className="sign-up">Sign Up</button>
          </div>
          <div className="cash-form login-form">
            <h2 className="secondary-header cash-header">Login</h2>
            <input
              type="text"
              placeholder="Login with Google"
              className="log-place network-input edit-input login-input"
            />
            <p className="continue">Or continue with</p>
            <form action="" className="cash--form">
              <nav className="login-nav">
                <ul className="cash--form-ul">
                  <li className=" form-li">
                    <label
                      htmlFor=""
                      className="label network-label login-label"
                    >
                      Email Address
                    </label>
                    <input
                      type="password"
                      className="network-input edit-input login-input"
                      placeholder="wabdotmail@gmail.com"
                    />
                  </li>
                  <li className=" form-li">
                    <label
                      htmlFor=""
                      className="label network-label login-label"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="network-input edit-input login-input"
                      placeholder="Gabon4351"
                    />
                  </li>
                  <div className="recover">
                    <p className="rem rem-svg">
                      {" "}
                      <svg
                        width="40"
                        height="20"
                        viewBox="0 0 40 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.25"
                          y="0.25"
                          width="39.5"
                          height="19.5"
                          rx="9.75"
                          fill="#EFF3FB"
                          stroke="#D7E1F4"
                          stroke-width="0.5"
                        />
                        <g filter="url(#filter0_d_1_1429)">
                          <rect
                            x="2"
                            y="2"
                            width="16"
                            height="16"
                            rx="8"
                            fill="white"
                          />
                          <rect
                            x="2.25"
                            y="2.25"
                            width="15.5"
                            height="15.5"
                            rx="7.75"
                            stroke="#EFF3FB"
                            stroke-width="0.5"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_d_1_1429"
                            x="2"
                            y="2"
                            width="18"
                            height="18"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feMorphology
                              radius="1"
                              operator="erode"
                              in="SourceAlpha"
                              result="effect1_dropShadow_1_1429"
                            />
                            <feOffset dx="1" dy="1" />
                            <feGaussianBlur stdDeviation="1" />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0.831739 0 0 0 0 0.875024 0 0 0 0 0.961594 0 0 0 1 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_1_1429"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_1_1429"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>
                      Remeber me
                    </p>
                    <p className="rem recover-p">Recover Password</p>
                  </div>
                  <li className="">
                    <input
                      type="submit"
                      value="Login"
                      className="network-input edit-input login-input submit-btn proceed"
                      placeholder="3546576433"
                    />
                  </li>
                </ul>
              </nav>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
