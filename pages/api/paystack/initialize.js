export default async function handler(req, res)
{
    if (req.method !== 'POST')
    {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const secretKey = process.env.PAYSTACK_SECRET_KEY;
    if (!secretKey)
    {
        return res.status(500).json({ error: 'PAYSTACK_SECRET_KEY is not set' });
    }

    const { email, items } = req.body;

    if (!email || !Array.isArray(items) || items.length === 0)
    {
        return res.status(400).json({ error: 'Email and cart items are required' });
    }

    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    // Paystack expects the amount in the smallest currency unit (kobo)
    const amount = Math.round(subtotal * 100);

    const origin = req.headers.origin || `http://${req.headers.host}`;

    try
    {
        const response = await fetch('https://api.paystack.co/transaction/initialize', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${secretKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                amount,
                currency: 'NGN',
                callback_url: `${origin}/checkout/callback`,
                metadata: {
                    items: items.map(item => ({
                        id: item.id,
                        product: item.text,
                        price: item.price,
                        quantity: item.quantity,
                        imageurl: item.imageurl,
                    })),
                },
            }),
        });

        const data = await response.json();

        if (!response.ok || !data.status)
        {
            return res.status(502).json({ error: data.message || 'Failed to initialize transaction' });
        }

        return res.status(200).json({ authorization_url: data.data.authorization_url, reference: data.data.reference });
    } catch (error)
    {
        console.error('Paystack initialize error:', error);
        return res.status(500).json({ error: 'Failed to reach Paystack' });
    }
}
