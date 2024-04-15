# Frequently Asked Questions

## Q: Why are we using wildcard certificates and not just regular certificates?

For me the main reason is simplicity, there is no need to set up multiple certificates for multiple subdomains.
Also you don't need to add any rules in HAProxy or your firewall for the ACME plugin to function correctly as the DNS challenge doesn't need this.
If you want to read more about the differences follow the links below.

<https://sectigostore.com/page/ssl-vs-wildcard-ssl-certificate/>

<https://comodosslstore.com/resources/whats-the-difference-wildcard-certificate-vs-regular-ssl-certificate/>

## Q: How does the DNS challenge work?

<https://letsencrypt.org/docs/challenge-types/>

## Q: What is SNI?

<https://en.wikipedia.org/wiki/Server_Name_Indication>

As you already saw above we are going to do it in two stages and not just one.

## Q: Why are we using a virtual IP?

You don't have to!

I am only doing it because I don't want to use the localhost as my "SSL_server". I just prefer to keep things isolated from each other.

You can of course simply use the localhost (127.0.0.1) as your "SSL_server" and let your "HTTP_frontend" / "HTTPS_frontend" listen to that IP.

## Q: Why are we doing 2-Level-SNI?

The main reason for this is so we can load balance services that don't require additional SSL offloading, f.e. OpenVPN over TCP.

Basically we will have two frontends listening on port 443, one with and one without SSL offloading.

## Q: How can we load balance TCP traffic that we don't want to get SSL offloaded, f.e. OpenVPN over TCP?

In my tutorial I only explain how to "redirect+load balance SSL offloaded traffic".

This is because I myself don't have (yet) the need to actually load balance any non SSL traffic.

However balancing non SSL traffic is pretty much the same as balancing SSL traffic.

You only have to make sure that your "NOSSLservice_rule" or "NOSSLservices_mapfile_rule" is placed on the "SNI_frontend" instead of the "HTTPS_frontend" and that the backend that belongs to your "NOSSLservice_server" is running in TCP mode.

## Q: How can I add new services in HAProxy?

It is almost everytime the same procedure to configure / add a new service in HAProxy.

The long way is to...  
1. Create the server or servers, f.e. "NEW_server".
2. Create the corresponding backend containing "NEW_server", f.e. "NEW_backend".
3. Create the condition that matches the traffic of "NEW_server", f.e. "NEW_condition".
4. Create the rule that redirects traffic to "NEW_backend", f.e. "NEW_rule".
5. Add "NEW_rule" to your "SNI_frontend" (if you don't need SSL offloading) or to your "HTTPS_frontend" (if you need SSL offloading).

## Q: Is there a faster way of adding new services if I have a lot of subdomains and services?

Yes there is! Thank you [@sorano](https://forum.opnsense.org/index.php?topic=23339.msg111339#msg111339) for pointing this out.

<https://www.haproxy.com/documentation/hapee/latest/configuration/map-files/overview/>

<https://www.haproxy.com/documentation/hapee/latest/configuration/map-files/syntax/>

Map files are a great way of adding new services to your HAProxy configuration.

It is most of the time much faster than creating a individual condition + rule for each service and then adding each rule to your frontend.

To sum this up, the short way is to...

1. Create the server or servers, f.e. "NEW_server".
2. Create the corresponding backend containing "NEW_server", f.e. "NEW_backend".
3. Create a map file containing all of your subdomains (of your services) with the corresponding backend.
4. Create a rule that uses that map file.
5. Add this rule to your desired frontend.

You might be asking yourself now: Why is this faster?

Well, because next time you add a new service you will only need to create the server, the backend and add the combination of "subdomain to backend" to your map file.

## Q: Do I need to enable "SSL" in the Real Server configuration of a service?

You need to think of a reverse proxy setup like this.

WWW ---Stage 1---> yourdomain.tld ---Stage 2---> OPNsense + HAProxy + LE ---Stage 3---> internal services

### Stage 1 + 2
Public facing external traffic. Traffic in these stages is now always encrypted with a **verified** SSL certificate. In this case it is created and verified by Let's Encrypt.

### Stage 3
Local facing internal traffic. Traffic in this stage can or can not be encrypted, depending on your service setup. This is the traffic from HAProxy to your internal service. It doesn't need to be encrypted because you can consider your internal network as trusted.

However it is still strongly advised to also run this traffic encrypted.

In HAProxy you only need to check the "SSL" box in your real server setting for this.

But then you also need to actually enable SSL encryption on that service, f.e. by installing a self-signed certificate on that service and enabling HTTPS. Even though using a self-signed certificate will give you a warning by your browser when accessing the service directly and not through the reverse proxy, the traffic is still encrypted. The certificate is just unverified, which isn't that much of an issue since we are using our reverse proxy in front of it anyway.

How to actually do this this depends on the service but this should be covered somewhere in its manual.

You can read more about this here: <https://www.globalsign.com/en/ssl-information-center/dangers-self-signed-certificates>