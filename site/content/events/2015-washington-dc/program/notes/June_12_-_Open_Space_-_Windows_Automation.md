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

# Windows automation!

Automation and integration is better now than it has been in the past.

Chef, puppet now have windows support

Building tools out of powershell!  These are all a bit hacky but better than nothing

- Could have chef run Powershell; using Chef as framework
- AWS provides lots of Powershell command line tools
- Jenkins to execute a bunch of Powershell scripts; indelible change record

Using 'Octopus' suggested (tools are open-source, server is purchased)

- At least one strong user advocate in the group

Companies who say 'We support Windows but you must run/maintain our product on a Linux box' is potentially problematic

- Relic of old-style thinking?  Of course better to know how to do both
- But saying 'you need a Windows box to run stuff on Linux system' would be weird
- OS as commodity vs. domain knowledge needed for security / integration / use
Desired State Configuration: Windows state management API.
- Native component of Powershell; doesn't have the ecosystem around it as Chef / Puppet / etc.
- Used by Chef.
- More of an interface instead of a system

MSBuild has odd dependencies which aren't always present for easy implementation

- Only fix mentioned was complicated NuGet stuff

Question: How to get Windows to record application versions per machine?  Registry?  Other?

- AWS EC2 tags mentioned as possible record
- Create semi-immutable infrastructure using Windows AMIs; record which AMIs are being used
- Potential problem with other users making changes; no Chef / Puppet / etc. to keep systems from being altered

Commercial tool called 'Guardrail' for monitoring / immutability automationu

- Scans system state, alerts when something changes
- Can generate DSLs for Chef / Puppet / etc.
- Configurable system checks

Barriers to adopting Chef / Puppet / Ansible / Salt

- With small numbers of Windows servers, cost of implementing can outweigh the rewards
- Provisioning logic can be awkward
- Potentially needs more adoption of containerizing etc. (upcoming 'Nano Servers') by MS before it becomes easy

Use of chocolatey can help!

- Some debate vs. ansible among group, general consensus is that it's useful and should be checked out
Meetups for more info:
- Powershell user group meetings nearby @ Reston Microsoft Campus (check powershell.org group information page)
- Devops groups also

MS shifting from providing platforms to providing expertise / best practices as a service
