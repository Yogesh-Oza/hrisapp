import AddressForm from "./AddressForm";

function CompanyAddress() {
  return (
    <div>
      <AddressForm title="Registered Office" isUpdateMode={false} />
      <AddressForm title="Corporate Office" isUpdateMode={true} />
      <AddressForm title="Custom Address Title" isUpdateMode={true} />
    </div>
  );
}

export default CompanyAddress;
