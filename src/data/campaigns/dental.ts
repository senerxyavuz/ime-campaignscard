import type { Campaign } from '../types';
import { smileCopy } from '../winter-locales';

// Listing cards and the landing page use the same current offer text.
export const dental: Campaign = {
  slug: 'dental', theme: 'purple', icon: '🦷', status: 'active',
  markets: ['ES','IT','EN','RU','TR'], doctor: 'BHT Dentist',
  content: Object.fromEntries(Object.entries(smileCopy).map(([lang,c])=>[lang,{
    name:c.title, specialtyTag:c.season, cardHospital:c.places[0][0],
    hospitalNote:c.places[0][0], tagline:c.lead,
    price:c.price, priceNote:c.priceNote,
    dates:{ad:c.season,deposit:c.deadline,treatment:c.scope[1],stay:c.advisorStayValue},
    packageItems:[...c.includes], notIncluded:[c.separate],
    advantages:c.places.map(([title,body])=>({title,body})),
    rules:c.advisorRules.map((text,i)=>({badge:`R${i+1}`,text})),
    whatsapp:c.scripts[0], faq:c.faqs.map(([q,a])=>({q,a})),
    urgency:c.deadline, pitch:c.lead,
  }])) as Campaign['content'],
};
