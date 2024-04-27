import React from "react";
import Input from "./Input";

function Postform() {
  const Submit = async (data) => {};
  return (
    <div>
      <form onSubmit={}> 
        <Input label="Product Name" placeholder="apples" className="mb-4" />
        <Input type="file" label="Image" />
        <Input label="Price" placeholder="" className="mb-4" />
        <Input label="Total Quantity" placeholder="apples" className="mb-4" />
        <Input
          label="Date Bought"
          type="date"
          placeholder=""
          className="mb-4"
        />
        <Input
          label="Date Expired"
          type="date"
          placeholder=""
          className="mb-4"
        />
      </form>
    </div>
  );
}

export default Postform;
