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

#  Why Not Salt

Facilitator: Drew Malone

Scribe: Jonathan Davila


Why isn't salt being considered?

Salt is still the new kid on the block
Puppet was already in the organization

Several weeks to learning curve
*Salt was attractive b/c python
*Attractive due to OS environment
*Easier to learn than puppet
*Storm, Jboss, mysql automation
*Bash scripts for hardening all Salt now
*
Thinking in python vs ruby an issue?
*Bconfig is a player older than puppet

Transitioning is tough

No salt because of persistent connection

Salt SSH/Rate/ZeroMQ transports

Agentless involves placing scripts into tmp and executing from them

Salt Cloud, how is it?
*Good for Openstack
*Vmware in the works
*Preventing vendor lockin

VMWARE contribution leverage pyvomi
*
Favorite is ad hoc commmands
*Remote execution platform
*Grains/Pillars

Thriving community
*Easy to contribute

Master and Minion (slave) architecture, can push or pull
*Can scale to thousands of minions
*
WIth salt there are embedded commands to do almost anything
One compelling argument is scalability
Similar to chef/puppet due to agents

Doing things immediately
Can do things in order

Jinja files with ordering has a workflow impact

For secrets use pillar or pgp
Master keeps key in a root access directory
Unsure about password protected PGP keys in the master

How does a rolling deployment look like?
Map files for salt cloud where you create a profile for OS, and you tell saltcloud to execute
Maps are not equivalent to Grains

Put everything in a pillar to dynamically update

Reactor System
*Fire a reactor event to update LB configuration
*When an event comes on the bus with a tag do something
*If this then that for the datacenter
*Beacons and Engines
*Beacons interact with reality
*Engines provides full freedom of python
*Cant write hooks from git server to hit API
*No sense of tracking of % complete

Repo called saltstates
*Branch based development
*Larger environments should probably leverage Pull Requests
*
