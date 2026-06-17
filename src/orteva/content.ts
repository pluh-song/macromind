// Centralized, easy-to-edit content + product data for the Orteva PDP.
// Copy is written in a warm, plain-spoken voice for the 45+ persona.
// All claims are intentionally claim-safe (support / comfort / may help).

import type { Pack, SizeOption } from './types';

export const BRAND = {
  name: 'Orteva',
  tagline: 'Steady, supported knees — all day.',
  rating: 4.8,
  reviewCount: 3000,
  kneesSupported: 30000,
  countriesServed: 42,
};

export const PACKS: Pack[] = [
  {
    id: 'single',
    count: 1,
    title: '1 Knee Sleeve',
    sub: 'Support one knee',
    price: 34.99,
    compareAt: 59.99,
  },
  {
    id: 'double',
    count: 2,
    title: '2 Knee Sleeves',
    sub: 'Cover both knees',
    price: 49.99,
    compareAt: 99.98,
    tag: 'Most popular · Save 50%',
    badge: 'popular',
    perUnitNote: 'just $25.00/sleeve',
  },
  {
    id: 'quad',
    count: 4,
    title: 'Buy 2, Get 2 Free',
    sub: '4 sleeves · stock up or gift',
    price: 74.99,
    compareAt: 199.96,
    tag: 'Best value',
    badge: 'value',
    perUnitNote: 'just $18.75/sleeve',
  },
];

export const SIZES: SizeOption[] = [
  { code: 'S', weight: '90–130 lbs', label: 'Small' },
  { code: 'M', weight: '131–175 lbs', label: 'Medium' },
  { code: 'L', weight: '176–215 lbs', label: 'Large' },
  { code: 'XL', weight: '216–260 lbs', label: 'Extra Large' },
];

export const GALLERY = [
  {
    src: 'https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?auto=format&fit=crop&w=900&q=70',
    alt: 'Orteva knee compression sleeve worn on a knee, walking outdoors',
    caption: 'On the knee',
  },
  {
    src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=70',
    alt: 'Close-up of the anatomical gel stabilizer ring and compression knit',
    caption: 'Gel ring & knit detail',
  },
  {
    src: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=900&q=70',
    alt: 'Active person walking comfortably on a trail wearing the sleeve',
    caption: 'Move with confidence',
  },
  {
    src: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=900&q=70',
    alt: 'Macro shot of breathable moisture-wicking fabric weave',
    caption: 'Breathable fabric',
  },
  {
    src: 'https://images.unsplash.com/photo-1595079676339-1534801ad6cf?auto=format&fit=crop&w=900&q=70',
    alt: 'Pair of Orteva sleeves with packaging',
    caption: 'Ships as a pair',
  },
];

export const HERO = {
  eyebrow: 'Knee-specific · Gel stabilizer ring',
  headline: 'Steady, supported knees — from the first step out of bed to the last on your feet.',
  subhead:
    'Medical-grade graduated compression plus an anatomical gel ring that cradles and centers your kneecap — targeted support, not a generic tube of fabric.',
  ticks: [
    'Eases everyday aches and stiffness',
    'Stability on stairs and uneven ground',
    'Breathable and slim enough to wear all day',
  ],
};

export const TRUST_BAR = [
  { stat: 30000, suffix: '+', label: 'Sleeves shipped' },
  { stat: 4.8, decimals: 1, suffix: '★', label: 'From 3,000+ reviews' },
  { stat: 0, label: 'Free returns & exchanges', textOnly: true },
  { stat: 0, label: 'Secure encrypted checkout', textOnly: true },
];

export const PROBLEMS = [
  {
    title: 'Stairs feel like a decision',
    body: 'That flush of dread before every staircase — up to bed, down to the laundry. You start counting steps.',
  },
  {
    title: 'You quietly stopped doing things',
    body: 'The garden, the long walk, the dance floor. Nobody announced it. Your knees just made the call for you.',
  },
  {
    title: 'Standing wears you down',
    body: 'A shift, a queue, a kitchen afternoon. By the end your knees are doing all the complaining.',
  },
  {
    title: 'Mornings start rusty',
    body: 'That first step out of bed has an ache built in. It loosens eventually — but you shouldn’t have to wait for it.',
  },
  {
    title: 'Swelling that won’t quit',
    body: 'After a busy day the puffiness settles in and lingers, long after you’ve put your feet up.',
  },
  {
    title: 'That “might give out” feeling',
    body: 'On a curb, a wet floor, a hike downhill — the little wobble that makes you brace and slow right down.',
  },
];

export const FEATURES = [
  {
    title: 'Graduated compression',
    body: 'A medical-grade nylon/spandex knit hugs the joint to support tired, achy knees through a long day.',
  },
  {
    title: 'Anatomical gel stabilizer ring',
    body: 'A silicone ring cradles and centers your kneecap — the difference between targeted support and a plain tube.',
  },
  {
    title: 'Encourages circulation',
    body: 'Gentle, even pressure supports healthy blood flow so your knees feel fresher for longer.',
  },
  {
    title: 'Helps calm swelling',
    body: 'Consistent compression can help manage the everyday puffiness that builds up after activity.',
  },
  {
    title: 'Breathable all-day comfort',
    body: 'Moisture-wicking and slim enough to disappear under trousers — wear it from morning to night.',
  },
  {
    title: 'Dual non-slip cuffs',
    body: 'Two silicone grip bands keep it exactly where you put it. No rolling, bunching, or sliding down.',
  },
];

export const BENEFITS = [
  { title: 'Real, everyday relief', body: 'Support where you feel it most, so the day stops revolving around your knees.' },
  { title: 'Steadier on your feet', body: 'The gel ring helps you feel centered and confident on stairs and uneven ground.' },
  { title: 'Less end-of-day swelling', body: 'Even compression helps manage the puffiness that creeps in after a busy day.' },
  { title: 'Move more freely', body: 'Get back to the walks, errands and hobbies you’d quietly started avoiding.' },
  { title: 'Comfort that lasts', body: 'Breathable, slim and light — comfortable enough to forget you’re wearing it.' },
  { title: 'Gym to everyday', body: 'From a workout to the supermarket, one sleeve that keeps up with your whole day.' },
];

export const STEPS = [
  {
    n: 1,
    title: 'Slip it on',
    body: 'Pull it up so the gel ring sits around your kneecap. The grip cuffs do the rest.',
  },
  {
    n: 2,
    title: 'Compression goes to work',
    body: 'Graduated pressure and the stabilizer ring support the joint the moment it’s on.',
  },
  {
    n: 3,
    title: 'Move with confidence',
    body: 'Stairs, errands, a long walk — go about your day feeling steady and supported.',
  },
];

export const SCIENCE = {
  points: [
    {
      title: 'Circulation support',
      body: 'Graduated compression is widely used to support healthy blood flow in the limbs.',
    },
    {
      title: 'Swelling management',
      body: 'Even, consistent pressure is a common, practical way to help manage everyday swelling.',
    },
    {
      title: 'Joint & ligament support',
      body: 'External support around a joint can add a reassuring sense of stability during activity.',
    },
    {
      title: 'Proprioception',
      body: 'Compression around the knee can heighten position-awareness — that “I know where my leg is” feeling.',
    },
  ],
  stats: [
    { value: 92, suffix: '%', label: 'reported less discomfort within 2 weeks*' },
    { value: 9, suffix: ' / 10', label: 'would recommend to a friend*' },
    { value: 30000, suffix: '+', label: 'knees supported worldwide' },
  ],
  researchSummary:
    'Compression garments and knee bracing are widely studied and commonly used to support circulation, help manage swelling, and provide a sense of joint stability and position awareness. This describes the general body of research on compression and bracing — it is not a claim about Orteva specifically, and individual results vary.',
  statFootnote:
    '*Based on a voluntary Orteva customer-satisfaction survey of 412 verified buyers, two weeks after first use. Self-reported comfort, not a clinical outcome. Individual results vary.',
};

export const REVIEWS = [
  { name: 'Margaret R.', age: '62', context: 'Lives with arthritis', stars: 5, quote: 'The morning stiffness used to set the tone for my whole day. Now I put Orteva on with my coffee and the first hour just feels… normal again.' },
  { name: 'Dale W.', age: '34', context: 'Marathon runner', stars: 5, quote: 'I wear it on long runs and my knee feels noticeably more stable on the downhills. The gel ring actually stays put — no sliding.' },
  { name: 'Anita P.', age: '49', context: 'ICU nurse', stars: 5, quote: 'Twelve-hour shifts on hard floors. By hour ten my knees used to be done. This has genuinely changed how I feel walking to my car.' },
  { name: 'Frank T.', age: '71', context: 'Daily dog-walker', stars: 5, quote: 'I’d shortened my walks without really admitting it. Got the 2-pack, one for each knee, and Buddy and I are back to the long loop.' },
  { name: 'Priya S.', age: '38', context: 'Weekend hiker', stars: 4, quote: 'Slim enough to wear under leggings, supportive enough that uneven trails don’t worry me anymore. Wish I’d found it sooner.' },
  { name: 'Robert M.', age: '58', context: '6 weeks post-surgery', stars: 5, quote: 'My physio okayed light compression and this was comfortable from day one. The non-slip bands mean I’m not constantly tugging it up.' },
  { name: 'Yvonne C.', age: '66', context: 'Retired teacher', stars: 5, quote: 'Stairs were the worst part of my day. They’re still stairs — but I don’t dread them the same way. That’s worth a lot to me.' },
  { name: 'Marcus J.', age: '29', context: 'Rec-league basketball', stars: 5, quote: 'Confidence on the court is back. Light, breathable, doesn’t bunch behind the knee when I’m moving. Bought a second one immediately.' },
];

export const COMPARISON = {
  rows: [
    'Graduated medical-grade compression',
    'Anatomical gel stabilizer ring',
    'Breathable, moisture-wicking knit',
    'Dual non-slip silicone grip bands',
    'Sized by body weight (S–XL)',
    'Left / right specific shaping',
    'Free returns & free size/side exchanges',
  ],
};

export const SHIPPING = {
  title: 'Free worldwide shipping — wherever your day takes you',
  body:
    'Every Orteva order ships free and fully tracked, with fast dispatch from our nearest fulfillment hub. Changed your mind, or need a different size or side? Returns and exchanges are always free.',
  points: [
    { title: 'Free shipping', body: 'On every order, no minimum.' },
    { title: 'Fully tracked', body: 'Follow it from our door to yours.' },
    { title: `${BRAND.countriesServed}+ countries served`, body: 'Trusted by customers worldwide.' },
    { title: 'Free returns', body: '30-day comfort-fit guarantee.' },
  ],
};

export const FAQS = [
  {
    q: 'How long can I wear it each day?',
    a: 'Most people wear Orteva comfortably for several hours at a time, and many keep it on through a full day. Start with a few hours, see how your knee feels, and build up from there. If anything feels too tight, size up — exchanges are free.',
  },
  {
    q: 'Can I really wear it all day?',
    a: 'Yes. It’s breathable, moisture-wicking and slim enough to sit under trousers, so it’s designed for all-day wear. We simply suggest taking it off overnight and giving your skin a break.',
  },
  {
    q: 'Is it good for arthritis or stiff knees?',
    a: 'Orteva is a wellness and support garment that provides comfort and compression, which many people with everyday stiffness find reassuring. It is not a medical device and is not intended to treat or cure any condition. If you have a diagnosed condition, please check with your healthcare provider.',
  },
  {
    q: 'Can I exercise in it?',
    a: 'Absolutely. Plenty of customers wear Orteva for walks, runs, hikes, lifting and court sports. The dual grip cuffs are designed to keep it in place while you move.',
  },
  {
    q: 'How do I choose my size and side?',
    a: 'Size is chosen by body weight (S–XL) for a genuine fit rather than guesswork — see the size guide in the buy box. Because the shaping is mirrored per knee, just pick Left or Right for each sleeve. Between sizes? Size up for all-day comfort, down for a firmer fit.',
  },
  {
    q: 'How do I wash and care for it?',
    a: 'Hand wash in cool water with mild soap, or use a gentle machine cycle in a laundry bag. Lay flat to air dry. Avoid the tumble dryer and fabric softener so the compression knit and silicone keep their grip.',
  },
];

export const GUARANTEE = {
  title: '30-day comfort-fit guarantee',
  body: 'Wear it, walk in it, climb your stairs with it. If Orteva isn’t right for you within 30 days, send it back for a full refund. Free shipping, free returns, free size and side exchanges — there’s genuinely nothing to lose but the ache.',
};

export const DISCLAIMER =
  'Orteva is a wellness and support garment intended to provide comfort and compression. It is not a medical device and is not intended to diagnose, treat, cure, or prevent any disease. Statements have not been evaluated by the FDA. Consult a qualified healthcare provider for diagnosed conditions. Individual results vary.';

export const FINAL_CTA = {
  title: 'Take the first step toward comfortable movement.',
  body: 'Free worldwide shipping, free returns, and a 30-day comfort-fit guarantee. Your knees have carried you this far — give them something back.',
};
