# Current Ciphers and Cipher Suites

Last updated/verified on 2023-02-23 using Mozilla SSL Configuration Generator.

<https://ssl-config.mozilla.org/#server=haproxy&version=2.4.17&config=intermediate&openssl=1.1.1o&guideline=5.6>


All ciphers with a strength of 128 bit or below have been removed in order to get a 100% A+ rating at SSL Labs.

### Cipher List
```text
ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES256-GCM-SHA384
```

### Cipher Suites
```text
TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256
```