type BillingAddress = {
  name: string;
  email: string;
  streetAddress: string;
  country: string;
  city: string;
  postalCode: number;
}
type PreviewCardProps = {
  date: string;
  terms: string;
  billedFrom: BillingAddress;
  billedTo: BillingAddress;
  description: string;
}

const AddressPreviewer = ({ name, email, streetAddress, city, country, postalCode }: BillingAddress) =>
  <>
    {name && <span>{name}</span>}
    {email && <span>{email}</span>}
    {streetAddress && <span>{streetAddress}</span>}
    {city && <span>{`${city}, ${postalCode}`}</span>}
    {country && <span>{country}</span>}
  </>

export function PreviewInvoice({date, terms, billedFrom, billedTo, description}: PreviewCardProps) {
  return (
      <div className='grid grid-cols-2 gap-4 pt-4'>
        <div className='col-span-1 gap-2 flex flex-col'>
          <span className='text-base font-normal text-gray'>Invoice Date</span>
          {date && <span>{ date }</span>}
        </div>
        <div className='col-span-1 gap-2 flex flex-col'>
          <span className='text-base font-normal text-gray'>Payment Terms</span>
          {terms && <span>{ terms }</span>}
        </div>
        <div className='col-span-1 gap-2 flex flex-col'>
          <span className='text-base font-normal text-gray'>Billed From</span>
          <AddressPreviewer
            name={billedFrom?.name}
            email={billedFrom?.email}
            streetAddress={billedFrom?.streetAddress}
            city={billedFrom?.city}
            country={billedFrom?.country}
            postalCode={billedFrom?.postalCode}
          />
        </div>
        <div className='col-span-1 gap-2 flex flex-col'>
          <span className='text-base font-normal text-gray'>Billed to</span>
          <AddressPreviewer
            name={billedTo?.name}
            email={billedTo?.email}
            streetAddress={billedTo?.streetAddress}
            city={billedTo?.city}
            country={billedTo?.country}
            postalCode={billedTo?.postalCode}
          />
        </div>
        <div className='col-span-2 gap-2 flex flex-col'>
          <span className='text-base font-normal text-gray'>Project Description</span>
          {description && <span>{description}</span>}
        </div>
      </div>
  )
}
