/**
 * Single source of truth for the restaurant's contact details.
 *
 * ⚠️ PLACEHOLDERS — every value below was invented for the build and must be
 * replaced with the restaurant's real details before this site goes live.
 * Publishing a wrong phone number or address is worse than publishing none.
 */
export const CONTACT = {
  phone: '022 000 000',
  /** Digits only, for the tel: link. */
  phoneHref: '+381220000000',
  email: 'rezervacije@restoranprica.com',
  address: 'Novi Banovci, obala Dunava',
  /** Full postal address, used in the footer and structured data. */
  addressFull: 'Novi Banovci, Stara Pazova, Vojvodina, Srbija',
  hours: 'Utorak – nedelja, 11–23h',
  capacity: 'Do 120 mesta',
  instagram: 'https://www.instagram.com/',
  facebook: 'https://www.facebook.com/',
  tripadvisor: 'https://www.tripadvisor.com/',
} as const
