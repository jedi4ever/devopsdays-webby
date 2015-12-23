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

# DevOps in Silos?

Scribe: Robb Kidd

Having a DevOps team that sits between Dev and Ops to solve communications issues between Dev and Ops is an anti-pattern.

If you find yourself on a separate DevOps group, the roles can fall into:
Dev: Build the Business
Ops: Run the Business
DevOps: Enable the Business

But in this case, the DevOps group needs to own things (e.g. licensing, credentials) or Dev and Ops teams won't listen to them.

Boiled out -> common tooling to enhance collaboration. Let separate teams learn from each other.

Does everyone here version *everything*?
* database schemas
* best practices to version change scripts
* configurations of servers?
* configuration management tools (e.g. Puppet, Chef, Salt, Ansible) for all the servers and that code checked in

Tooling that helps Dev and Ops coordinate are what should be focused on.

How are your Ops teams and Dev teams incentivized?
* Traditional Dev incentivized to make new features: CHANGE
* Traditional Ops incentivized to keep a system up and stable: NO CHANGE

One healthy organizational structure:
* cross-functional teams organized around architecture components
* Ops/DevOps/Infrastructure/whatever-you-call-it team provides common tooling—deployment targets/platform, infrastructure services (logging, monitoring, etc)—so that component teams have greased skids for deployment and don't duplicate effort
