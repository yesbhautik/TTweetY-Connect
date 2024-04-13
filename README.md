
# TTweetY Connect

Welcome to SocialBot Integrator! This cutting-edge project is your gateway to merging the dynamic world of social media with the magic of automation. Designed for content creators, community managers, and anyone eager to enhance their social media game, SocialBot Integrator is your go-to tool for engaging with your audience. This tool automates the process of Creating and managing the post on the telegram . It provides you the power to directly post the content send on the telegram group / channel if it is under the limitations of the posting on Twitter . 


## features offered 
1. **Multi-Image Posting:** Seamlessly share up to four images on Twitter, adhering to Twitter's image posting limitations, to enhance engagement and visual storytelling.

2. **Cross-Platform Poll Integration:** Effortlessly extend your Telegram polls to Twitter by automatically reposting them, ensuring consistent engagement across platforms and maximizing audience participation.

3. **Individual Media Posting:** Share captivating images or videos with optional captions on Twitter to convey your message effectively and engage your audience with compelling visual content.

4. **Text Tweeting:** Instantly broadcast text-based updates or announcements on Twitter to keep your followers informed and engaged with your latest developments or insights.



 
## Setup
 
🚀 Unlock the Power of SocialBot Integrator! 🤖✨

🔗 Dive in with our easy-to-follow guide! 

Quick Steps to Supercharge Your SocialBot:

🐦 **Snag Your Twitter API Keys!** 🗝️
1. **Join the Flock:**  Navigate to the [Twitter Developer Platform](https://developer.twitter.com/en/portal) and sign in or sign up if you haven't already. This platform provides the tools and resources necessary to create and manage your Twitter apps.
2. **Create & Innovate:** Once logged in, navigate to "Projects & Apps" and select "Create App". Here, you'll be prompted to name your project, describe its purpose, and define its intended use. This step generates the necessary credentials, including Consumer Keys and Access Tokens, which serve as your gateway to Twitter's API .

**Before accessing them** do make changes in User authentication settings 

**Authorization Permissions:** Select the option for both read and write access permissions. This ensures that your application can retrieve and modify data as required.

**Application Type:** Specify the type of your application as either Web App, Automated App, or Bot. This classification helps the platform understand the nature of your application's interactions.

**Additional Information:** In the application information section, include a callback URL and website URL, even if they don't directly impact the bot's functionality. These URLs are necessary for user authentication purposes. Simply add any valid URL to fulfill this requirement.
 

3. **Key to Success:** After creating your app, locate the "Keys and tokens" section within your project dashboard. Here, you'll find your Consumer Keys and Access Tokens, which are essential for authenticating your application's access to Twitter's API services.Just store them somewhere as they will be needed in future 

**Please refer to the following video if you are still confused about how to access the API key.** [here](https://youtu.be/rIyRrUAsaok?si=g7qg2Anhv9SEm9xK)

🤖 Birth Your Bot with BotFather: 👑
1. **Summon BotFather:** Open Telegram and search for "[@BotFather](https://t.me/BotFather)" to initiate a chat. BotFather is a special bot provided by Telegram for creating and managing other bots.
2. **Create Your Bot:** In the BotFather chat, type "/newbot" to begin the bot creation process. Follow the prompts to provide a name and username for your bot. Once complete, BotFather will issue you a unique API token, which serves as your bot's authentication key.

Integrate Your Bot into the Digital World:
1. **Join the Club:** o integrate your bot into a Telegram group or channel, simply search for its username within Telegram and click "Add" to include it in the desired group/channel.
2. **Elevate to Admin:** Manage the group/channel, make your bot an admin, and set permissions.


🔧**For Developers**
 The following is the link to understand the functionality of every function and method of the code . So that you can build on it   [Documentation](https://yesbhautik365-my.sharepoint.com/:w:/g/personal/vishweshkumar_365_yesbhautik_eu_org/ESCDljfkIzZPuPVDINDrHEMBlHKTP0zsro-c2ymsSLk07w?e=c64it8) 
## Environment Variables 
🌟 Get Your Project Up & Running in No Time! 🚀

To kickstart your journey, make sure to create a  .env file in the same directory not in any  folder  . Refer the examples.env file for a sample :

1. **TELEGRAM_BOT_TOKEN**:Paste the unique token provided by [@Botfather](https://t.me/BotFather)

2. **TWITTER_API_KEY**=
3. **TWITTER_API_SECRET**=
4. **TWITTER_ACCESS_TOKEN**= 
5. **TWITTER_ACCESS_SECRET**=
   
**All the above api keys and tokens to be pasted from the location saved while setting up the application**

7. **BOT_TRIGGERED_KEYWORD**=
Specify the keyword which you want to be checked in every message for trigeering the bot 

8. **BOT_TRIGGERED_KEYWORD_ENABLED**=
If set to true then only it will check for keyword before trigeering every message to post on twitter . (Will remove the keyword before posting ). If set false then no need to add the trigger keyword anytime 

9. **GROUP_RESTRICTION**= If set true the bot will consider the group id's to check if the group is allowed to post the message on twitter or not . If not set will ignore the groups restriction 
You can enable or disable the group restriction as per the need.
 
8. **ALLOWED_GROUPS** =
Provide comma seperated group Id's whose posting are to be considered to post on the twitter .

Refer to the examples.env file for any confusion 

🔑 Set These Up Right: Double-check your entries to ensure a smooth and error-free experience.

💡 Pro Tip: Keep your keys and tokens confidential to protect your bot from uninvited guests.


## Prerequisites
Before running the bot, ensure you have the following prerequisites installed:

Node.js: Make sure you have Node.js installed on your system. You can download it from [here](https://nodejs.org/en/download) and then install it
## Run Locally

Create a folder 
Open the terminal and add the following commands to it 
Clone the project

```bash
 git clone https://github.com/YesbhautikX/Vishwesh-TestNet.git
```

Go to the project directory

```bash
  cd Vishwesh-TestNet
```

Install dependencies

```bash
  npm i
```

Start the server

Do ensure that .env file is created and updated with the necessary required Keys and tokens 

```bash
  npm start
```


## Key Features
1. **Intelligent Keyword Filtering** 
**Content Consideration:** 🧐Add specific keywords that enable the bot to determine which content is earmarked for automation, ensuring only relevant updates are shared across platforms.

**Customization at Your Fingertips:** Easily tailor or disable this feature to match your evolving requirements, giving you complete control over your content strategy.

2. **Selective Channel/Group Integration**
**Focused Messaging:** 📢 Opt to add specific channel or group IDs, directing the bot to consider messages from these sources exclusively for posting. This feature puts you in the driver's seat, allowing you to decide where your content goes.

**Flexibility to Choose:** The power is yours to activate this feature or keep your options open, offering flexibility in how your content is distributed and shared.

3. **Compliance and Validation**
**Hassle-Free Posting:** ✅ All restrictions related to posting on Twitter are meticulously checked and validated by default. This ensures your content seamlessly meets platform guidelines.

**Real-Time Feedback:** 📣 Should any content fail to meet Twitter's posting criteria, you'll receive an immediate notification on your Telegram group. This prompt feedback loop enables quick adjustments and ensures your content strategy remains uninterrupted.


## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](www.linkedin.com/in/vishwesh-salampuria)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/vvs_1812)

