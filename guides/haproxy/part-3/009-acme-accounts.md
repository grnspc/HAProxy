---
title: Part 3.9 - Update Account - ACME Client
section: ACME Client
chapterTitle: Update Account
chapter: "3.9"
---

{{ $frontmatter.section }}
# Part 3.9 - Update Account

Since we successfully issued our staging certificate we can now leave the test environment and issue our production certificate.

## Process

Edit your account created in [part 3.3](003-acme-accounts)

In your OPNsense GUI, Preform the following;

- Navigate to **`Services --> Dynamic DNS --> Accounts`**  
  -> Click on "edit"  
  -> Update the ACME CA from `Let's Encrypt Test CA` to `Let's Encrypt [default]`.

```text{5}
Enabled:         checked
Name:            <your_subdomain>.dedyn.io

E-Mail Address:  <your_email>
ACME CA:         Let's Encrypt Test CA // [!code --]
ACME CA:         Let's Encrypt [default] // [!code ++]
```

## Reference

