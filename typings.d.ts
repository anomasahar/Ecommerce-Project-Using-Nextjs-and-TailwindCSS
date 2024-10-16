export type Product = {
    title:string,
    description:string,
    price:number,
    image:any,
    slug: string,
    _createdAt:string
}

export type User = {
    email: string;
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    phone: string;
    paymentMethod: string;
};