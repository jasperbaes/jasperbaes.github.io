## Tenant Hijack and Ransomware

Represents full compromise of the tenant.

**Attack Path:** Attackers have full ownership of the tenant. They can demand ransom, destroy the tenant, or exfiltrate all tenant and user data.

**Hijack scenarios:**
- A Threat Actor adds or modifies a Conditional Access policy to block access for all users, except the used compromised account.
- A Threat Actor disables all users accounts, except the used compromised account.
- A Threat Actor deletes all users accounts, except the used compromised account.

**Once the tenant is hijacked, the Threat Actor can:**
- Demand ransomware — potentially multiple times, repeatedly extorting the organization for payment
- Exfiltrate all tenant and user data (files, emails, ...)
- Disable all Azure resources
- Remove all Service Principals
- ...


If you're locked out of your tenant, contact the Microsoft Data Protection team to get your tenant unlocked. You will need to prove your ownership of the tenant. Be prepared for a bit of a wait.