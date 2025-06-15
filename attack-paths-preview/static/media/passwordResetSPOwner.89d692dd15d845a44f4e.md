## Reset the password of a Service Principal owner

Represents the ability to reset the password of a Service Principal owner.

**Attack Path:** Allows attackers to take over Service Principals by resetting the credentials of the owner. If this Service Principal has privileged application permissions granted to the Microsoft Graph, then the Service Principal can be impersonated to become Global Administrator.

**Attack Path Example:** Threat Actor resets the password of a standard user who is owner of a Service Principal with the granted RoleManagement.ReadWrite.Directory application permission. The user cannot have Entra role or role-assignable group assignment. The Threat Actor impersonates the user, and then the Service Principal to abuse the granted application permission and escalates to Global Administrator.

**Mitigation techniques:**
- Use Restricted Management  Administrative Units (RMAU)
- Use role-assignable groups