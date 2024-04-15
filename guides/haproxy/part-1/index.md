# Part 1 - Plugin Installation

Make sure your OPNsense is up-to-date and that you are using the OpenSSL firmware flavour as the LibreSSL version doesn't support TLS_1.3 as of writing this.

## Process
In your OPNsense GUI, Preform the following;

- Navigate to **`System --> Firmware --> Updates`**  
  -> Install all updates.
  
- Navigate to **`System --> Firmware --> Plugins`**  
  -> Install the following plugins:  
  - os-acme-client
  - os-ddclient
  - os-haproxy