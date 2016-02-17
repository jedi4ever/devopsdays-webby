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

# Monitoring Best Practices

Facilitator:  Steve Bannon

Scribe:  Joanne Garlow

Monitoring should help towards the bottom line
- counter - the money you make in 6 months might depend on that you are doing today

Monitoring by working with the developers to add custom parameters into the APIs and using log messages in case of issues to trace back problems to the root cause

Top to bottom view of the whole system is critical

Reviews of key monitoring after deployments

Tools - New Relic, cacti, zabbix, mysql monitor, graphite, influxDb, logstash, splunk, solarwinds, PagerDuty (highly recommended),
*nagios - people have a love/hate relationship
*icinga - fork of nagios


Tracing issues requires thoughtful logging in advance

Use logstash to get all different logs together roughly correlated in time

*Key is getting all the logs in the same place
*Big challenge is getting all the groups to feed all their data into the same place
*Logs can be helpful when you are missing some key monitoring - but after you hit a problem, start monitoring

Rolling up monitoring and metrics to get something that executives care about

Cucumber - write your behavior specifications at a high business level and then instrument monitoring around these requirements in a systematic way
*NewRelic was mentioned as another way to do this.  
*Nontechnical person can write cucumber scripts

Monitor everything you care about butonly alert when it is actionable - don't page someone for something that can wait
Don't let there be so much monitoring that it makes noise that people are ignoring
Get the right level of notifications on issues - if it can wait - put it in an email
Use something like VictorOps to mange the "actionable alerts" and make sure the right people get the alerts... to avoid alert fatigue and ignored pages.

Transparency in what is getting monitored


You have to really think about the monitoring tools because you get pretty locked into whatever you choose for a while


Need to throttle logs wisely to prevent getting too many of the same error without hiding the extent of the error
