import "./styles.css";
import React, { CSSProperties, useEffect, useState } from "react";
import * as paymentsData from "./data.json";

// @components
import PaymentCard from "./components/PaymentCard";
import { IPayment } from "./types";

const { data } = paymentsData;

const titleStyle: CSSProperties = {
  textAlign: "center"
};

const errorStyle: CSSProperties = {
  textAlign: "center",
  color: "red"
};

export default function App() {
  const [isLoadingPayments, setIsLoadingPayments] = useState<boolean>(false);
  const [isErrorPayments, setIsErrorPayments] = useState<boolean>(false);
  const [payments, setPayments] = useState<Array<IPayment>>([]);

  useEffect(() => {
    setIsLoadingPayments(true);
    fetch("./data.json")
      .then((res) => setPayments(data))
      .catch(() => {
        setIsErrorPayments(true);
      })
      .finally(() => {
        setIsLoadingPayments(false);
      });
  }, []);

  console.log(data, "pagosss", payments);
  const renderPaymentsList = () => {
    return (
      <ul>
        {payments.map((payment) => (
          <PaymentCard payment={payment} />
        ))}
      </ul>
    );
  };

  const renderContent = () => {
    let content;

    if (isLoadingPayments) {
      content = <p style={titleStyle}>Loading Payments...</p>;
    }

    if (isErrorPayments) {
      content = <p style={errorStyle}>Error Loading Payments</p>;
    }

    if (payments) {
      content = renderPaymentsList();
    }

    return content;
  };

  return (
    <div className="App">
      <h1 style={titleStyle}>Your Payments list</h1>
      {renderContent()}
    </div>
  );
}
