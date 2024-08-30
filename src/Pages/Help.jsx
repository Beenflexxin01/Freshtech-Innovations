import Merchant from "../UI/Merchant";

function Help() {
  return (
    <>
      <div className="containr">
        <div className="flex">
          <h2 className="secondary-header">Help And Support</h2>
          <Merchant />
        </div>
        <div className="grid-2">
          <div className=" support-grid">
            <div className="sp">
              <svg
                width="66"
                height="66"
                viewBox="0 0 66 66"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="66" height="66" rx="18" fill="#EE5D50" />
                <path
                  d="M33.5998 42.6H27.5998C26.2743 42.6 25.1998 41.5254 25.1998 40.2L25.1999 25.8C25.1999 24.4745 26.2744 23.4 27.5999 23.4H38.4002C39.7257 23.4 40.8002 24.4745 40.8002 25.8V30M36.0002 36.5479C36.0002 35.2512 37.0747 34.2 38.4002 34.2C39.7257 34.2 40.8002 35.2512 40.8002 36.5479C40.8002 37.8446 39.7257 38.8958 38.4002 38.8958M38.4002 42.0903V42"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div>
                <p className="support-text">Frequently Asked Questions</p>
                <p className="support-text copy">
                  See FAQ{" "}
                  <svg
                    width="12"
                    height="11"
                    viewBox="0 0 12 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.83333 1.125L11 5.5M11 5.5L6.83333 9.875M11 5.5L1 5.5"
                      stroke="#4169E1"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </p>
              </div>
            </div>
          </div>

          <div className=" support-grid">
            <div className="sp">
              <svg
                width="66"
                height="66"
                viewBox="0 0 66 66"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="66" height="66" rx="18" fill="#FFB547" />
                <path
                  d="M25.5325 31.9334C25.5325 27.2205 29.353 23.4 34.0658 23.4C38.7787 23.4 42.5992 27.2205 42.5992 31.9334C42.5992 33.16 42.3403 34.3263 41.8743 35.3804L42.6008 40.4659L38.2426 39.3763C37.008 40.0707 35.5832 40.4667 34.0658 40.4667M23.4002 37.2667C23.4002 38.0334 23.5619 38.7623 23.8532 39.4211L23.3992 42.5995L26.1228 41.9186C26.8943 42.3525 27.7848 42.6 28.733 42.6C31.6782 42.6 34.0658 40.2122 34.0658 37.2667C34.0658 34.3212 31.6782 31.9334 28.733 31.9334C25.7878 31.9334 23.4002 34.3212 23.4002 37.2667Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <div>
                <p className="support-text">Live Chat</p>
                <p className="support-text copy">
                  Chat Now{" "}
                  <svg
                    width="12"
                    height="11"
                    viewBox="0 0 12 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.83333 1.125L11 5.5M11 5.5L6.83333 9.875M11 5.5L1 5.5"
                      stroke="#4169E1"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </p>
              </div>
            </div>
          </div>
          <div className=" support-grid">
            <div className="sp">
              <svg
                width="66"
                height="66"
                viewBox="0 0 66 66"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="66" height="66" rx="18" fill="#2DAE32" />
                <path
                  d="M39.9999 25.9101C39.0832 24.984 37.9911 24.2497 36.7876 23.7501C35.5841 23.2505 34.2931 22.9955 32.99 23.0001C27.53 23.0001 23.08 27.45 23.08 32.91C23.08 34.66 23.54 36.36 24.4 37.86L23 43L28.25 41.62C29.7 42.41 31.33 42.83 32.99 42.83C38.45 42.83 42.8999 38.38 42.8999 32.92C42.8999 30.27 41.8699 27.78 39.9999 25.9101ZM32.99 41.15C31.51 41.15 30.06 40.75 28.79 40L28.49 39.82L25.37 40.64L26.2 37.6L26 37.29C25.1777 35.977 24.7411 34.4593 24.74 32.91C24.74 28.37 28.44 24.6701 32.98 24.6701C35.18 24.6701 37.25 25.5301 38.8 27.09C39.5674 27.854 40.1756 28.7627 40.5893 29.7635C41.003 30.7642 41.214 31.8371 41.2099 32.92C41.2299 37.46 37.53 41.15 32.99 41.15ZM37.51 34.99C37.26 34.87 36.04 34.27 35.82 34.18C35.59 34.1 35.43 34.06 35.26 34.3C35.09 34.55 34.62 35.11 34.48 35.27C34.34 35.44 34.19 35.46 33.94 35.33C33.69 35.21 32.89 34.94 31.95 34.1C31.21 33.44 30.72 32.63 30.57 32.38C30.43 32.13 30.55 32 30.68 31.87C30.79 31.76 30.93 31.58 31.05 31.44C31.17 31.3 31.22 31.19 31.3 31.03C31.38 30.86 31.34 30.72 31.28 30.6C31.22 30.48 30.72 29.26 30.52 28.76C30.32 28.28 30.11 28.34 29.96 28.33H29.48C29.31 28.33 29.05 28.39 28.82 28.64C28.6 28.89 27.96 29.49 27.96 30.71C27.96 31.93 28.85 33.11 28.97 33.27C29.09 33.44 30.72 35.94 33.2 37.01C33.79 37.27 34.25 37.42 34.61 37.53C35.2 37.72 35.74 37.69 36.17 37.63C36.65 37.56 37.64 37.03 37.84 36.45C38.05 35.87 38.05 35.38 37.98 35.27C37.91 35.16 37.76 35.11 37.51 34.99Z"
                  fill="white"
                />
              </svg>
              <div>
                <p className="support-text">Whatsapp</p>
                <p className="support-text copy">
                  Drop a Message{" "}
                  <svg
                    width="12"
                    height="11"
                    viewBox="0 0 12 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.83333 1.125L11 5.5M11 5.5L6.83333 9.875M11 5.5L1 5.5"
                      stroke="#4169E1"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </p>
              </div>
            </div>
          </div>
          <div className=" support-grid">
            <div className="sp">
              <svg
                width="66"
                height="66"
                viewBox="0 0 66 66"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="66" height="66" rx="18" fill="#4169E1" />
                <path
                  d="M33.8711 27.326C35.071 27.5271 36.1609 28.0938 37.0311 28.9621C37.9012 29.8305 38.4645 30.9182 38.6706 32.1157M34.0543 23.4C36.1884 23.7611 38.1348 24.7711 39.6828 26.3113C41.2307 27.8561 42.2382 29.7985 42.6 31.9283M40.933 40.4017C40.933 40.4017 39.7743 41.5397 39.4904 41.8733C39.0278 42.3669 38.4828 42.6 37.7684 42.6C37.6997 42.6 37.6264 42.6 37.5577 42.5954C36.1976 42.5086 34.9336 41.9785 33.9856 41.526C31.3935 40.2737 29.1174 38.4959 27.2259 36.2427C25.6643 34.3643 24.6201 32.6275 23.9286 30.7628C23.5027 29.6248 23.3469 28.7382 23.4156 27.9018C23.4614 27.3671 23.6675 26.9238 24.0476 26.5444L25.6093 24.9859C25.8337 24.7757 26.0719 24.6614 26.3054 24.6614C26.5939 24.6614 26.8275 24.8351 26.9741 24.9814C26.9786 24.9859 26.9832 24.9905 26.9878 24.9951C27.2672 25.2556 27.5328 25.5252 27.8121 25.8132C27.9541 25.9594 28.1007 26.1057 28.2472 26.2565L29.4975 27.5042C29.9829 27.9886 29.9829 28.4365 29.4975 28.921C29.3647 29.0535 29.2364 29.1861 29.1036 29.314C28.7189 29.7071 29.0211 29.4055 28.6227 29.762C28.6135 29.7711 28.6044 29.7757 28.5998 29.7848C28.2059 30.1779 28.2792 30.5618 28.3616 30.8223C28.3662 30.836 28.3708 30.8497 28.3754 30.8634C28.7005 31.6495 29.1585 32.3899 29.8546 33.272L29.8592 33.2766C31.1232 34.8305 32.4559 36.0416 33.926 36.9694C34.1137 37.0882 34.3061 37.1842 34.4893 37.2756C34.6542 37.3579 34.8099 37.4356 34.9427 37.5179C34.961 37.527 34.9793 37.5407 34.9976 37.5499C35.1533 37.6275 35.2999 37.6641 35.451 37.6641C35.8311 37.6641 36.0693 37.4265 36.1471 37.3488L37.0448 36.4529C37.2005 36.2975 37.4478 36.1101 37.7363 36.1101C38.0203 36.1101 38.2539 36.2884 38.3958 36.4438C38.4004 36.4483 38.4004 36.4483 38.405 36.4529L40.9284 38.9712C41.4001 39.4373 40.933 40.4017 40.933 40.4017Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div>
                <p className="support-text">Phone Call</p>
                <p className="support-text copy">
                  Call Us{" "}
                  <svg
                    width="12"
                    height="11"
                    viewBox="0 0 12 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.83333 1.125L11 5.5M11 5.5L6.83333 9.875M11 5.5L1 5.5"
                      stroke="#4169E1"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </p>
              </div>
            </div>
          </div>

          <div className=" support-grid">
            <div className="sp">
              <svg
                width="66"
                height="66"
                viewBox="0 0 66 66"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="66" height="66" rx="18" fill="#EE5D50" />
                <path
                  d="M33 33L33 37.8M33 29.4422V29.4M23.4 33C23.4 27.6981 27.6981 23.4 33 23.4C38.302 23.4 42.6 27.6981 42.6 33C42.6 38.302 38.302 42.6 33 42.6C27.6981 42.6 23.4 38.302 23.4 33Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div>
                <p className="support-text">Report Our Support</p>
                <p className="support-text copy">
                  Not Satisfied?{" "}
                  <svg
                    width="12"
                    height="11"
                    viewBox="0 0 12 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.83333 1.125L11 5.5M11 5.5L6.83333 9.875M11 5.5L1 5.5"
                      stroke="#4169E1"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </p>
              </div>
            </div>
          </div>
          <div className=" support-grid">
            <div className="sp">
              <div>
                <svg
                  width="66"
                  height="66"
                  viewBox="0 0 66 66"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="svg"
                >
                  <rect width="66" height="66" rx="18" fill="#2DAE32" />
                  <path
                    d="M32.495 23.7139C32.7016 23.2954 33.2984 23.2954 33.505 23.7139L36.179 29.1321C36.261 29.2983 36.4196 29.4135 36.603 29.4401L42.5823 30.309C43.0441 30.3761 43.2286 30.9437 42.8944 31.2695L38.5677 35.4869C38.435 35.6163 38.3744 35.8027 38.4058 35.9854L39.4271 41.9404C39.506 42.4005 39.0232 42.7513 38.6101 42.5341L33.2621 39.7225C33.098 39.6362 32.902 39.6362 32.738 39.7225L27.39 42.5341C26.9768 42.7513 26.494 42.4005 26.5729 41.9404L27.5943 35.9854C27.6256 35.8027 27.565 35.6163 27.4323 35.4869L23.1057 31.2695C22.7714 30.9437 22.9559 30.3761 23.4178 30.309L29.397 29.4401C29.5804 29.4135 29.739 29.2983 29.821 29.1321L32.495 23.7139Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div>
                <p className="support-text"> Review Our App</p>
                <p className="support-text copy soon">Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Help;
