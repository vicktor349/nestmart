export default async function handler(req, res)
{
    if (req.method !== 'GET')
    {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const secretKey = process.env.PAYSTACK_SECRET_KEY;
    if (!secretKey)
    {
        return res.status(500).json({ error: 'PAYSTACK_SECRET_KEY is not set' });
    }

    const { reference } = req.query;
    if (!reference)
    {
        return res.status(400).json({ error: 'Transaction reference is required' });
    }

    try
    {
        const response = await fetch(`https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`, {
            headers: { Authorization: `Bearer ${secretKey}` },
        });

        const data = await response.json();

        if (!response.ok || !data.status)
        {
            return res.status(502).json({ error: data.message || 'Failed to verify transaction' });
        }

        const { status, amount, currency, metadata, customer } = data.data;

        return res.status(200).json({
            success: status === 'success',
            status,
            amount: amount / 100,
            currency,
            email: customer?.email,
            items: metadata?.items || [],
        });
    } catch (error)
    {
        console.error('Paystack verify error:', error);
        return res.status(500).json({ error: 'Failed to reach Paystack' });
    }
}
