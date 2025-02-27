'use server'

import { VexorSubscriptionBody } from "vexor"

import { SupportedVexorPlatform } from "vexor"

import { vexor } from "@/lib/vexor";
import { VexorSubscriptionResponse } from "vexor";

export const handleSubscription = async (subscription: VexorSubscriptionBody) => {
    const response : VexorSubscriptionResponse = await vexor.subscribe.stripe(subscription)

    // Get the identifier from the response
    const identifier = response.identifier
    // You can use the identifier to track the operation in your database or ny other storage you use in your application and match it with the webhooks events

    // Don't do this! This is just for demonstration purposes
    //alert(`✅ Identifier: ${identifier}`)
    console.log(`✅ Identifier: ${identifier}`)

   return response.payment_url;
}