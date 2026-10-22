// Every text on the landing page, in Spanish (at /) and English (at /en/).
// Spanish is the main language: it is the one patients in Huelva search in.
import { COLEGIADO, type Lang } from '../data/site';

export interface Service {
  title: string;
  text: string;
  /** Common problems, kept as plain words patients search for. */
  items: string[];
  /** Path on the patient site, after /<lang>/. */
  info: string;
}

export interface Test {
  title: string;
  text: string;
  info?: string;
}

export interface Faq {
  q: string;
  a: string;
}

export const ui = {
  es: {
    brand: 'Juan García Arteaga, ORL',
    brandSub: 'Otorrino en Huelva',
    doctor: 'Dr. Juan García Arteaga',
    role: 'Otorrinolaringólogo',
    skip: 'Saltar al contenido',
    langName: 'English',
    langShort: 'EN',
    lightMode: 'Modo claro',
    nav: { services: 'Qué trato', booking: 'Cita', patients: 'Pacientes', about: 'Trayectoria' },

    title: 'Otorrinolaringólogo en Huelva · Dr. Juan García Arteaga',
    description: 'Otorrino en Huelva: Dr. Juan García Arteaga, en el Instituto Otosur del Hospital Quirónsalud Huelva. Oído, vértigo, nariz, garganta, voz y ORL infantil.',
    ogTitle: 'Dr. Juan García Arteaga · Otorrinolaringólogo en Huelva',

    heroLabel: 'Otorrinolaringología · Huelva',
    h1: 'Otorrinolaringólogo en Huelva',
    lead: 'Atiendo problemas de oído, audición y vértigo, nariz y senos, garganta, voz y cuello, en adultos y niños. Paso consulta en el Instituto Otosur, dentro del Hospital Quirónsalud Huelva.',
    callCta: 'Pedir cita',
    whereCta: 'Cómo llegar',
    facts: [
      ['Centro', 'Instituto Otosur'],
      ['Hospital', 'Quirónsalud Huelva'],
      ['Pacientes', 'Adultos y niños'],
      ['Colegiado', `Nº ${COLEGIADO} · Huelva`],
    ] as [string, string][],
    holoAlt: 'Holograma de una cabeza con el oído, la nariz, la garganta y el cuello iluminados',

    servicesLabel: 'Consulta de otorrino',
    servicesTitle: 'Qué trato en la consulta',
    servicesText: 'La otorrinolaringología se ocupa del oído, la nariz, la garganta, la voz y el cuello. Estos son los motivos de consulta más frecuentes:',
    readMore: 'Información para pacientes',
    services: [
      {
        title: 'Oído y audición',
        text: 'Dolor y supuración de oído, oídos taponados y pérdida de audición a cualquier edad.',
        items: ['Otitis media y externa', 'Tapón de cera', 'Hipoacusia', 'Acúfenos', 'Trompa de Eustaquio'],
        info: 'zonas/oido/',
      },
      {
        title: 'Vértigo y mareo',
        text: 'Muchos vértigos nacen en el oído interno y tienen tratamiento en la propia consulta.',
        items: ['Vértigo posicional (VPPB)', 'Migraña vestibular', 'Enfermedad de Ménière', 'Inestabilidad'],
        info: 'zonas/oido/vertigo-posicional-paroxistico-benigno/',
      },
      {
        title: 'Nariz y senos',
        text: 'Nariz tapada, mocos que no se van, alergia, sangrado y pérdida de olfato.',
        items: ['Obstrucción nasal', 'Sinusitis', 'Rinitis', 'Sangrado de nariz', 'Pólipos'],
        info: 'zonas/nariz/',
      },
      {
        title: 'Garganta',
        text: 'Dolor de garganta repetido, carraspeo, sensación de nudo y problemas al tragar.',
        items: ['Amigdalitis', 'Reflujo faringolaríngeo', 'Ronquido', 'Disfagia'],
        info: 'zonas/garganta/',
      },
      {
        title: 'Voz',
        text: 'Ronquera que no mejora, cansancio de la voz y cuidado de la voz profesional.',
        items: ['Disfonía', 'Nódulos y pólipos', 'Higiene vocal', 'Laringitis'],
        info: 'zonas/laringe/',
      },
      {
        title: 'ORL infantil',
        text: 'Otitis de repetición, vegetaciones, amígdalas grandes y dudas sobre la audición y el habla.',
        items: ['Otitis serosa', 'Vegetaciones', 'Ronquido infantil', 'Audición y lenguaje'],
        info: 'zonas/oido/desarrollo-audicion-lenguaje-ninos/',
      },
      {
        title: 'Cuello y glándulas salivales',
        text: 'Bultos en el cuello, ganglios que no bajan e inflamación de la parótida o la submaxilar.',
        items: ['Ganglios', 'Quistes', 'Piedras salivales', 'Parotiditis'],
        info: 'zonas/glandulas-salivales/',
      },
      {
        title: 'Mandíbula y dolor de oído',
        text: 'Un dolor de oído con el oído sano puede venir de la articulación de la mandíbula.',
        items: ['Trastorno de la ATM', 'Bruxismo', 'Chasquidos'],
        info: 'zonas/oido/trastorno-atm-sindrome-costen/',
      },
    ] as Service[],

    testsLabel: 'Exploración',
    testsTitle: 'Pruebas de la consulta de otorrino',
    testsText: 'Según el caso, la valoración puede incluir alguna de estas pruebas. Ninguna requiere ingreso.',
    tests: [
      { title: 'Otoscopia', text: 'Ver el conducto y el tímpano con luz y aumento.' },
      { title: 'Audiometría', text: 'Mide cuánto oyes en cada oído y en cada tono.', info: 'zonas/oido/audiometria-tonal/' },
      { title: 'Timpanometría', text: 'Comprueba cómo se mueve el tímpano y si hay líquido detrás.', info: 'zonas/oido/timpanometria-impedanciometria/' },
      { title: 'Fibroscopia', text: 'Una cámara fina por la nariz para ver nariz, garganta y cuerdas vocales.', info: 'zonas/garganta/fibroscopia-nasal-nasofibrolaringoscopia/' },
    ] as Test[],

    bookingLabel: 'Horario y cita',
    bookingTitle: 'Pedir cita con el otorrino',
    bookingText: 'Las citas se dan a través del Instituto Otosur o del Hospital Quirónsalud Huelva. Al llamar, pide cita con el Dr. García Arteaga.',
    otosurNote: 'Servicio de otorrinolaringología',
    hospitalNote: 'Centralita de citas del hospital',
    phoneLabel: 'Teléfono',
    mobileLabel: 'Móvil',
    emailLabel: 'Correo',
    webLabel: 'Web',
    call: 'Llamar',
    scheduleTitle: 'Horario de consulta',
    scheduleNote: 'Horario orientativo: puede cambiar de una semana a otra. Confírmalo al pedir cita.',
    days: ['', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'],
    morning: 'Mañana',
    afternoon: 'Tarde',
    alternate: 'cada 15 días',
    closed: '—',
    whereTitle: 'Dónde atiendo',
    whereText: 'Instituto Otosur, en el Hospital Quirónsalud Huelva.',
    openMap: 'Abrir en el mapa',

    aboutLabel: 'Sobre mí',
    aboutTitle: 'Dr. Juan García Arteaga',
    aboutText: [
      'Soy médico especialista en Otorrinolaringología y paso consulta en Huelva desde 2023. Me formé como especialista en la Universidad de Buenos Aires, con rotaciones en el Hospital Pediátrico Sor María Ludovica (La Plata) y en el Hospital de la Santa Creu i Sant Pau (Barcelona), y tengo formación específica en otorrinolaringología pediátrica.',
      'En la consulta me tomo el tiempo de explicar qué ocurre, qué opciones hay y cómo cuidarte. Por eso escribo también fichas para pacientes, que puedes leer antes o después de la visita.',
    ],
    portraitAlt: 'Retrato del Dr. Juan García Arteaga',
    credentials: [
      'Especialista en Otorrinolaringología (UBA), título reconocido por el Ministerio de Sanidad',
      'Colegiado en el Ilustre Colegio Oficial de Médicos de Huelva',
    ],
    aboutCta: 'Ver trayectoria completa',

    patientsLabel: 'Información para pacientes',
    patientsTitle: 'Fichas escritas por tu otorrino',
    patientsText: 'Información clara sobre enfermedades, pruebas, cirugías y cuidados de oído, nariz y garganta, con un holograma interactivo de la cabeza y el cuello.',
    patientsCta: 'Ir a la información para pacientes',
    patientsPopular: 'Lo más consultado',
    popular: [
      ['Vértigo posicional (VPPB)', 'zonas/oido/vertigo-posicional-paroxistico-benigno/'],
      ['Otitis media en niños', 'zonas/oido/otitis-media/'],
      ['Cómo destapar los oídos', 'zonas/oido/ejercicios-trompa-eustaquio/'],
      ['Sangrado de nariz', 'zonas/nariz/sangrado-nariz-primeros-auxilios/'],
      ['Reflujo silencioso', 'zonas/garganta/reflujo-faringolaringeo-silencioso/'],
      ['Piedras salivales', 'zonas/glandulas-salivales/piedras-salivales-sialolitiasis/'],
    ] as [string, string][],

    faqLabel: 'Preguntas frecuentes',
    faqTitle: 'Antes de venir a la consulta',
    faqs: [
      {
        q: '¿Cómo pido cita con el otorrino en Huelva?',
        a: 'Llama al Instituto Otosur (959 10 54 47 o 691 76 55 86) o a la centralita de citas del Hospital Quirónsalud Huelva (959 242 100) y pide cita con el Dr. Juan García Arteaga.',
      },
      {
        q: '¿Dónde está la consulta?',
        a: 'En el Instituto Otosur, dentro del Hospital Quirónsalud Huelva, en la calle Punta Umbría, 8 (21002 Huelva).',
      },
      {
        q: '¿Qué horario tiene la consulta?',
        a: 'Normalmente de lunes a viernes de 9:00 a 13:00 (los miércoles, cada 15 días) y los martes y jueves por la tarde de 16:30 a 20:00. El horario puede variar, así que confírmalo al pedir cita.',
      },
      {
        q: '¿Atiendes a niños?',
        a: 'Sí. Veo a niños y adultos, y tengo formación específica en otorrinolaringología pediátrica: otitis de repetición, vegetaciones, amígdalas, ronquido y dudas sobre la audición y el lenguaje.',
      },
      {
        q: '¿Puedo ir con mi seguro médico?',
        a: 'Depende de tu compañía. Al pedir cita, pregunta en el Instituto Otosur o en el Hospital Quirónsalud Huelva si tu seguro o mutua cubre la consulta; si no, puedes venir como paciente privado.',
      },
      {
        q: '¿Qué llevo a la primera consulta?',
        a: 'Tu documento de identidad, la tarjeta del seguro si tienes, los informes y pruebas previas (audiometrías, escáner, analíticas) y la lista de medicamentos que tomas.',
      },
      {
        q: '¿Puedo consultar un caso por correo o por esta web?',
        a: 'No. Esta web es informativa y no sirve para consultas médicas. Para valorar tu caso hace falta una exploración en consulta. Ante una urgencia, llama al 112.',
      },
    ] as Faq[],

    disclaimer: 'Información divulgativa. No sustituye a la consulta médica. Ante una urgencia, llama al 112.',
    legalNotice: 'Aviso legal',
    privacy: 'Privacidad',
    cookies: 'Cookies',
    patientsLink: 'Información para pacientes',
    mobileCall: 'Llamar para pedir cita',
  },

  en: {
    brand: 'Juan Garcia Arteaga, ENT',
    brandSub: 'ENT specialist in Huelva',
    doctor: 'Dr. Juan García Arteaga',
    role: 'Ear, Nose and Throat specialist',
    skip: 'Skip to content',
    langName: 'Español',
    langShort: 'ES',
    lightMode: 'Light mode',
    nav: { services: 'Conditions', booking: 'Appointments', patients: 'Patients', about: 'Background' },

    title: 'ENT Specialist in Huelva, Spain · Dr. Juan García Arteaga',
    description: 'ENT doctor in Huelva, Spain: Dr. Juan García Arteaga at Instituto Otosur, Hospital Quirónsalud Huelva. Ears, dizziness, nose, throat, voice and children.',
    ogTitle: 'Dr. Juan García Arteaga · ENT specialist in Huelva',

    heroLabel: 'Ear, Nose and Throat · Huelva, Spain',
    h1: 'ENT specialist in Huelva',
    lead: 'I see adults and children with ear, hearing and balance problems, nose and sinus complaints, throat and voice problems, and lumps in the neck. My clinic is at Instituto Otosur, inside Hospital Quirónsalud Huelva.',
    callCta: 'Book an appointment',
    whereCta: 'Directions',
    facts: [
      ['Clinic', 'Instituto Otosur'],
      ['Hospital', 'Quirónsalud Huelva'],
      ['Patients', 'Adults and children'],
      ['Registration', `No. ${COLEGIADO} · Huelva`],
    ] as [string, string][],
    holoAlt: 'Hologram of a head with the ear, nose, throat and neck lit up',

    servicesLabel: 'ENT clinic',
    servicesTitle: 'What I treat',
    servicesText: 'Otolaryngology (ENT) covers the ear, nose, throat, voice and neck. These are the most common reasons people come to see me:',
    readMore: 'Patient information',
    services: [
      {
        title: 'Ears and hearing',
        text: 'Earache, discharge, blocked ears and hearing loss at any age.',
        items: ['Ear infections', 'Earwax', 'Hearing loss', 'Tinnitus', 'Eustachian tube'],
        info: 'areas/ear/',
      },
      {
        title: 'Vertigo and dizziness',
        text: 'Many cases of vertigo start in the inner ear and can be treated in the clinic itself.',
        items: ['Positional vertigo (BPPV)', 'Vestibular migraine', 'Ménière’s disease', 'Unsteadiness'],
        info: 'areas/ear/benign-paroxysmal-positional-vertigo/',
      },
      {
        title: 'Nose and sinuses',
        text: 'Blocked nose, catarrh that will not clear, allergy, nosebleeds and loss of smell.',
        items: ['Nasal obstruction', 'Sinusitis', 'Rhinitis', 'Nosebleeds', 'Polyps'],
        info: 'areas/nose/',
      },
      {
        title: 'Throat',
        text: 'Recurrent sore throats, throat clearing, a lump in the throat and trouble swallowing.',
        items: ['Tonsillitis', 'Silent reflux', 'Snoring', 'Dysphagia'],
        info: 'areas/throat/',
      },
      {
        title: 'Voice',
        text: 'Hoarseness that does not get better, a tired voice and care of the professional voice.',
        items: ['Dysphonia', 'Nodules and polyps', 'Vocal hygiene', 'Laryngitis'],
        info: 'areas/larynx/',
      },
      {
        title: 'Children’s ENT',
        text: 'Repeated ear infections, adenoids, large tonsils and questions about hearing and speech.',
        items: ['Glue ear', 'Adenoids', 'Snoring in children', 'Hearing and speech'],
        info: 'areas/ear/child-hearing-speech-milestones/',
      },
      {
        title: 'Neck and salivary glands',
        text: 'Lumps in the neck, glands that stay swollen and swelling of the parotid or submandibular gland.',
        items: ['Lymph nodes', 'Cysts', 'Salivary stones', 'Parotitis'],
        info: 'areas/salivary-glands/',
      },
      {
        title: 'Jaw and ear pain',
        text: 'Earache with a healthy ear can come from the jaw joint.',
        items: ['TMJ disorder', 'Teeth grinding', 'Clicking jaw'],
        info: 'areas/ear/tmj-disorder-costen-syndrome/',
      },
    ] as Service[],

    testsLabel: 'Examination',
    testsTitle: 'Tests in the ENT clinic',
    testsText: 'Depending on the problem, your visit may include one of these tests. None of them needs a hospital stay.',
    tests: [
      { title: 'Otoscopy', text: 'Looking at the ear canal and eardrum with light and magnification.' },
      { title: 'Audiometry', text: 'Measures how well you hear in each ear and at each pitch.', info: 'areas/ear/pure-tone-audiometry-hearing-test/' },
      { title: 'Tympanometry', text: 'Checks how the eardrum moves and whether there is fluid behind it.', info: 'areas/ear/tympanometry-middle-ear-test/' },
      { title: 'Nasendoscopy', text: 'A thin camera through the nose to see the nose, throat and vocal cords.', info: 'areas/throat/flexible-nasendoscopy/' },
    ] as Test[],

    bookingLabel: 'Hours and appointments',
    bookingTitle: 'Book an ENT appointment',
    bookingText: 'Appointments are made through Instituto Otosur or Hospital Quirónsalud Huelva. When you call, ask for Dr. García Arteaga. Consultations and the phone lines are in Spanish.',
    otosurNote: 'Ear, nose and throat service',
    hospitalNote: 'Hospital appointment line',
    phoneLabel: 'Phone',
    mobileLabel: 'Mobile',
    emailLabel: 'Email',
    webLabel: 'Website',
    call: 'Call',
    scheduleTitle: 'Clinic hours',
    scheduleNote: 'These hours are a guide and can change from week to week. Please confirm them when you book.',
    days: ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    morning: 'Morning',
    afternoon: 'Afternoon',
    alternate: 'every other week',
    closed: '—',
    whereTitle: 'Where to find me',
    whereText: 'Instituto Otosur, at Hospital Quirónsalud Huelva.',
    openMap: 'Open in maps',

    aboutLabel: 'About me',
    aboutTitle: 'Dr. Juan García Arteaga',
    aboutText: [
      'I am an Ear, Nose and Throat (ENT) specialist and have been seeing patients in Huelva since 2023. I trained as a specialist at the University of Buenos Aires, with rotations at Sor María Ludovica Children’s Hospital (La Plata) and Hospital de la Santa Creu i Sant Pau (Barcelona), and I have specific training in paediatric ENT.',
      'In clinic I take the time to explain what is going on, what the options are and how to look after yourself. That is why I also write patient information pages you can read before or after your visit.',
    ],
    portraitAlt: 'Portrait of Dr. Juan García Arteaga',
    credentials: [
      'ENT specialist (University of Buenos Aires), qualification recognised by the Spanish Ministry of Health',
      'Registered with the Official College of Physicians of Huelva',
    ],
    aboutCta: 'See full background',

    patientsLabel: 'Patient information',
    patientsTitle: 'Pages written by your ENT specialist',
    patientsText: 'Clear information about ear, nose and throat conditions, tests, operations and self-care, with an interactive hologram of the head and neck.',
    patientsCta: 'Go to patient information',
    patientsPopular: 'Most read',
    popular: [
      ['Positional vertigo (BPPV)', 'areas/ear/benign-paroxysmal-positional-vertigo/'],
      ['Middle ear infection', 'areas/ear/middle-ear-infection/'],
      ['How to unblock your ears', 'areas/ear/unblock-ears-exercises/'],
      ['Nosebleeds', 'areas/nose/how-to-stop-a-nosebleed/'],
      ['Silent reflux', 'areas/throat/silent-reflux-laryngopharyngeal/'],
      ['Salivary stones', 'areas/salivary-glands/salivary-stones-sialolithiasis/'],
    ] as [string, string][],

    faqLabel: 'Frequently asked questions',
    faqTitle: 'Before your visit',
    faqs: [
      {
        q: 'How do I book an ENT appointment in Huelva?',
        a: 'Call Instituto Otosur (+34 959 10 54 47 or +34 691 76 55 86) or the Hospital Quirónsalud Huelva appointment line (+34 959 242 100) and ask for Dr. Juan García Arteaga.',
      },
      {
        q: 'Where is the clinic?',
        a: 'At Instituto Otosur, inside Hospital Quirónsalud Huelva, Calle Punta Umbría 8, 21002 Huelva, Spain.',
      },
      {
        q: 'What are the clinic hours?',
        a: 'Usually Monday to Friday from 9:00 to 13:00 (Wednesdays every other week), plus Tuesday and Thursday afternoons from 16:30 to 20:00. Hours can change, so please confirm when you book.',
      },
      {
        q: 'Do you see children?',
        a: 'Yes. I see children and adults, and I have specific training in paediatric ENT: repeated ear infections, adenoids, tonsils, snoring and questions about hearing and speech.',
      },
      {
        q: 'Is the consultation in English?',
        a: 'Consultations are in Spanish for now. If you are not comfortable in Spanish, you are welcome to bring someone who can help translate.',
      },
      {
        q: 'Can I use my health insurance?',
        a: 'It depends on your insurer. When you book, ask Instituto Otosur or Hospital Quirónsalud Huelva whether your insurance covers the visit; if not, you can come as a private patient.',
      },
      {
        q: 'Can I ask about my case by email or through this website?',
        a: 'No. This website is for information only and cannot be used for medical consultations. Your case needs an examination in clinic. In an emergency in Spain, call 112.',
      },
    ] as Faq[],

    disclaimer: 'For general information only. It does not replace a medical consultation. In an emergency in Spain, call 112.',
    legalNotice: 'Legal notice',
    privacy: 'Privacy',
    cookies: 'Cookies',
    patientsLink: 'Patient information',
    mobileCall: 'Call to book',
  },
} as const;

export const otherLang = (lang: Lang): Lang => (lang === 'es' ? 'en' : 'es');

export const paths = {
  home: (lang: Lang) => (lang === 'es' ? '/' : '/en/'),
  legal: (lang: Lang) => (lang === 'es' ? '/aviso-legal/' : '/en/legal-notice/'),
  privacy: (lang: Lang) => (lang === 'es' ? '/privacidad/' : '/en/privacy/'),
  cookies: (lang: Lang) => (lang === 'es' ? '/cookies/' : '/en/cookies/'),
};
