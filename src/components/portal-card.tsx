// src/components/portal-card.tsx
 
"use client"; // Mark it as a client component
 
import { vexor } from "@/lib/vexor";
import { useTransition } from "react";
 
const PortalCard: React.FC = () => {
 
    const [isPending, startTransition] = useTransition();
 
    const handleSubscribe = async () => {
        startTransition(async () => {
            try {
                // You can also use directly vexor.portal.stripe if you want. This time we're going to use the generic vexor.portal method and pass the platform in the parameters.
                const response = await vexor.portal({
                    platform: 'stripe',
                    customerId: 'cus_123ABC',
                    returnUrl: 'http://localhost:3000'
                })
 
                window.location.href = response.result.portal_url
 
            } catch (error) {
                console.log(error);
            }
        });
    }
 
    return (
        <div className="w-[500px] max-w-full border rounded-lg p-6">
            <div className="mb-6 gap-3 flex flex-col justify-center items-center">
                <h2 className="text-2xl font-semibold">Subscriptions & Billing Management</h2>
            </div>
            <div className="space-y-4">
                <button
                    onClick={handleSubscribe}
                    disabled={isPending}
                    className="w-full bg-foreground text-background py-2 px-4 rounded-md disabled:opacity-50 disabled:cursor-not-allowed">
                    {isPending ? 'Loading...' : 'Manage'}
                </button>
            </div>
        </div>
    );
};
 
export default PortalCard;