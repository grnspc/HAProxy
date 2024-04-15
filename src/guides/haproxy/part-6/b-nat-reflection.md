---
title: Part 6.B - NAT Reflection - Access From Internal Networks
sectionTitle: Access From Internal Networks
stepTitle: NAT Reflection
step: "6.B"
---

{{ $frontmatter.sectionTitle }}
# Part 6.B - NAT Reflection

Please note that NAT Reflection is only applicable on port forwarding rules, you will have to change the `Allow HAProxy` rule to a port forwarding rule with the localhost (or some random virtual IP on the localhost) as target.

## Process

In your OPNsense GUI, Preform the following;

- Navigate to **`Firewall --> NAT --> Port Forward`**  
  -> Edit the `Allow HAProxy` rule we created in [Part 4 - Step 3](../part-4/004-opnsense-firewall.md) of this tutorial
  
-> At the bottom of each rule there is a setting called `NAT reflection = Use system default`.
You will want to change this to `NAT reflection = Enable`.

Access from internal networks should now be working.