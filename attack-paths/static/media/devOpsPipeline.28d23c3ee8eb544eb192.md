## Impersonate a DevOps pipeline

Represents the ability to impersonate or compromise a DevOps pipeline.

**Attack Path:** Compromise here may allow impersonation of DevOps pipelines with assigned privileged Azure permissions, leading to further privilege escalation to Global Administrator.

**Attack Path Example:** An Azure DevOps pipeline uses a Service Principal with Contributor access to an Azure Subscription containing a resource with an assigned Managed Identity. The Managed Identity has privileged application permissions granted for the Microsoft Graph. By triggering and impersonating the Azure DevOps pipeline with Contributor access, the same path as Application Administrator can be followed.

Note: many other paths of this kind are possible.