---
title: "VPN Split Tunneling: What It Is and How to Use It Properly"
date: 2026-06-11
category: "VPN Guides"
tags: ["split tunneling", "VPN", "privacy", "configuration"]
readingTime: 6
author: "VPN Adviser Team"
---

# VPN Split Tunneling: What It Is and How to Use It Properly

Split tunneling is a VPN feature that lets you route some internet traffic through the VPN while sending other traffic directly to your internet service provider. You get to choose which applications or websites use the VPN tunnel and which ones go straight to your ISP. This flexibility solves real problems that come up when you use a VPN every day.

## What Split Tunneling Actually Does

Imagine your internet connection as a road with two lanes. With a standard VPN, all traffic uses one lane (the VPN tunnel). With split tunneling enabled, you can send your torrent client down one lane (through the VPN) and your web browser down another lane (direct to your ISP). You control which apps use which lane.

The practical value is immediate. Streaming services like Netflix block VPN IP addresses. Online banking sometimes flags VPN connections as suspicious. Video calls often perform better with a direct connection to reduce latency. Gaming can benefit from lower ping when you bypass the VPN. Split tunneling lets you use the VPN only where you need privacy and go direct when you need speed or compatibility.

## Include Mode vs Exclude Mode

Most VPN apps support two modes of split tunneling:

**Exclude Mode:** Everything uses the VPN tunnel except the apps you list. You open Settings, go to Split Tunneling, add "Netflix" to the exclude list, and Netflix traffic goes direct. Everything else (email, messaging, browsing, file downloads) stays in the VPN tunnel. This is the safer default. Most apps route through the VPN unless you explicitly exclude them.

**Include Mode:** Only the apps you list use the VPN tunnel. Everything else goes direct. You add "Torrenting Client" to the include list, and only the torrent traffic uses the VPN. Everything else bypasses it. This mode requires you to actively choose which apps you want protected, which is useful if you only need a few specific apps protected and want everything else fast and direct.

## How to Configure Split Tunneling

The process is similar across modern VPN apps but not identical. Here is the general path:

1. Open your VPN application settings or preferences.
2. Look for "Split Tunneling", "Split Traffic", "Split Routing", or "App Routing".
3. Choose include or exclude mode.
4. Add applications or IP addresses to the list.
5. Connect to the VPN and verify the setting works.

**Example in ExpressVPN:** Settings > Network Protections > Split Tunneling > Toggle on > Choose exclude or include mode > Add apps.

**Example in NordVPN:** Settings > Split Tunneling > Toggle on > Add apps.

The exact name and location vary, but the concept is universal. If your VPN app does not have a split tunneling option, it is either an older app or a limited plan. Most modern, paid VPN services offer it.

## Best Use Cases for Split Tunneling

**Torrenting + Regular Browsing:** Torrent through the VPN for privacy. Browser direct for speed. Put your torrent client in include mode and everything else stays clear.

**Work + Personal:** Tunnel your work VPN connection through your paid VPN for extra security. Personal browsing goes direct for speed. This is common for remote workers who want to add a layer of privacy on top of their company VPN.

**Streaming + Privacy:** Exclude Netflix and other streaming apps from the VPN so they work without VPN blocks. Keep your email and messaging in the tunnel.

**Gaming + Privacy:** Game over a direct connection for lower ping. Keep downloading and file-sharing through the VPN.

## The Security Implications of Split Tunneling

Split tunneling is a trade-off between convenience and coverage. Any traffic that bypasses the VPN is fully visible to your ISP, visible to your network administrator if you are on a corporate network, and visible to any website you visit directly.

This is fine if you understand the choice. You are not getting DNS leak protection for traffic that goes direct. You are not hiding your IP address for direct traffic. Your ISP sees everything that bypasses the VPN. If you are okay with that trade-off in exchange for faster streaming or lower ping, split tunneling is a smart choice. If you want 100 percent privacy for all traffic, keep the VPN enabled for everything and accept the performance cost.

## DNS Leak Risk With Split Tunneling

The most common security mistake with split tunneling is misconfigured DNS. When you split traffic, some apps go through the VPN tunnel and some go direct. If DNS is not also split correctly, the direct apps might still send DNS queries through the VPN's DNS servers (or vice versa). This defeats the purpose.

Example: You set Netflix to bypass the VPN, but your DNS is still pointing to the VPN provider's DNS server. When Netflix tries to resolve 
etflix.com, the query goes through the VPN tunnel anyway. Netflix sees the VPN IP address and blocks you.

Best practice: Use the "Smart DNS" or "DNS Routing" option in your VPN app if available. This configures DNS to follow the same split rule as the app traffic. If your app goes direct, its DNS goes direct. If your app goes through the VPN, its DNS goes through the VPN.

To verify, run a DNS leak test at dnsleaktest.com before and after enabling split tunneling. The test shows which DNS servers are being used. If the results surprise you, adjust your split tunneling rules.

## What Split Tunneling Does Not Protect

Split tunneling does not encrypt traffic that bypasses the VPN. When you exclude Netflix from the VPN tunnel, Netflix can see your real IP address. Netflix sees your location. Netflix sees your traffic. You are trading privacy for functionality. That is the point. Just do not assume split tunneling is protecting traffic that goes direct.

Split tunneling does not prevent ISP throttling of direct traffic. If your ISP throttles torrent traffic, and you exclude your torrent app from the VPN to go direct, the throttling will still apply. Split tunneling is about routing choice, not throttling bypass.

Split tunneling does not work on certain restricted networks. Some corporate networks or public WiFi systems monitor or block split tunneling. If your VPN connection itself is blocked, split tunneling will not help.

## Bottom Line

Split tunneling is a powerful feature for users who want granular control over their traffic routing. It solves real problems: streaming service blocks, gaming latency, app compatibility. Use it when you understand the trade-off. Route privacy-sensitive traffic through the VPN. Route speed-sensitive traffic direct. Verify your DNS is split correctly. And remember that traffic going direct is not encrypted or hidden from your ISP. That is the deal you are making, and for many users, it is the right one.
