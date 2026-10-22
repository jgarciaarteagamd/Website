// Practice details shown on the page and in the structured data (Base.astro).
// Change the phone numbers, hours or address here only.

export type Lang = 'es' | 'en';

export const SITE_URL = 'https://jgarciaarteaga.pro';
export const INFO_URL = 'https://info.jgarciaarteaga.pro';
export const BIO_URL = 'https://bio.jgarciaarteaga.pro';
export const CONTACT_EMAIL = 'jgarciaarteaga.pro@gmail.com';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/jgarciaarteaga';
export const COLEGIADO = '212105263';

/** The patient site and the Bio open in English when linked from the English page. */
export const infoUrl = (lang: Lang, path = '') => `${INFO_URL}/${lang}/${path}`;
export const bioUrl = (lang: Lang) => (lang === 'en' ? `${BIO_URL}/?lang=en` : `${BIO_URL}/`);

export const address = {
  street: 'C/ Punta Umbría, 8',
  postalCode: '21002',
  city: 'Huelva',
  region: 'Andalucía',
  country: 'ES',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Hospital+Quir%C3%B3nsalud+Huelva%2C+Calle+Punta+Umbr%C3%ADa+8%2C+21002+Huelva',
};

export interface Phone {
  /** As dialled: +34 and the number, no spaces. */
  tel: string;
  /** As read: grouped the Spanish way. */
  shown: string;
}

const phone = (digits: string): Phone => ({
  tel: `+34${digits}`,
  shown: digits.replace(/^(\d{3})(\d{2})(\d{2})(\d{2})$/, '$1 $2 $3 $4'),
});

export const otosur = {
  name: 'Instituto Otosur',
  phone: phone('959105447'),
  mobile: phone('691765586'),
  email: 'info@otorrinohuelva.es',
  url: 'https://www.otorrinohuelva.es/',
  shownUrl: 'otorrinohuelva.es',
};

export const hospital = {
  name: 'Hospital Quirónsalud Huelva',
  phone: { tel: '+34959242100', shown: '959 242 100' } satisfies Phone,
  url: 'https://www.quironsalud.com/huelva/es',
  shownUrl: 'quironsalud.com/huelva',
};

/**
 * Usual clinic hours. They change from week to week, so the page says they are
 * a guide and asks patients to confirm when booking. `alternate` marks a
 * session held every other week (left out of the structured data).
 */
export interface Session {
  day: 1 | 2 | 3 | 4 | 5;
  opens: string;
  closes: string;
  alternate?: boolean;
}

export const sessions: Session[] = [
  { day: 1, opens: '09:00', closes: '13:00' },
  { day: 2, opens: '09:00', closes: '13:00' },
  { day: 2, opens: '16:30', closes: '20:00' },
  { day: 3, opens: '09:00', closes: '13:00', alternate: true },
  { day: 4, opens: '09:00', closes: '13:00' },
  { day: 4, opens: '16:30', closes: '20:00' },
  { day: 5, opens: '09:00', closes: '13:00' },
];

export const SCHEMA_DAYS = ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] as const;
