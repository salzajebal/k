---
name: Production domain TLS scope
description: Why production TLS currently covers only the apex domain.
---

Use `heaminsac.com` as the production TLS hostname. Do not add `www.heaminsac.com` to automatic certificate management until its DNS record resolves to the production server.

**Why:** The apex A record is live, but `www` returns NXDOMAIN. Including both names caused repeated ACME authorization failures and delayed issuance for the valid apex domain.

**How to apply:** If `www` is requested later, first confirm its public A or CNAME record resolves correctly, then add it to Caddy and redirect it to the apex domain.