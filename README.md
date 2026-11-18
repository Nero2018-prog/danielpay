# Daniel Pay — starter website

This is a **front-end preview**, not a live payment processor. It does not generate payment addresses, QR codes, record invoices, or confirm transactions.

## Deploying the preview on Cloudflare Pages
1. Create/sign in to a Cloudflare account.
2. Create a GitHub repository and upload the contents of this folder.
3. In Cloudflare: Workers & Pages → Create application → Pages → Connect to Git.
4. Select the repository. For this plain HTML site, use no framework, build command `exit 0`, and output directory `/`.
5. Deploy. Cloudflare will assign a `*.pages.dev` URL.

## Before enabling real USDC payments
- Use a self-custody Ethereum wallet you control as the receiving wallet. Do **not** use an exchange deposit address unless the exchange explicitly confirms that this payment-forwarding arrangement is supported.
- Verify the `erc20/usdc` ticker and current minimum payment with CryptAPI before accepting funds.
- Add a server-side payment-creation endpoint and webhook handler. Store invoice IDs, unguessable nonces, and transaction UUIDs; verify provider callbacks and confirmation status server-side. Never trust browser-only payment status.
- CryptAPI requires the callback URL's domain to be verified before it creates payment addresses. Confirm that your chosen Pages hostname can pass its verification process before relying on it.
- Test with a small amount only after the entire flow is deployed and verified.

## Safety
Never put a seed phrase or private key in this website, repository, browser code, or chat. The current page is intentionally labelled as a preview and must not be used to collect payments.
