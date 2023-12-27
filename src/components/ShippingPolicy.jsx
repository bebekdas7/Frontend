import React from "react";
import "../cssfiles/shippingpolicy.css";

const ShippingPolicy = () => {
  return (
    <div className="sp container">
      <div className="sp-header">
        <h1>Shipping Policy</h1>
      </div>
      <div className="sp-main">
        <h3>Processing</h3>
        <p>
          Once we receive your order please allow 48 to 72 hours for processing
          (excluding Saturdays, Sundays, and National Holidays). All orders are
          subject to processing time that is separate from the time it takes for
          a shipment to reach its destination once it has been fulfilled. After
          processing is completed, you will receive a tracking number
          immediately. Please note, your tracking number will update once your
          order is booked for pickup in our system.
        </p>
        <h3>Purchasing</h3>
        <p>
          Keep in mind we cannot guarantee we have the items in your shopping
          cart in stock. For this reason, if an item sells out, you will be
          contacted via phone and email about your missing item. At the time of
          processing your purchase, we will show you the available shipping
          methods and their cost.
        </p>

        <h3>Shipping</h3>
        <p>
          Please allow <strong>2-4</strong> business days for domestic shipping.
          To ensure your package arrives in the advertised time, please make
          sure your address is entered correctly and includes all required and
          relevant information. Correct street numbers, abbreviations,
          buildings, and apartment numbers are very critical for ensuring timely
          deliveries. Future Chaos is not responsible for lost, stolen,
          incorrect address, or misplaced packages. Once a package has left our
          office, and in the hands of the post office we have no control over
          the package.
        </p>
      </div>
    </div>
  );
};

export default ShippingPolicy;
