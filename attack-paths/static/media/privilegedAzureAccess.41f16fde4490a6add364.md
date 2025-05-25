## Privileged Azure Resource Access via Group Membership

**Attack Path:** Adding users to privileged groups might grant access to sensitive Azure resources, and leverage these Azure resouces to escalate to Global Administrator privileges.

**Attack Path Example:** The Threat Actor adds a compromised user account to a group with Contributor access to an Azure Subscription containing a resource with an assigned Managed Identity. This Managed Identity has privileged application permissions granted for the Microsoft Graph. 

Note: many other attacks paths are possible.

**Mitigation techniques:**
- Use Restricted Management  Administrative Units (RMAU)
- Use role-assignable groups