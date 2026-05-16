Notification System



How it works:



Frontend shows notifications

Backend gets notifications from API

Logger saves logs

What it has:



Frontend



Shows all notifications

Shows important notifications only

Marks seen and unseen

Filter by type

Backend



Gets notifications from API

Gets logs from API

Handles login

Logger

Logs things like:



Where (frontend/backend)

How big (debug/info/warn/error/fatal)

What part (api/component/page/auth...)

How it works step by step:



Frontend asks for notifications

Backend asks API

API sends notifications back

Frontend shows them

User clicks one

It gets marked as seen

Logger saves what happened

