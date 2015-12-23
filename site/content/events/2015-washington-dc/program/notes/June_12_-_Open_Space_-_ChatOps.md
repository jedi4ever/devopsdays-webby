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

# ChatOps

Facilitator: Jason Hand (@jasonhand)

Scribe: Robb Kidd (@robbkidd)

Core of ChatOps: move tools used everyday to obtain information and take actions into chat

Anything you would do from a command line, do it in chat. Makes the information gathered and actions taken visible to a team.

Is a bot required? No, not with modern chat services that integrate with multiple other services. But with a bot, you can *own* your integrations and then be able to add custom automation to it.

reddit.com/r/chatops
Jesse Newland http://jnewland.com/ has a sidebar at the chatops subreddit

VictorOps free ebook for ChatOps

Actions that require approvals?
* Some use it as an approval system. Someone attempts to push code, bot asks for approval from approver.

Examples online? Works from Michael Ansel @ Box is a good resource.

Webhooks can be a method to compartmentalize access for bot to take actions.

If you're already in chat working an incident, it makes sense to bring information and actions into chat where everyone is already collaborating.

Bot commands can provide integrations into tools that are hard to use. Example: query Salesforce/other CRM to lookup customer info during ticket resolution.

VictorOps: easily extend trials of product through bot command to simplify business process that used to be go open another tool, do a customer lookup, change the state, save it, etc.

Most important integrations to start with:
* Test/Build status (e.g. Jenkins)
* Version control changes (e.g. GitHub)
* Something fun: pugbombs, moustache me, catstreamer

Big benefit: LEARNING happens immediately. Automates training - training through osmosis - making the why and how visible in the place where everyone spends their time. Build help into your bot commands!

Recommendation: list current open pull requests and their state (e.g. any +1s) reduced lagged changes awaiting review

Can get noisy. Consider segregating/multiplexing messages to keep messaging to chat rooms focused for rooms topic. (Also, consider rooms focused around topics/disciplines/releases to make messaging useful to the context.)

Use ChatOps even if your team is in the same room? YES

Recommendation: have your bot poke services to take actions which allows you take those actions outside of chat if you need to.

Absolutely encourage private conversations to happen publically in appropriate topic/channel/room. Capture in-person conversations in the chat channel as soon as possible.

* Bots:
* hubot (node.js)
* lita (ruby)
* slackbotsy (ruby)
* ruby block responders + sinatra web hook handler
* see https://github.com/rlister/slackbotsy (library) and https://github.com/rlister/slackbotsy_example (deployable implementation)
* linkbot (ruby)
* err (python)
* lazlo (golang)
* ohaibot (elixir)

* Linkage
* reddit.com/r/chatops
* Jesse Newland http://jnewland.com/ has a sidebar at the chatops subreddit
* Come and play with Slack in the DevOpsChat public team: http://devopschat.co/
