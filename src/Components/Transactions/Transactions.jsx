function Transactions({ transactions }) {
  const {
    service,
    amount,
    totalAmount,
    status,
    paymentMethod,
    date,
    transactionNo,
    action,
    phoneNumber,
    svg,
  } = transactions;

  const transactionClass =
    status === "Initiated"
      ? "initiate"
      : status === "Successful"
        ? "successful"
        : status === "Failed"
          ? "failed"
          : "";
  return (
    <>
      <nav className="transaction-nav">
        <ul className="transaction-ul transaction--ul">
          <li className="transaction-li transaction--li transaction">
            <div className="service">
              {svg}
              {service}
            </div>
            <span className="pn">{phoneNumber}</span>
          </li>
          <li className="transaction-li transaction--li">{amount}</li>
          <li className="transaction-li transaction--li">{totalAmount}</li>
          <li className={`transaction-li transaction--li ${transactionClass}`}>
            {status}
          </li>
          <li className="transaction-li transaction--li">{paymentMethod}</li>
          <li className="transaction-li transaction--li transaction-no email-hover">
            {transactionNo}
            <span className="date">{date}</span>
          </li>
          <li className="transaction-li transaction--li copy action">
            {action}
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Transactions;
