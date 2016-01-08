---
extension: html
filter:
  - erb
  - markdown
title: Program
dirty: true
layout: event_washington_dc
platinum: false
---

# Migrating middleware

Facilitator: Robert Treat

Scribe: JUSTIN SPENCER

Before devops, analysis has to be done - (Can we do continuous integration, is product stable, in maintenance, etc?)

Clarification? Are we coming up with an incremental strategy, or some overnight movement?

What kind of delivery schedule exists?

Hardest migrations: Taking an old mainframe and moving it to AWS.

Culture should be accepting of "DevOps" - Especially important in legacy app environments

Upgrade internal things before moving to prod devops.
Start with automation before moving to full "DevOps"

How do we determine if the effort to move to DevOps is worth it? - Often occurs when upgrading an old system or re-deploying something legacy.

Moving targets like offshore legacy are very different situations.

Example: Isolated 3rd party software that cannot be upgraded, but could be "wrapped" or abstracted such that it can fit into DevOps architecture

It is critical to measure the value and cost of moving ot DevOps? (and potentially introducings bugs or other defective behaviors) - Functionality may also differ.

Sometimes more valuable to rewrite than to re-work the existing code. Even just in dealing with the legacy code, it's possible to understand the algorithms/behavior so a rewrite can be done.

What is the definition of legacy? Many people would consider it as old but maintained. Others would quantify it as "out of support".

Cheapo method for determining devops - Deploy/run legacy app on a laptop. If it cannot run, figure out why not.

There is also a cost to having something totally different from the normal paradigm.

Static may not be equivalent to legacy. (e.g. SSL upgrades)

How does something "legacy" (still maintained, but rare) - important to consider deprecation policy. Important to have a flow and know how greenfield & brownfield coexist with one another.
Example: Some apps sitting on a 2003 server (nearing end of life), and must manually move from '03 to newer server. One must then justify DevOps vs. cost of manual operations.
