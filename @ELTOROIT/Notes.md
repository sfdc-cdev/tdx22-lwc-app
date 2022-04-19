# Scratch Org notes

```
sfdx force:org:create -f config/project-scratch-def.json --setdefaultusername --setalias soBearTDX22 -d 1
sfdx force:org:open
sfdx force:source:push
sfdx force:user:permset:assign --permsetname Ursus_Park_User
sfdx force:data:tree:import -p data/plan.json
```
