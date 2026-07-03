# ZenOS Architectural Principles
**Version:** 1.0  
**Date:** July 1, 2026

These principles govern every technical decision in ZenOS. When in doubt, return here.

---

1. **Capabilities over Products**  
   Organize around enduring capabilities, not temporary product names. A CRM is a capability. A customer portal is a capability. Products are composed from capabilities.

2. **Configuration over Forking**  
   Organizations configure and compose platform capabilities. They do not fork them. albanyzeno.com and centrainet.com run on the same engine with different configuration.

3. **Constitution is Supreme**  
   Any workflow, agent behavior, or deployment that violates the Constitution is invalid. The Constitution does not bend to delivery pressure.

4. **Ship Vertically, Not Horizontally**  
   One thing working end-to-end is worth more than ten things partially built. Empty folders are intentions, not infrastructure.

5. **Proven Stack First**  
   Use what is proven before introducing what is new. Vite + React + Firebase is proven. Node.js earns its way in when there is a real server-side requirement.

6. **Bridge Translates. Platform Operates.**  
   The Bridge layer handles translation between worlds. The Platform executes within a world. Do not mix them.

7. **Knowledge Informs. Intelligence Reasons.**  
   `knowledge/` is the source of truth. `intelligence/` reasons over it. Agents do not invent facts.

8. **Humans Govern. AI Executes.**  
   Critical decisions remain under human authority. The Supreme Architect's judgment is not delegated to an agent.

9. **Every Capability Must Be Independently Testable.**  
   If it cannot be tested in isolation, it is too tightly coupled.

10. **The Repository Reflects How We Think.**  
    Folder structure is not cosmetic. It communicates architecture. When the folder structure is confusing, the thinking is confusing.
