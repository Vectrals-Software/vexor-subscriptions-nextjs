// src/app/page.tsx
 
import SubscriptionCard from "@/components/subscription-card";
import { VexorSubscriptionBody } from "vexor";
 
const subscriptionPlan: VexorSubscriptionBody = {
  name: 'Awesome Subscription Plan',
  description: 'Cool description for the plan that customers will see 😎',
  interval: 'month',
  price: 99,
  currency: 'USD',
  successRedirect: 'http://localhost:3000/success',
  customer: {
      email: 'test_customer@email.com',
      name: 'Test Customer'
  }
}
 
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Subscribe to our plan</h1>
          <SubscriptionCard subscription={subscriptionPlan} />
      </main>
    </div>
  );
}