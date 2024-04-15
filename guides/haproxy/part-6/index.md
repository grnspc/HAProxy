---
title: Part 6 - Access From Internal Networks
sectionTitle: Access From Internal Networks
stepTitle: 
step: "6"
---

# Part 6 - Access From Internal Networks

If you try to access your URL `<your_service>.<your_subdomain>.dedyn.io` from a device in your internal network, it should fail.

There are two ways of fixing this. I will cover both options but keep in mind that [Split DNS (Option A)](a-split-dns) is the suggested way of doing it.

[NAT Reflection (Option B)](b-nat-reflection) is an inferior solution since you lose the ability to track originating source IP in HAProxy when going through NAT. ([@sorano](https://forum.opnsense.org/index.php?topic=23339.msg111439#msg111439))

[Option A - Split DNS](a-split-dns) (https://docs.opnsense.org/manual/unbound.html#overrides)

[Option B - NAT Reflection](b-nat-reflection) (https://docs.opnsense.org/manual/nat.html)