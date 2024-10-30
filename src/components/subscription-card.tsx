// src/components/subscription-card.tsx

"use client"; // Mark it as a client component

import { vexor } from "@/lib/vexor";
import { useTransition } from "react";
import { VexorSubscriptionBody } from "vexor";

const SubscriptionCard: React.FC<{ subscription: VexorSubscriptionBody }> = ({ subscription }) => {

    const [isPending, startTransition] = useTransition();

    const handleSubscribe = async () => {
        startTransition(async () => {
            try {
                const response = await vexor.subscribe.stripe(subscription)

                window.location.href = response.result.payment_url;
            } catch (error) {
                console.log(error);
            }
        });
    }

    return (
        <div className="w-[500px] max-w-full border rounded-lg p-6">
            <div className="mb-6 gap-3 flex flex-col justify-center items-center">
                <h2 className="text-2xl font-semibold">{subscription.name}</h2>
                <span className="text-7xl font-black">${subscription.price}</span>
                <p className="text-gray-500 mt-1">{subscription.description}</p>
            </div>
            <div className="space-y-4">
                <button
                    onClick={handleSubscribe}
                    disabled={isPending}
                    className="w-full bg-foreground text-background py-2 px-4 rounded-md disabled:opacity-50 disabled:cursor-not-allowed">
                    {isPending ? 'Subscribing...' : 'Subscribe'}
                </button>
            </div>
        </div>
    );
};

export default SubscriptionCard;