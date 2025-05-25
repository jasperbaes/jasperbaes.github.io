## 🚀 About

This tool visualizes the shortest escalation attack paths to (direct or indirect) Global Administrator permissions or Entra ID tenant hijacking. It helps you understand how Entra ID roles and Graph API permissions  can be chained to escalate privileges in an environment.

Features:
- Interactive flow diagram of role relationships and escalation paths
- Click nodes for detailed markdown-based documentation
- Filter/search roles by name

**Green connections** in the diagram represent direct privilege escalations. These paths will always work as designed.
All other (grey) connections represent escalation paths that require additional actions by the threat actor and may not always succeed.

## 🚧 Limitations

- Only built-in Entra roles + Graph API permissions are included
- Some attack paths and documentation may not be fully represented

Found a bug or have an improvement? Please [send me a message on Linkedin](https://linkedin.com/in/jasper-baes).

## 🆕 Release history

Release version numbers: YEAR.WEEK

- **2025.22**  
  - Add Graph API permissions
- **2025.21**  
  - Initial preview release