export interface Name {
  title, first, middle, last, suffix: string|null;
}

export interface Address{
  street, organization, country, city, state, postal: string|null
}

export interface IContact {
  id: bigint|null;
  name: Name;
  phone: string|null;
  mobile: string|null;
  email: string|null;
  address: Address;
}

export class Contact implements IContact{
  id: bigint|null;
  name: Name;
  phone: string|null;
  mobile: string|null;
  email: string|null;
  address: Address;
  constructor(
    id: bigint|null,
    name: Name,
    email: string|null,
    phone: string|null,
    mobile: string|null,
    address: Address)
  {
     this.id = id;
     this.name = name;
     this.email = email;
     this.phone = phone;
     this.mobile = mobile;
     this.address = address;
  }
}

