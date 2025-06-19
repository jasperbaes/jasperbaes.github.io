## User Administrator

Can manage users and groups, except:
- Global Administrators or Entra roles with a direct escalation path to Global Administrator
- change the credentials of members or owners of role-assignable groups

**Unique Attack Paths:** 
- Account takeover by resetting the password of a highly privileged Principal owner or member
- Account takeover by resetting the password of a highly privileged Azure Subscription owner
- Account takeover by resetting the password of owners of highly privileged groups