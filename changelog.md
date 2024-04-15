# Changelog

All notable changes to this guide will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),

[//]: # (and this project adheres to [Semantic Versioning]&#40;https://semver.org/spec/v2.0.0.html&#41;.)

## 2024-02-01

- Simplified and improved Part 8. The "INVALID_SNI" certificate is no longer needed, instead we use the "strict-sni" parameter to achieve an even better result.  
  Thanks [@mnaiman](https://github.com/opnsense/plugins/issues/3779#issuecomment-1920084820) for the suggestion.  
  [See here for instructions on how to update your HAProxy configs](https://forum.opnsense.org/index.php?topic=23339.msg188524#msg188524).
- Updated Part 5 - OCSP updates are now built into HAProxy. No external Cron job is necessary anymore.
  Everyone please take note of the warning from [@vladnik](https://forum.opnsense.org/index.php?topic=23339.msg188872#msg188872).

## 2023-03-04

- Added Part 8 to hide the certificate on access by IP.

## 2023-02-23

- Updated Part 7 to avoid confusion.

## 2022-06-11

- Changed the IP address of the "SSL_server" to one that belongs to the localhost subnet. 
- Updated the "NoSSL_condition" based on the HAProxy docs.

## 2022-06-04

- Updated the DynDNS part to use the newer "Dynamic DNS Client" (os-ddclient) plugin.
  The previous "Dynamic DNS Support" (os-dyndns) plugin will be removed with the release of OPNsense 22.7.x.

## 2022-04-11

- Updated the Let's Encrypt part because of changes to the wildcard certificate generation.

## 2021-11-10

- Updated the Let's Encrypt part since the service has been renamed to ACME client.

## 2021-08-01

- Added an explanation about using self-signed certificates for internal communication to the [FAQ](/faq).

## 2021-07-30

- Added an explanation on how to configure local-access-only subdomains in HAProxy.

## 2021-07-29

- Added an alias for the HAProxy ports and updated the WAN interface firewall rule with it.
  This leaves us with only one firewall rule instead of two and makes even more sense if one is using additional frontends on different ports.  
  Thanks [@\_Alchemist\_](https://forum.opnsense.org/index.php?topic=23339.msg113979#msg113979) for the suggestion.
- The tutorial is now using a map file instead of "condition + rule" for service configuration.

## 2021-06-13

- The tutorial is now using a wildcard CNAME record.
- Enabled Proxy Protocol in the "SSL_backend", "HTTPS_frontend" and "HTTP_frontend" configuration so that the IPs of clients accessing HAProxy will now no longer be overwritten with the "SSL_server" IP.
  <https://www.haproxy.com/blog/using-haproxy-with-the-proxy-protocol-to-better-secure-your-database/>

## 2021-06-11

- Implemented [@sorano's](https://forum.opnsense.org/index.php?topic=23339.msg111339#msg111339) enhancements

## 2021-06-03

- Fixes and some enhancements
