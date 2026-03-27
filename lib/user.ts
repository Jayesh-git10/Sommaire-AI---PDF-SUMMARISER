import { getDbConnection } from "@/lib/db";
import { getUserUploadCount } from "./summaries";
import { PricingPlans } from "@/utils/constants";

export async function getPriceIdForActiveUser(email : string){
    const sql = await getDbConnection();
     
    const query=  await sql`SELECT price_id FROM users where email = ${email} AND status = 'active'`;

    return query?.[0]?.price_id || null;
}

export async function hasActivePlan(email : string){
    const sql = await getDbConnection();
     
    const query=  await sql`SELECT price_id,status FROM users where email = ${email} AND status = 'active' AND price_id IS NOT NULL`;

    return query && query.length>0;
}

export async function hasReachedUploadLimit(userId:string){
    const uploadCount = await getUserUploadCount(userId);

    const priceId = await getPriceIdForActiveUser(userId)
    const isPro = PricingPlans.find((plan)=> plan.pricedId === priceId)?.id === 'pro';
    const uploadLimit:number = isPro ? 1000 : 10 
    return {hasReachedUploadLimit : uploadCount >= uploadLimit, uploadLimit};
}

export async function getSubscriptionStatus(user: { emailAddresses: { emailAddress: string }[] }) {
    const hasSubscription = await hasActivePlan(user.emailAddresses[0].emailAddress);
    return hasSubscription;
}