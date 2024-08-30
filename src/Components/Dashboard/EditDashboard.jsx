import credit from "../../../public/Images/upload.png";
import Merchant from "../../UI/Merchant";
function EditDashboard() {
  return (
    <div className="containr">
      <div className="flex">
        <h2 className="secondary-header">Welcome, Lawal Wahab</h2>
        <Merchant />
      </div>

      <div className="grid-2">
        <div className="grid-2-cols">
          <div className="balance uploads">
            <img src={credit} alt="" className="upload-img" />
            <p className="upload-text copy">Upload Image</p>
          </div>

          <div className="balance  upload-details uploads">
            <nav className="upload-nav">
              <ul className="upload-ul">
                <li className="upload-li details">Name</li>
                <li className="upload-li details">Email</li>
                <li className="upload-li details">Phone Number</li>
                <li className="upload-li details">Account Status</li>
                <li className="upload-li details">Referral Link</li>
                <li className="upload-li copy">Edit Details</li>
              </ul>
            </nav>
            <nav className="upload-nav">
              <ul className="upload-ul">
                <li className="upload-li">Lawal Wahab Babatunde</li>
                <li className="upload-li">wabdotmail@gmail.com</li>
                <li className="upload-li">0906 856 2949</li>
                <li className="upload-li status">Active</li>
                <li className="upload-li upload-flex">
                  www.subsum.com/tre/wd...
                  <span className="absolute copy cpy">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.99997 14.4001L3.59997 14.4001C2.93723 14.4001 2.39997 13.8628 2.39997 13.2001L2.39997 4.4001C2.39997 3.29553 3.29541 2.4001 4.39997 2.4001L13.2 2.4001C13.8627 2.4001 14.4 2.93736 14.4 3.6001L14.4 6.0001M12 21.6001L19.2 21.6001C20.5255 21.6001 21.6 20.5256 21.6 19.2001L21.6 12.0001C21.6 10.6746 20.5255 9.6001 19.2 9.6001L12 9.6001C10.6745 9.6001 9.59997 10.6746 9.59997 12.0001L9.59997 19.2001C9.59997 20.5256 10.6745 21.6001 12 21.6001Z"
                        stroke="#4169E1"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                    copy
                  </span>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="grid-2-cols">
          <div className="edit-form">
            <button className="change">Change Password</button>
            <button className="change pin">Change Pin</button>
          </div>
          <form action="" className="form-edit">
            <nav className="form-nav">
              <ul className="form-ul">
                <li className="form-li">
                  <label htmlFor="Current Password" className="label">
                    Current Password
                  </label>
                  <input
                    type="password"
                    className="edit-input"
                    placeholder="Enter Current Password"
                  />
                </li>
                <li className="form-li">
                  <label htmlFor="Current Password" className="label">
                    New Password
                  </label>
                  <input
                    type="password"
                    className="edit-input"
                    placeholder="Enter New Password"
                  />
                </li>
                <li className="form-li">
                  <label htmlFor="Current Password" className="label">
                    {" "}
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    className="edit-input"
                    placeholder="Enter New Password"
                  />
                </li>
                <li className="form-li">
                  <input
                    type="submit"
                    value="Submit"
                    className="edit-input submit-btn"
                    placeholder="Enter New Password"
                    disabled
                  />
                </li>
              </ul>
            </nav>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditDashboard;
