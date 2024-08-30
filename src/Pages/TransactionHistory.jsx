import { useState } from "react";
import Transactions from "../Components/Transactions/Transactions";
import Merchant from "../UI/Merchant";

function TransactionHistory() {
  const transactions = [
    {
      id: 1,
      service: "Mtn Airtime VTU",
      amount: "N 100.00",
      totalAmount: "N 100.00",
      status: "Initiated",
      svg: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="24"
            height="24"
            rx="6"
            fill="#FFB547"
            fill-opacity="0.1"
          />
          <path
            d="M12 12L12 15.2M12 9.62817V9.60005M5.59998 16.0001L5.59998 7.99998C5.59998 6.67449 6.67449 5.59998 7.99998 5.59998L16 5.59998C17.3255 5.59998 18.4 6.67449 18.4 7.99998L18.4 16C18.4 17.3255 17.3255 18.4 16 18.4H7.99998C6.67449 18.4001 5.59998 17.3255 5.59998 16.0001Z"
            stroke="#FFB547"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      paymentMethod: "Transfer",
      date: "6th January, 2024, 06:29PM",
      phoneNumber: "09087645632",
      transactionNo: "17045621860850336938179613",
      action: "open",
    },
    {
      id: 2,
      service: "Airtel DATA VTU",
      amount: "N 2000.00",
      totalAmount: "N 100.00",
      status: "Successful",
      svg: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="24"
            height="24"
            rx="6"
            fill="#47CA4C"
            fill-opacity="0.1"
          />
          <path
            d="M14.4 10.4L10.8202 13.6L9.59998 12.5092M18.4 7.99998L18.4 16C18.4 17.3255 17.3255 18.4 16 18.4H7.99998C6.67449 18.4 5.59998 17.3255 5.59998 16V7.99998C5.59998 6.67449 6.67449 5.59998 7.99998 5.59998H16C17.3255 5.59998 18.4 6.67449 18.4 7.99998Z"
            stroke="#2DAE32"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      paymentMethod: "Wallet",
      date: "6th January, 2024, 06:29PM",
      phoneNumber: "09087645632",
      transactionNo: "17045621860850336938179613",
      action: "open",
    },
    {
      id: 3,
      service: "Starttime",
      amount: "N 4000.00",
      totalAmount: "N 100.00",
      status: "Failed",
      svg: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="24"
            height="24"
            rx="6"
            fill="#EE5D50"
            fill-opacity="0.1"
          />
          <path
            d="M12 12L12 15.2M12 9.62817V9.60005M5.59998 16.0001L5.59998 7.99998C5.59998 6.67449 6.67449 5.59998 7.99998 5.59998L16 5.59998C17.3255 5.59998 18.4 6.67449 18.4 7.99998L18.4 16C18.4 17.3255 17.3255 18.4 16 18.4H7.99998C6.67449 18.4001 5.59998 17.3255 5.59998 16.0001Z"
            stroke="#EE5D50"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      paymentMethod: "Card Payment",
      date: "6th January, 2024, 06:29PM",
      phoneNumber: "09087645632",
      transactionNo: "17045621860850336938179613",
      action: "open",
    },
    {
      id: 4,
      service: "DSTV",
      amount: "N 1000.00",
      totalAmount: "N 100.00",
      status: "Failed",
      svg: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="24"
            height="24"
            rx="6"
            fill="#EE5D50"
            fill-opacity="0.1"
          />
          <path
            d="M12 12L12 15.2M12 9.62817V9.60005M5.59998 16.0001L5.59998 7.99998C5.59998 6.67449 6.67449 5.59998 7.99998 5.59998L16 5.59998C17.3255 5.59998 18.4 6.67449 18.4 7.99998L18.4 16C18.4 17.3255 17.3255 18.4 16 18.4H7.99998C6.67449 18.4001 5.59998 17.3255 5.59998 16.0001Z"
            stroke="#EE5D50"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      paymentMethod: "Transfer",
      date: "6th January, 2024, 06:29PM",
      phoneNumber: "09087645632",
      transactionNo: "17045621860850336938179613",
      action: "open",
    },
    {
      id: 5,
      service: "Airtel DATA VTU",
      amount: "N 2000.00",
      totalAmount: "N 100.00",
      status: "Successful",
      svg: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="24"
            height="24"
            rx="6"
            fill="#47CA4C"
            fill-opacity="0.1"
          />
          <path
            d="M14.4 10.4L10.8202 13.6L9.59998 12.5092M18.4 7.99998L18.4 16C18.4 17.3255 17.3255 18.4 16 18.4H7.99998C6.67449 18.4 5.59998 17.3255 5.59998 16V7.99998C5.59998 6.67449 6.67449 5.59998 7.99998 5.59998H16C17.3255 5.59998 18.4 6.67449 18.4 7.99998Z"
            stroke="#2DAE32"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      paymentMethod: "Wallet",
      date: "6th January, 2024, 06:29PM",
      phoneNumber: "09087645632",
      transactionNo: "17045621860850336938179613",
      action: "open",
    },
    {
      id: 6,
      service: "Airtel DATA VTU",
      amount: "N 1000.00",
      totalAmount: "N 100.00",
      status: "Failed",
      svg: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="24"
            height="24"
            rx="6"
            fill="#EE5D50"
            fill-opacity="0.1"
          />
          <path
            d="M12 12L12 15.2M12 9.62817V9.60005M5.59998 16.0001L5.59998 7.99998C5.59998 6.67449 6.67449 5.59998 7.99998 5.59998L16 5.59998C17.3255 5.59998 18.4 6.67449 18.4 7.99998L18.4 16C18.4 17.3255 17.3255 18.4 16 18.4H7.99998C6.67449 18.4001 5.59998 17.3255 5.59998 16.0001Z"
            stroke="#EE5D50"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      paymentMethod: "Transfer",
      date: "6th January, 2024, 06:29PM",
      phoneNumber: "09087645632",
      transactionNo: "17045621860850336938179613",
      action: "open",
    },
    {
      id: 7,
      service: "Airtel DATA VTU",
      amount: "N 1000.00",
      totalAmount: "N 100.00",
      status: "Successful",
      svg: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="24"
            height="24"
            rx="6"
            fill="#47CA4C"
            fill-opacity="0.1"
          />
          <path
            d="M14.4 10.4L10.8202 13.6L9.59998 12.5092M18.4 7.99998L18.4 16C18.4 17.3255 17.3255 18.4 16 18.4H7.99998C6.67449 18.4 5.59998 17.3255 5.59998 16V7.99998C5.59998 6.67449 6.67449 5.59998 7.99998 5.59998H16C17.3255 5.59998 18.4 6.67449 18.4 7.99998Z"
            stroke="#2DAE32"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      paymentMethod: "Wallet",
      date: "6th January, 2024, 06:29PM",
      phoneNumber: "09087645632",
      transactionNo: "17045621860850336938179613",
      action: "open",
    },
    {
      id: 8,
      service: "Airtel DATA VTU",
      amount: "N 4000.00",
      totalAmount: "N 100.00",
      status: "Initiated",
      svg: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="24"
            height="24"
            rx="6"
            fill="#FFB547"
            fill-opacity="0.1"
          />
          <path
            d="M12 12L12 15.2M12 9.62817V9.60005M5.59998 16.0001L5.59998 7.99998C5.59998 6.67449 6.67449 5.59998 7.99998 5.59998L16 5.59998C17.3255 5.59998 18.4 6.67449 18.4 7.99998L18.4 16C18.4 17.3255 17.3255 18.4 16 18.4H7.99998C6.67449 18.4001 5.59998 17.3255 5.59998 16.0001Z"
            stroke="#FFB547"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      paymentMethod: "Card Payment",
      date: "6th January, 2024, 06:29PM",
      phoneNumber: "09087645632",
      transactionNo: "17045621860850336938179613",
      action: "open",
    },
    {
      id: 9,
      service: "Airtel DATA VTU",
      amount: "N 4000.00",
      totalAmount: "N 100.00",
      status: "Successful",
      svg: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="24"
            height="24"
            rx="6"
            fill="#47CA4C"
            fill-opacity="0.1"
          />
          <path
            d="M14.4 10.4L10.8202 13.6L9.59998 12.5092M18.4 7.99998L18.4 16C18.4 17.3255 17.3255 18.4 16 18.4H7.99998C6.67449 18.4 5.59998 17.3255 5.59998 16V7.99998C5.59998 6.67449 6.67449 5.59998 7.99998 5.59998H16C17.3255 5.59998 18.4 6.67449 18.4 7.99998Z"
            stroke="#2DAE32"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),

      paymentMethod: "Wallet",
      date: "6th January, 2024, 06:29PM",
      phoneNumber: "09087645632",
      transactionNo: "17045621860850336938179613",
      action: "open",
    },
  ];

  const [transaction] = useState(transactions);
  return (
    <>
      <div className="containr ">
        <div className="flex">
          <h2 className="secondary-header">Transaction History</h2>
          <Merchant />
        </div>

        <nav className="">
          <ul className="report-ul">
            <div className="flex ">
              <li className="">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.59995 12H17.4M4.19995 7.19995H19.8M10.2 16.8H13.8"
                    stroke="#78A8D9"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <input
                  type="search"
                  className=" input filter "
                  placeholder="Filter"
                />
              </li>
            </div>
          </ul>
        </nav>
        <div className="">
          <nav className="transaction-nav">
            <ul className="transaction-ul">
              <li className="transaction-li">Service</li>
              <li className="transaction-li">Amount</li>
              <li className="transaction-li">Total Amount</li>
              <li className="transaction-li">Status</li>
              <li className="transaction-li">Payment Method</li>
              <li className="transaction-li">Transaction No</li>
              <li className="transaction-li">Actions </li>
            </ul>
          </nav>
        </div>
        {transaction &&
          transaction.map((transactions, n) => (
            <Transactions transactions={transactions} key={n.id} />
          ))}
      </div>
    </>
  );
}

export default TransactionHistory;
