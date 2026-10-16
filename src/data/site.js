// Everything you'd want to edit lives here.
// Images still point at your Shopify CDN. To own them fully, download each one,
// put it in /public/images, and change the URL to "/images/<name>.jpg".
const SHOP = 'https://galeriadehome.com'
const CDN = 'https://galeriadehome.com/cdn/shop/files'

export const hero = {
  image: `${CDN}/Photo_May_12_2026_10_08_28_PM.jpg?v=1778649585&width=3840`,
  alt: 'Galeria De HOMÈ',
}

export const tagline = 'DE LA FRONTERA'

// Menu links now go to pages inside this site.
export const menu = [
  { label: 'VIDEOS', to: '/videos' },
  { label: 'GDH ARTS MAGAZINE', to: '/magazine' },
  { label: 'SHOP', to: '/shop' },
  { label: 'ABOUT', to: '/about' },
  { label: 'GALLERIA', to: '/galleria' },
  { label: 'CONTACT', to: '/contact' },
]

// ---------- VIDEOS ----------
// Shown top to bottom. A video has either "youtube" (an embed link) or "src" (a video file).
// "ratio" is width ÷ height, so the space is reserved before the video loads.
const PREVIEW = `${CDN}/preview_images`
const VID = 'https://galeriadehome.com/cdn/shop/videos/c/vp'
export const videos = [
  {
    title: 'CORRIDOS KETAMINA: INTERVIEW',
    date: '10/1/26',
    youtube: 'https://www.youtube.com/embed/P78gskWdeAg?playlist=P78gskWdeAg&loop=1',
    ratio: 16 / 9,
  },
  {
    title: 'PARIS TEXAS - SAN DIEGO CALIFORNIA',
    date: '5/10/2024',
    src: `${VID}/1f9d908856bf4f148adb815bd41a84f5/1f9d908856bf4f148adb815bd41a84f5.SD-480p-1.5Mbps-83904713.mp4`,
    poster: `${PREVIEW}/1f9d908856bf4f148adb815bd41a84f5.thumbnail.0000000000_2500x.jpg?v=1778560263`,
    ratio: 1.333,
  },
  {
    title: 'BAKAR - SAN DIEGO CALIFORNIA',
    date: '5/10/2024',
    src: `${VID}/c6779618531547d4af48aa422f4693ec/c6779618531547d4af48aa422f4693ec.SD-480p-1.5Mbps-83904929.mp4`,
    poster: `${PREVIEW}/ApplicationFrameHost_9sqALB1psx_2500x.png?v=1778564028`,
    ratio: 1.333,
  },
  {
    title: 'KAYTRANADA - SAN DIEGO CALIFORNIA',
    date: '5/10/2024',
    src: `${VID}/77b04790f52a43cc9dc7575c4f0b0d3d/77b04790f52a43cc9dc7575c4f0b0d3d.SD-480p-1.5Mbps-83905432.mp4`,
    poster: `${PREVIEW}/ApplicationFrameHost_nLjWDZwh6S_2500x.png?v=1778564694`,
    ratio: 1.333,
  },
  {
    title: 'DAYGLOW',
    date: '5/11/2024',
    src: `${VID}/8256fbc4a46546518c42f953315372ef/8256fbc4a46546518c42f953315372ef.SD-480p-1.5Mbps-83905405.mp4`,
    poster: `${PREVIEW}/ApplicationFrameHost_q2oi1TJInK_2500x.png?v=1778564157`,
    ratio: 1.333,
  },
  {
    title: 'CAMP FLOG GNAW 2023',
    date: '',
    src: `${VID}/ce3806b04b354d09ba8c5561524310e6/ce3806b04b354d09ba8c5561524310e6.SD-480p-1.5Mbps-83906037.mp4`,
    poster: `${PREVIEW}/ce3806b04b354d09ba8c5561524310e6.thumbnail.0000000000_2500x.jpg?v=1778562410`,
    ratio: 1.775,
  },
  {
    title: 'GOLF LE FLEUR',
    date: '',
    src: `${VID}/d83d1a2d537b48fc8669d3db33f2a3c2/d83d1a2d537b48fc8669d3db33f2a3c2.SD-480p-1.5Mbps-83906839.mp4`,
    poster: `${PREVIEW}/d83d1a2d537b48fc8669d3db33f2a3c2.thumbnail.0000000000_2500x.jpg?v=1778563524`,
    ratio: 1.775,
  },
  {
    title: 'GHETTO RODEO',
    date: '',
    src: `${VID}/c78ab44fb2b346d58eca56991130a864/c78ab44fb2b346d58eca56991130a864.HD-1080p-7.2Mbps-83906944.mp4`,
    poster: `${PREVIEW}/c78ab44fb2b346d58eca56991130a864.thumbnail.0000000000_2500x.jpg?v=1778563723`,
    ratio: 1.775,
  },
  {
    title: 'BIMMER',
    date: '',
    src: `${VID}/e4e543a08a624c3aa23838540948839c/e4e543a08a624c3aa23838540948839c.SD-480p-1.5Mbps-83907546.mp4`,
    poster: `${PREVIEW}/e4e543a08a624c3aa23838540948839c.thumbnail.0000000000_2500x.jpg?v=1778564519`,
    ratio: 1.775,
  },
  {
    title: '¥$',
    date: '',
    src: `${VID}/3ad5d35118fd48f1a811830116563ac3/3ad5d35118fd48f1a811830116563ac3.SD-480p-1.5Mbps-83905547.mp4`,
    poster: `${PREVIEW}/3ad5d35118fd48f1a811830116563ac3.thumbnail.0000000000_2500x.jpg?v=1778561598`,
    ratio: 1.363,
  },
  {
    title: '',
    date: '',
    src: `${VID}/743312edd10f4e6eb3c0d87c60f4b024/743312edd10f4e6eb3c0d87c60f4b024.HD-1080p-3.3Mbps-83907819.mp4`,
    poster: `${PREVIEW}/743312edd10f4e6eb3c0d87c60f4b024.thumbnail.0000000000_2500x.jpg?v=1778564905`,
    ratio: 1.775,
  },
]

// ---------- SHOP ----------
// Product links still go to Shopify so cart and checkout keep working.
export const products = [
  {
    name: 'Swapmeet Tote bag',
    price: '$5.00',
    href: `${SHOP}/products/swapmeet-tote-bag`,
    image: `${CDN}/Photo_May_04_2026_11_02_18_PM_1.jpg?v=1777961696&width=800`,
    hoverImage: `${CDN}/Photo_May_04_2026_11_02_18_PM.jpg?v=1777961694&width=800`,
  },
  {
    name: 'The Perfect Cap',
    price: '$20.00',
    href: `${SHOP}/products/perfect-cap`,
    image: `${CDN}/7145B934-B662-404E-96D3-47898D25C9A0.jpg?v=1779207917&width=800`,
    hoverImage: `${CDN}/Photo_Jan_15_2026_1_20_16_PM_2.jpg?v=1770448495&width=800`,
  },
]
export const cartHref = `${SHOP}/cart`
export const accountHref = `${SHOP}/account`
export const searchHref = `${SHOP}/search`

// ---------- ABOUT ----------
// One string per paragraph.
export const about = {
  greeting: 'GALERIA DE HOMÈ,',
  paragraphs: [
    'In the beginning it was supposed to be just a media page on Instagram called Homevide0z where I would post camcorder videos and would feature artists like Paris Texas, Kanye West, and Bakar. Over time I started dipping my toes into screen printing and making trucker hats.',
    "Funny enough what got me into making trucker hats was the Le Fleur brand, I remember I wanted one of those Le Fleur trucker hats so bad but couldn't bring myself to pay 50 bucks for one. So I started making my own bootlegs with the same blank hats used but not to sell just for me, and that's when I stared making my own designs and putting them on trucker hats. (i will bring those back eventually)",
    "There really isn’t a special meaning behind the name and it doesn't grammatically make sense, it all evolved from “homevideos” to HOMÈ then GALERIA DE HOMÈ. Its meant to sound fancy and hopefully someday it defins itself. There isn’t really a wrong or a right way to pronounce it I’ll leave that up to you.",
    'I don’t know what GALERIA DE HOMÈ will become in the future or what to expect but its made to be more than just a clothing brand, one day it could be clothing, another day magazines, furniture, films, or I don’t know something completely different depending on what inspires me at the moment but this website will constantly be updated monthly so keep an eye open.',
    'More importantly GALERIA DE HOMÈ exists/was created as an outlet to experiment, document ideas, and create things on my free time.',
  ],
  thanks: 'Thank you',
  closing: 'Embrace imperfection in a era of ai',
  author: 'FERNANDO HUIZZAR',
  date: '5/10/2026',
}

// ---------- GALLERIA ----------
export const gallery = [
  'Photo_Jan_15_2026_1_10_59_PM_2_54a4d5a5-ac67-494e-ab50-6bc7b6a5ba12.jpg?v=1770446819',
  'Photo_Jan_15_2026_1_10_59_PM_2.jpg?v=1770446660',
  'Photo_May_04_2026_11_32_03_PM.jpg?v=1777962793',
  'Photo_May_04_2026_11_32_03_PM_2.jpg?v=1777962759',
  'Photo_Dec_20_2024_3_46_03_AM_1_1.jpg?v=1777963282',
  'Photo_Dec_20_2024_3_46_03_AM_1.jpg?v=1777963405',
  'Photo_Feb_06_2026_10_53_26_PM_13.jpg?v=1770447885',
  'Photo_Feb_06_2026_10_53_26_PM_4.jpg?v=1777963469',
  'Photo_Feb_06_2026_10_53_26_PM_14.jpg?v=1770447861',
  'Photo_Jan_15_2026_1_20_16_PM_2.jpg?v=1770448495',
  'Photo_May_04_2026_11_02_18_PM_1.jpg?v=1777961696',
  'Photo_May_04_2026_11_02_18_PM.jpg?v=1777961694',
  'Photo_Jan_15_2026_1_23_48_PM_1.jpg?v=1770448007',
  'Photo_May_04_2026_11_25_19_PM.jpg?v=1777962385',
  'Photo_Jan_15_2026_1_23_48_PM_2_1.jpg?v=1770447060',
  'Photo_Feb_06_2026_10_53_26_PM_6.jpg?v=1770447325',
  'Photo_May_04_2026_11_32_03_PM_3.jpg?v=1777962889',
  'Photo_Jan_15_2026_1_23_48_PM_5.jpg?v=1770448077',
  'Photo_Jan_15_2026_1_23_48_PM_6.jpg?v=1770448052',
  'Photo_Feb_06_2026_10_53_26_PM_7.jpg?v=1770447355',
  'Photo_Jun_02_2024_8_22_28_AM.png?v=1777964008',
  'Photo_May_04_2026_11_32_03_PM_1.jpg?v=1777962923',
  'Photo_Jan_15_2026_5_15_11_PM_2.jpg?v=1777963980',
  'Photo_Feb_06_2026_10_53_26_PM_11.jpg?v=1777963982',
].map((file) => `${CDN}/${file}&width=800`)

// ---------- GDH ARTS MAGAZINE ----------
// Each issue is a list of page images, in reading order. Newest issue first.
const page = (file) => `${CDN}/${file}&width=1200`
export const magazine = {
  intro: ['READ PERVIOUS ISSUES BELOW', 'ISSUE #3 OCTOBER'],
  issues: [
    [
      'IMG_5517.jpg?v=1785477453',
      'IMG_5518.jpg?v=1785478259',
      'IMG_5519.jpg?v=1785478261',
      'IMG_5520.jpg?v=1785478263',
      'IMG_5521.jpg?v=1785478264',
      'IMG_5522.jpg?v=1785478266',
      'IMG_5523.jpg?v=1785478268',
      'IMG_5524.jpg?v=1785478269',
      'unnamed_028447d3-e27b-45b1-a635-547e2de087df.jpg?v=1785516359',
      'IMG_5526.jpg?v=1785478448',
      'IMG_5527.jpg?v=1785478455',
      'IMG_5528.jpg?v=1785478462',
      'IMG_5529.jpg?v=1785478469',
    ].map(page),
    [
      'IMG_5538.jpg?v=1785478870',
      'IMG_9599.jpg?v=1780855017',
      'IMG_9600.jpg?v=1780855039',
      'IMG_9601.jpg?v=1780855056',
      'IMG_9602.jpg?v=1780855305',
      'IMG_9603.jpg?v=1780855324',
      'IMG_9604.jpg?v=1780855341',
      'IMG_9605.jpg?v=1780855362',
      'unnamed.jpg?v=1780855440',
      'IMG_9607.jpg?v=1780855380',
      'IMG_9608.jpg?v=1780855462',
      'IMG_9610.jpg?v=1780855488',
      'IMG_5529.jpg?v=1785478469',
    ].map(page),
  ],
}

// ---------- CONTACT ----------
// Create a free form at https://formspree.io and paste its URL here so messages reach your email.
export const contactFormAction = '' // e.g. 'https://formspree.io/f/abcdwxyz'