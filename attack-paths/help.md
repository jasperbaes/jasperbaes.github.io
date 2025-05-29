## 🚀 About

This tool visualizes the shortest escalation attack paths to (direct or indirect) Global Administrator permissions or Entra ID tenant hijacking. It helps you understand how Entra ID roles and Graph API permissions can be chained to escalate privileges in an environment.

Features:
- Interactive flow diagram of role relationships and escalation paths
- Click nodes for detailed markdown-based documentation
- Filter/search roles by name
- Run assessments to view the actual status of Entra roles and Graph API permissions on your tenant

**Green connections** in the diagram represent direct privilege escalations. These paths will always work as designed.
All other (grey) connections represent escalation paths that require additional actions by the threat actor and may not always succeed.

**Note:**  
This tool is not intended to be a full escalation path or attack path tool.

## 🚧 Limitations

- Only built-in Entra roles + Graph API permissions are included
- Some attack paths and documentation may not be fully represented

Found a bug or have an improvement? Please [send me a message on Linkedin](https://linkedin.com/in/jasper-baes).

## 🆕 Release history

Release version numbers: YEAR.WEEK

- **2025.22**  
  - Add local hosting option
  - Add Graph API permissions
  - Add assessment functionality
- **2025.21**  
  - Initial preview release

## 📚 Other references

- https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/permissions-reference
- https://github.com/BloodHoundAD/AzureHound
- https://github.com/emiliensocchi/azure-tiering ([Emilien Socchi](https://no.linkedin.com/in/emilien-socchi-06b898136))
- https://cloudbrothers.info/en/azure-attack-paths/ ([Fabian Bader](https://no.linkedin.com/in/fabianbader))