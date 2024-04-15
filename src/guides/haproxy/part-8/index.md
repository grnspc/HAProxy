---
title: 'Part 8 - Advanced Configuration: Hide Your Certificate on Access by IP'
sectionTitle: 'Advanced Configuration: Hide Your Certificate on Access by IP'
section: 8
stepTitle:
step:
---

# Part 8 - Advanced Configuration: Hide Your Certificate on Access by IP

You might have noticed that if you now access your OPNsense using your public WAN IP `https://<YOUR_PUBLIC_IP>/` the connection will be secured and upon further inspection you will see that your Let's Encrypt certificate is being used.

While this is not a major security problem it still presents at least some privacy issues.

To fix this we can add the `strict-sni` parameter to the `HTTPS_frontend` so the connection will be closed when HAProxy is directly accessed using your public WAN IP `https://<YOUR_PUBLIC_IP>/`.


## Process

In your OPNsense GUI, Preform the following;

- Navigate to **`Services --> HAProxy --> Settings --> Virtual Services --> Public Services`**  
  -> Edit the `HTTPS_frontend` service and assign the following settings.

```text
** Enable advanced mode **
----
SSL option pass-through:    curves secp384r1 // [!code --]
SSL option pass-through:    curves secp384r1 strict-sni // [!code ++]
----
```

You should now no longer get presented with your trusted Let's Encrypt certificate when accessing `https://YOUR_PUBLIC_IP/` but instead with an `SSL_ERROR_UNRECOGNIZED_NAME_ALERT`.