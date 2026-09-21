---
status: accepted
---

# English at the root, Portuguese at its own path

The site's primary reader is a recruiter hiring for a remote role from outside
Brazil. Language was held in browser storage, so the server rendered Portuguese
every time: a link pasted into an application opened in Portuguese for
everyone regardless of who sent it, and the English copy — written and
maintained by hand — had never been served to a crawler at all. The two
languages become two server-rendered routes, English at the root and Portuguese
at its own path, each declaring the other as an alternate.

## Considered options

- **Keep the storage toggle, default it to English.** Cheapest, and it fixes
  nothing that matters: a shared link still cannot carry a language, and a
  crawler still only ever sees one.
- **Negotiate on `Accept-Language`.** Looks clever, behaves badly. It confuses
  crawlers and it fights the reader who deliberately wants the other version.
- **Drop Portuguese.** Gives up the Brazilian market to save work that is
  already done and already paid for.

## Consequences

Two URLs must be kept in parity by hand, which is why a parity test exists.
Each route ships only its own copy, which removes roughly half the copy from
the client bundle as a side effect.

The premise — that the primary reader is international — is an assumption, not
an observation. Visitor measurement was added in the same body of work for
exactly this reason. If the split turns out to be overwhelmingly Brazilian,
this is the decision to reopen, and the root language is the thing to change.
