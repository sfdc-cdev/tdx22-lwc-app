# Ursus Park sample app for Trailhead project (TDX22 Version)

Project adapted from [Build Flexible Apps with Lightning Web Components](https://trailhead.salesforce.com/content/learn/projects/lwc-build-flexible-apps)

![Project Completed](https://res.cloudinary.com/hy4kyit2a/f_auto,fl_lossy,q_70/learn/projects/lwc-build-flexible-apps/hello-world/images/52cbc90ceba46df033d2f2d58154caff_cjqss-8-vv-900190-w-9-zs-0-erkzc-8.png)

# Instructions

## Get a new Trailhead playground org

1. Login to [Trailhead](https://trailhead.salesforce.com/)
2. Navigate to the challenge section of [this trail](https://trailhead.salesforce.com/content/learn/projects/lwc-build-flexible-apps/hello-world#challenge)
    - If you have already completed this trail, click "Retake Step"
3. Create a **new** Trailhead Playground Org
4. Once the new org is created, launch it.
5. Navigate to the **Playground Starter** app, and go to the **Get Your Login Credentials** tab
6. Take note of your **username**
7. Click on the **Reset My Password** button
8. Once you receive the confirmation email, follow the instructions there and reset the password.

## Setup your local environment

1. Open a command prompt, such as cmd on Windows or Terminal on MacOS.
2. Clone this git repository by typing this command

```
git clone https://github.com/sfdc-cdev/tdx22-lwc-app.git
```

3. Change directory to _tdx22-lwc-app_

```
cd tdx22-lwc-app
```

4. Checkout the master branch

```
git checkout master
```

5. Open VS Code

```
code .
```

6. Open the terminal window inside VS Code
7. Authorize your trailhead playground to SFDX

```
sfdx auth:web:login -s -a bear-tracking
```

8. When a browser window with the Salesforce login page opens, enter your Trailhead Playground credentials that we set in a previous step
9. Deploy the metadata to the org.

```
sfdx force:source:deploy -p force-app/main/default
```

10. Assign the Ursus Park User permission set to the current user.

```
sfdx force:user:permset:assign -n Ursus_Park_User
```

11. Import the sample data.

```
sfdx force:data:tree:import -p data/plan.json
```

12. Switch to the **Ursus Park** app

Continue with the badge [here](https://trailhead.salesforce.com/content/learn/projects/lwc-build-flexible-apps/hello-world#create-a-hello-world-lightning-web-component-with-static-html)
