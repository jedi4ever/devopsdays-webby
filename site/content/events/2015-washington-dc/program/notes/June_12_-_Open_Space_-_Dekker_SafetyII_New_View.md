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

# Sidney Dekker / New View / Hollnagle / Woods / Safety II / etc

Facilitator: Alan Kraft

Scribe: Marc Esher

## Resources that came up during our talk:

- Field Guide to Understanding Human Error - Dekker (get the latest version)
- PreAccident Investigations Podcast
- Dave Zweiback: blameless postmortems free ebook; also writing a book called "Blame" (John thinks)
- Circuit Breaker, from "Release it!" by Michael Nygard
- Rob England (@itskeptic) on reconciling devops and itil, etc: http://www.devopsdays.org/events/2013-newzealand/proposals/ReconciletheWorldViews/ (I think)


## Notes

- Safety I: focusing on stopping things from going wrong
- Safety II: focusing on ensuring things go right
- Dekker's New View is similar: Alan sees them as a convergence
- Dekker was a student of Woods, coined "Just Culture"

- Dekker's recent stuff: needs to be a forward thinking "restorative justice", not "retributive justice" (i.e. punishing)
- CIO Shopzilla... "when we go into the warroom, the *problem* is the enemy"

- Jason Hand: what do you think of the term post-mortem?... maybe Retrospective, Learning Review? Should "post-mortem" stay?
  - John Willis: double-edged sword... maybe debating it is a waste? maybe it takes us off course. His gut is to keep the name and go with it
  - Alan: says Allspaw has said "start calling them learning reviews". People need to understand the goal of the method of blameless postmortems, and calling it "Learning Review" bakes that in. However, keeping "blameless" in it keeps the focus on it not being a blame event

- Can't just describe the behavior... have to describe the context of the behavior.
- Mark Schwartz: thinks "postmortem" is not a good term for things that go right, but for things that go wrong, "postmortem" suggests the sense of urgency that should accompany it... because something did go wrong
- John tells story of a conversation he had: "what happens when somebody doesn't follow up with something that came up during the postmortem". And during that story, the person who was asked blanked for 30 seconds... because that never happens for them. John says "that's when you know you're nailing culture"

- Kevin from Akamai: Setting the cultural tone of "safety" up front

- John says: these things make us less fragile, more resilient

- John tells netflix story: These are the patterns (circuit breaker, etc), and we're going to start using chaos monkey to knock down instances... you figure it out. And the teams that adopted the patterns are the ones that succeeded
- Circuit Breaker, from "Release it!" by Michael Nygard

- Alan: fascinated by how these ideas from other industries are making it into our industry

- FAA story: previously, for pilots, if you F'd up, you lost your license, which meant you lost your career.
- 1974(?) they changed it: "if you come forward and tell your account, you won't lose your license. But if you don't come forward, if we find it on our own, then the hammer's gonna drop"
- Sounds innovative what we're doing, but IT is late to the game

- Greg Elin: a lot of stuff in IT does not have immediate feedback loops, or dire consequences like in the army or airplanes falling out of the sky
  - separation of duties is an antipattern because you don't get the feedback loop, i.e. your stuff breaks but it's not your problem

- John W: at netflix, managers wear pagers

- John has hacks for explaining things. For example, John Recommends reading Personal Kanban (Jim Benson) to really understand why WIP limits are so important
  - But John has a harder time explaining "why failure is so important"
  - Says maybe it's because sysadmins whole lives have been about "Protect": Protecting servers. They should never go down, etc. That's one reason why it's hard to adopt a culture of antifragility, chaos monkey, etc

- Alan: about Rob England (@itskeptic): "ITIL" mindset was all about protect, and devops all about serve... do you want to be the cop or the servant? ITIL all about building in protection, robustness; But DevOps, on the opposite end, can achieve the same ends by seeking resilience instead

check out  http://www.itskeptic.org/kamu and http://devopscafe.org/show/2013/3/25/devops-cafe-episode-40.htm
l
  - (Marc: I think I have this a bit wrong)
- John says that Rob kind of came around on this; he's going to add the link from a New Zealand devops days where this happened

- Jason Hand asks:
    - when doing postmortems, what are the bare minimum stuff you need to capture
    - Kevin: logs, history, alarm history
    - John: the human's context
    - Kevin tells story: recent incident, basically looked like someone missed a checklist item... that guy screwed up
      - but when he started looking at that guy's environment, why was that an OK decision for that person to make; realized that that guy going through a checklist was the only line of defense they had against a widespread system outage. Realized that the system wasn't doing a good enough job of protecting them

- Alan says: watch the archived velocity video on allspaw's tutorial about postmortems
- at etsy, allspaw teaches everyone about this stuff

Check out Allspaw's blog; links to the  Velocity Conference New York 2014 tutorials are in the "Try it" section of the post.
http://www.kitchensoap.com/2014/11/14/the-infinite-hows-or-the-dangers-of-the-five-whys/

- John plugs Dave Zweibeck's workshops on blameless postmortems
