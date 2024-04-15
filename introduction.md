# Introduction

Hello,

when I started implementing HAProxy in my network I couldn't find any complete and well written guide out there. I had to puzzle everything together from various websites.
So I thought I would save many of you a lot of time and provide my ultimate HAProxy on OPNsense tutorial. :)

This tutorial will show you how to configure HAProxy as a reverse proxy on OPNsense using wildcard certificates from Let's Encrypt.
It is going to be a step-by-step guide with images on how to set things up while also explaining why we set things up in a certain way.
I will try to make this as complete and detailed as possible.
If you think that there is anything wrong or missing, feel free to tell me about it and I will consider changing it.

<div style="display: flex; column-gap: 2rem; margin: 3rem">
    <a href="https://ko-fi.com/thehellsite" target="_blank">
        <img alt="But Me A Coffee" src="https://storage.ko-fi.com/cdn/kofi1.png" width="286">
    </a>
    <a href="https://www.buymeacoffee.com/thehellsite" target="_blank">
        <img alt="But Me A Beer" src="https://i.postimg.cc/htR5wWr0/buymeabeer.png" width="286" style="border-radius: 9999px">
    </a>
</div>

If you find this tutorial helpful and it saves you a significant amount of time, please consider showing your appreciation by buying me a beer. Your contribution will be a valuable recognition of the time and effort I have put into creating this content and will help me to continue providing quality resources for others.

Thank you for your consideration,  
TheHellSite

## No More Free Support

Due to the increasing number of support requests I've been receiving, both directly in the topic and via DM, I regret to inform that I can no longer provide free assistance. Balancing my real job and personal life has become extremely challenging. While I genuinely want to help everyone resolve their issues to get things up and running smoothly, I find it difficult to allocate the necessary time without sacrificing my personal commitments.

In addition, it has come to my attention that some individuals seeking help are not thoroughly reading the provided tutorial or lack the fundamental knowledge of networking. This has been a recurring issue and has made the support process increasingly frustrating.

I sincerely appreciate your interest in my expertise and if you would like to receive my assistance, I am more than happy to provide you with the details via DM.

Thank you for your understanding in this matter,  
TheHellSite

