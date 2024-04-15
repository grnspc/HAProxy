---
title: Part 4.4 - Firewall (WAN) - System Preparation
section: System Preparation
chapterTitle: Firewall (WAN)
chapter: "4.4"
---

{{ $frontmatter.section }}
# Part {{ $frontmatter.chapter }} - {{ $frontmatter.chapterTitle }}

Create the automation to restart HAProxy after our certificates have been renewed.

## Process

In your OPNsense GUI, Preform the following;

- Navigate to **`Services --> ACME Client --> Automations`**  
  -> Create a new automation and use the following settings.

```text{5}
Enabled:        checked
Name:           Restart HAProxy
Description:    Restart HAProxy plugin after certificate creation
Run Command:    Restart HAproxy (OPNsense plugin)  
```


## Reference
![P003-004-ACME-Automations](assets/P003-004-ACME-Automations.png)
