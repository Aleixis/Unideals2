const express = require("express");
const router = express.Router();
const stripe = require("stripe")("sk_test_51OBjICLeBQEWi3hthAiWaiu6V47yf2mxmw3YXT8qiX0hhzZkDxWsyAJqu3fvezmLofoOd561eSma8lgDZc2KAhs900KnTlmE87");

router.post("/", async (req, res, next) => {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            shipping_address_collection: {
                allowed_countries: ['US', 'CA'],
            },
            shipping_options: [
                {
                    shipping_rate_data: {
                        type: 'fixed_amount',
                        fixed_amount: {
                            amount: 0,
                            currency: 'usd',
                        },
                        display_name: 'Free shipping',
                        delivery_estimate: {
                            minimum: {
                                unit: 'business_day',
                                value: 5,
                            },
                            maximum: {
                                unit: 'business_day',
                                value: 7,
                            },
                        }
                    }
                },
                {
                    shipping_rate_data: {
                        type: 'fixed_amount',
                        fixed_amount: {
                            amount: 1500,
                            currency: 'usd',
                        },
                        display_name: 'Next day air',
                        delivery_estimate: {
                            minimum: {
                                unit: 'business_day',
                                value: 1,
                            },
                            maximum: {
                                unit: 'business_day',
                                value: 1,
                            },
                        }
                    }
                },
            ],
            line_items: req.body.items.map((item) => ({
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: item.name,
                        images: [item.product]
                    },
                    unit_amount: item.price * 100,
                },
                quantity: item.quantity,
            })),
            mode: "payment",
            success_url: "http://localhost:4200/success.html",
            cancel_url: "http://localhost:4200/cancel.html",
        });

        res.status(200).json(session);
    } catch (error) {
        next(error);
    }
});

module.exports = router;