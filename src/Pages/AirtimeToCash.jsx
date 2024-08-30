import Merchant from "../UI/Merchant";
function AirtimeToCash() {
  return (
    <div className="containr">
      <div className="flex">
        <h2 className="secondary-header">Airtime To Cash</h2>
        <Merchant />
      </div>

      <div className="cash-flex">
        <p className="fill copy">Fill Info</p>
        <p className="fill disabled copy">Make Payment</p>
        <p className="fill disabled copy">View Receipt</p>
      </div>

      <div className="cash-form">
        <h2 className="secondary-header cash-header">Airtime To Cash</h2>
        <form action="" className="cash--form">
          <nav className="cash--form-nav">
            <ul className="cash--form-ul">
              <li className="cash--form-li form-li">
                <div className="network">
                  <li className="network-li">
                    <label htmlFor="" className="label network-label">
                      Select Network
                    </label>
                    <select
                      name=""
                      id=""
                      className="network-input edit-input input"
                    >
                      <option value="etisalat">Etisalat</option>
                      <option value="airtel">Airtel</option>
                      <option value="mtn">Mtn</option>
                      <option value="glo">Glo</option>
                    </select>
                  </li>
                  <li className="network-li">
                    <label htmlFor="" className="label network-label">
                      Phone Number
                    </label>
                    <input
                      type="dropdwown"
                      className="network-input edit-input input"
                      placeholder="08094562827"
                    />
                  </li>
                </div>
              </li>
              <li className="cash--form-li form-li">
                <label htmlFor="" className="label network-label">
                  Amount
                </label>
                <input
                  type="dropdwown"
                  className="network-input edit-input"
                  placeholder="N 5,000"
                />
              </li>
              <li className="cash--form-li form-li">
                <label htmlFor="" className="label network-label">
                  Airtime Share Pin
                </label>
                <input
                  type="dropdwown"
                  className="network-input edit-input"
                  placeholder="3546576433"
                />
              </li>
              <li className="cash--form-li">
                <input
                  type="submit"
                  value="Proceed"
                  className="network-input edit-input submit-btn proceed"
                  placeholder="3546576433"
                />
              </li>
            </ul>
          </nav>
        </form>
      </div>
    </div>
  );
}

export default AirtimeToCash;
