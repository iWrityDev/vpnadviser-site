---
title: "How to Test If Your VPN Is Working: 5 Quick Checks to Verify Your Connection"
date: 2026-06-12
description: "A working VPN protects your IP address, encrypts your traffic, and masks your location. Here are five practical tests you can run right now to confirm your VPN is actually doing its job."
tags: ["vpn", "security", "testing", "privacy", "how-to"]
---

# How to Test If Your VPN Is Working: 5 Quick Checks to Verify Your Connection

You've installed a VPN, connected to a server, and you see the green light that says "connected." But how do you actually know your VPN is working? Green light doesn't always mean your traffic is protected. This guide walks you through five concrete tests that prove whether your VPN is actually encrypting your data and hiding your identity.

## Why This Matters

A broken VPN gives you false security. Your browser might show the connection status as "active," but if the VPN has a leak, your real IP address is still visible to websites and advertisers. A VPN leak means your ISP can see your traffic, your location is exposed to the websites you visit, and you have zero privacy despite thinking you're protected.

Testing your VPN takes five minutes. Skipping the test could mean months of believing you're protected when you're not.

## Test 1: Check Your Public IP Address

This is the simplest test. Your VPN hides your real IP address and assigns you a fake one. Checking whether websites see your real IP or the VPN's IP tells you whether the basic function is working.

Step 1: Disconnect from your VPN.

Step 2: Visit ipinfo.io in your browser. Write down your real public IP address (shown at the top as "IP").

Step 3: Connect to your VPN and choose a server location (preferably in a different country than where you physically are).

Step 4: Refresh ipinfo.io. The IP address should now be different. It should also show a location matching the VPN server location you chose, not your actual location.

If the IP address is still your real one after connecting to the VPN, your VPN is not working at all. If the IP changed but still shows your real location, the VPN has a DNS leak (covered in Test 3 below).

## Test 2: Run a WebRTC Leak Test

WebRTC is a browser feature that allows real-time communication (video calls, screensharing). It's useful, but it can leak your real IP address even when your VPN is connected. A WebRTC leak means websites can see your true identity despite the VPN.

Step 1: Connect your VPN to a server.

Step 2: Visit browserleaks.com/webrtc in your browser.

Step 3: Click the "Start WebRTC Leak Test" button.

Step 4: The page will show any IP addresses it detects. If only the VPN's IP appears, you're safe. If your real IP appears anywhere in the results, your VPN has a WebRTC leak.

Most modern VPNs have patched this vulnerability, but cheap or older VPNs still leak WebRTC. This test catches that.

## Test 3: Check for DNS Leaks

DNS (Domain Name System) is how your browser translates website names into IP addresses. If your VPN doesn't protect DNS queries, your ISP sees every website you visit even though the VPN encrypts your traffic. This is called a DNS leak.

Step 1: Connect your VPN.

Step 2: Visit dnsleaktest.com in your browser.

Step 3: Click the "Extended Test" button.

Step 4: The page will show which DNS servers are handling your queries. If you see DNS servers from your ISP (usually the ISP's name will appear), you have a DNS leak. If you only see DNS servers from your VPN provider, you're protected.

DNS leaks are common because many users don't realize they're happening. The connection looks fine, the IP is masked, but the ISP still knows which websites you visit because they see the DNS lookups.

Most quality VPNs include DNS leak protection in settings (sometimes called "DNS leak protection" or "secure DNS"). If your VPN shows a DNS leak, go into settings and enable the option if it exists.

## Test 4: Verify Your VPN Encryption

This test confirms that your traffic is actually encrypted, not just hidden. It's more technical but worth understanding.

Step 1: Open your VPN's settings and check the encryption protocol. Modern VPNs use WireGuard or OpenVPN with AES-256 encryption. Write down what your VPN uses.

Step 2: Check the documentation on your VPN provider's website. Confirm that the protocol you're using (WireGuard, OpenVPN, etc.) actually exists and matches the documentation. If your VPN says it uses "XYZ 4000 Encryption" and you can't find that protocol anywhere on the VPN's website, the VPN is lying about encryption.

Step 3: If you're technical, you can run a packet analyzer like Wireshark. Capture network traffic while connected to the VPN. If the traffic is encrypted, it will appear as random gibberish. If it's plaintext or easily readable, encryption is failing.

Most people skip this test because it requires technical knowledge. But if you want absolute certainty, Wireshark is the gold standard.

## Test 5: Confirm Kill Switch is Working

The kill switch is a safety feature that blocks all internet if the VPN disconnects. Without a kill switch, if your VPN drops for a few seconds, your real traffic leaks before you notice.

Step 1: Connect to your VPN and enable the kill switch in settings.

Step 2: Open your browser and load a website to confirm the VPN is working.

Step 3: Manually disconnect the VPN (in the VPN app, click "Disconnect").

Step 4: Try to reload the website. If the kill switch is working, the page will not load and you'll see an error or no connection.

Step 5: Reconnect your VPN. The website should load again.

If the website loaded without the VPN in step 4, your kill switch is not working. Re-enable it in settings and try again. If it still fails, your VPN's kill switch feature is broken and you should switch to a different provider.

## What If Tests Fail?

If any test fails, you have a few options.

First, check your VPN's settings. Many VPNs have leak protection options that are turned off by default. Look for "DNS leak protection," "IPv6 leak protection," "WebRTC leak protection," or "Kill Switch." Enable any that are off and re-run the tests.

Second, try a different VPN server. Sometimes a specific server location has issues. Connect to a different country and re-run the tests.

Third, restart the VPN app. A simple restart often fixes temporary glitches.

If tests still fail after trying those three steps, your VPN provider has a real problem. Switch to a different provider. You cannot trust a VPN that doesn't pass basic leak tests.

## How Often to Test?

Run these tests once when you first set up your VPN. Run them again if you notice unusual behavior (pages load slowly, connection drops frequently, or your location appears wrong).

You don't need to test constantly. But every few months, re-run at least Test 1 and Test 3 to make sure nothing has degraded.

## The Bottom Line

A VPN is only as good as its weaknesses. A VPN that masks your IP but leaks your DNS is worse than useless, because you think you're protected when you're not.

These five tests take 10 minutes and give you hard proof that your VPN works. Run them today. If your VPN fails any test, either fix it or replace it. Trust, but verify.
