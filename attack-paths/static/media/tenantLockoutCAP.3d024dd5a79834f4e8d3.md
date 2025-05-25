## Create a Conditional Access Policy to block all users

**Attack Path:** Can create or modify policies to block or allow access, potentially locking out users or admins.

**Attack Path Examples:** 
- A Threat Actor modifies an existing Conditional Access policy to allow access for a compromised account (e.g. exclude the compromised account from MFA, exclude the compromised account from having a compliant device required, ...)
- A Threat Actor adds or modifies a Conditional Access policy to block access for all users, except the used compromised account.