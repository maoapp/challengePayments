import React, { CSSProperties } from "react";
import { IPayment } from "../types";

interface IPaymentCardProps {
  payment: IPayment;
}

const listCardStyles: CSSProperties = {
  padding: 15,
  listStyleType: "none",
  border: "1px solid lightgray",
  borderRadius: 20,
  marginTop: 10
};

const listCardAmountStyles: CSSProperties = {
  color: "green"
};

const PaymentCard: React.FC<IPaymentCardProps> = ({ payment }) => (
  <li style={listCardStyles} key={payment.id}>
    <p>{payment.id}</p>
    <p>{payment.description}</p>
    <p style={listCardAmountStyles}>{payment.amount} usd</p>
  </li>
);

export default PaymentCard;
