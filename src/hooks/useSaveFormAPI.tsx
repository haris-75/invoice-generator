

import { gql, useMutation } from '@apollo/client';

export function useSaveFormAPI() {
    const CREATE_INVOICE_MUTATION = gql`
        mutation CreateInvoice($input: CreateInvoiceInput!) {
            createInvoice(input: $input) {
            billingFrom {
                companyEmail
                companyName
                id
                billingFromAddress {
                city
                country
                postalCode
                streetAddress
                }
            }
            billingTo {
                clientEmail
                clientName
                id
                billingToAddress {
                city
                country
                postalCode
                streetAddress
                }
            }
            id
            invoiceDate
            items {
                id
                name
                price
                quantity
                totalPrice
            }
            paymentTerms
            projectDescription
            subTotal
            tax
            totalAmount
            }
        }
    `;
    const [createInvoice, { data, loading, error }] = useMutation(CREATE_INVOICE_MUTATION);
    return {
        createInvoice,  data, loading, error,
    };
}

//  createInvoice({
//       variables: {
//         input: {
//           createInvoiceAttributes: {
//             invoiceDate: "12/04/2024",
//             paymentTerms: "NET_10_DAYS",
//             projectDescription: "New Project",
//             billingToAttributes: {
//               clientName: "Hamza",
//               clientEmail: "hamza@gmail.com",
//               billingToAddressAttributes: {
//                 streetAddress: "50 J Johar Town",
//                 city: "Lahore",
//                 country: "Pakistan",
//                 postalCode: "54000",
//               },
//             },
//             billingFromAttributes: {
//               companyName: "Cogent Labs",
//               companyEmail: "cogent@gmail.com",
//               billingFromAddressAttributes: {
//                 streetAddress: "412 Township",
//                 city: "Delhi",
//                 country: "India",
//                 postalCode: "430000",
//               },
//             },
//             itemAttributes: {
//               name: "Car",
//               quantity: 2,
//               price: 23.0,
//             },
//           },
//         },
//       },
//     });