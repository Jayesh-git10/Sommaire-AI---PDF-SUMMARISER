import { isDev } from "./helpers";
import { Variants } from "motion/react";

export const PricingPlans = [
    {
        id: 'basic',
        name: 'Basic',
        price: 9,
        description: 'For individuals getting started',
        items: [
            '5 PDF summaries per month',
            'Standard processing speed',
            'Email support'
        ],
        paymentLink: isDev ? 'https://buy.stripe.com/test_fZu5kxeeS2nc7c37jqc3m00' :'',
        pricedId: isDev  ? 'price_1TBrYkAq1sH9ZiBsMjtk1yIK' : '',
    },
    {
        id: 'pro',
        name: 'Pro',
        price: 19,
        description: 'For professionals and teams',
        items: [
            'Unilimited PDF summaries',
            'Priority processing',
            '24/7 priority support',
            'Markdown Export'
        ],
        paymentLink: isDev ? 'https://buy.stripe.com/test_9B64gtc6K9PEeEvgU0c3m01':'',
        pricedId: isDev ?  'price_1TBrYkAq1sH9ZiBs6Zupj9MA' : '' 
    }
]



export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
} satisfies Variants;

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0, // ✅ FIX (important)
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 50,
      duration: 0.8,
    },
  },
} satisfies Variants;