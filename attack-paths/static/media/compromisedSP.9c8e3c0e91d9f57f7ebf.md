## Impersonate a Service Principal with privileged application permissions

**Attack Path:** Impersonate a highly privileged Service Principal.

**Mitigation techniques:** Watch out for the following application permissions and remove them if possible:
- Application.ReadWrite.All
- AppRoleAssignment.ReadWrite.All
- RoleManagement.ReadWrite.Directory