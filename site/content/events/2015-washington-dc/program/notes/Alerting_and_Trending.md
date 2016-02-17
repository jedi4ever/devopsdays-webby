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
# Instrumentation of Alerting & Trend Data

Facilitator: Kevin Ege

* Some use Nagios but limited metrics to collect
* Scount is a tool that was recommended
* Big concern: How do you reduce False Positives while still catching relevant issues
* We encourage dev team to put in metrics during dev time and identify failure conditions
* Example: Web site activity falling below certain levels but if happens on a Sunday and get false postiive
* There are types of issues that are difficult to catch that are not about latency but the content is not right which is hard to detect
* You have to uncouple development and code from architecture and service uptime
* Developers won't always know what the impact of a node failure would be on a service
* Alerting burden falls on ops but in concert with unit-tests that developers run during testing
* Example: front developers won't relate to IOPS alerts or database connection issues
* There are differnet domains of monitoring: Page load time vs. database monitoring
* If there are failures in the back-end but is not affecting user experience issues then it should not be escalated
* You can alert a DBA 3 days in advance but only the DBA who would know what to do with it before an outage happens
* In an ephemeral infrastructure, you can restart the whole app and it may help certain issues but not all
* Analytics software like Skyline doesn't produce good results
* Advanced statisics, machine learning, correlation is the intent
* You can blow away nodes based on statistics with the right architecture
* Some tried to write own statistics but hard to get good results
* Some have a lot of provisioned IOPS and reserved instances to help with performance issues
* We trend data and as Subject Matter Experts to review the graphs and pick up on hints on spikes
* We go back 3 years and use RRD
* We keep 1 year full granulatiry and then aggregated data after that
* Not retaining a tremendous amount of granular data
* Alerting on COGS factors with AWS instances
* Avoid baked in static thresholds
* Uncouple data instrumentation from alert logic
