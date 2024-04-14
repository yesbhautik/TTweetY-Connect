# TTweetY Connect: Your Social Media Integrator

Hey there! Welcome to the world of TTweetY Connect, where social media meets automation. This project is your one-stop solution for enhancing your social media presence, whether you're a content creator, community manager, or just someone looking to up their social media game. With TTweetY Connect, you can automate the process of creating and managing posts on Telegram, and even directly post content on Twitter, provided it meets Twitter's posting guidelines.

## Features Galore

1. **Multi-Image Posting:** Share up to four images on Twitter, adhering to Twitter's image posting limitations, to amplify engagement and visual storytelling.

2. **Cross-Platform Poll Integration:** Extend your Telegram polls to Twitter by automatically reposting them, ensuring consistent engagement across platforms and maximizing audience participation.

3. **Individual Media Posting:** Share captivating images or videos with optional captions on Twitter to convey your message effectively and engage your audience with compelling visual content.

4. **Text Tweeting:** Broadcast text-based updates or announcements on Twitter to keep your followers informed and engaged with your latest developments or insights.

## Key Features
1. **Intelligent Keyword Filtering**
    - **Content Consideration**: 🧐Add specific keywords that enable the bot to determine which content is earmarked for automation, ensuring only relevant updates are shared across platforms.
    - **Customization at Your Fingertips**: Easily tailor or disable this feature to match your evolving requirements, giving you complete control over your content strategy.

2. **Selective Channel/Group Integration**
    - **Focused Messaging**: 📢 Opt to add specific channel or group IDs, directing the bot to consider messages from these sources exclusively for posting. This feature puts you in the driver's seat, allowing you to decide where your content goes.
    - **Flexibility to Choose**: The power is yours to activate this feature or keep your options open, offering flexibility in how your content is distributed and shared.

3. **Compliance and Validation**
    - **Hassle-Free Posting:** ✅ All restrictions related to posting on Twitter are meticulously checked and validated by default. This ensures your content seamlessly meets platform guidelines.
    - **Real-Time Feedback:** 📣 Should any content fail to meet Twitter's posting criteria, you'll receive an immediate notification on your Telegram group. This prompt feedback loop enables quick adjustments and ensures your content strategy remains uninterrupted.

## Setting Up
#### 🚀 Ready to explore the power of TTweetY Connect? 🤖✨
<br>

Here's a quick guide to get you started:

#### 🐦 **Get Your Twitter API Keys!** 🗝️

1. **Join the Twitter Developer Platform:**  Navigate to the [Twitter Developer Platform](https://developer.twitter.com/en/portal) and sign in or sign up if you haven't already. This platform provides the tools and resources necessary to create and manage your Twitter apps.

2. **Create Your App:** Once logged in, navigate to "Projects & Apps" and select "Create App". You'll be prompted to name your project, describe its purpose, and define its intended use. This step generates the necessary credentials, including Consumer Keys and Access Tokens, which serve as your gateway to Twitter's API. Remember to adjust your User authentication settings before accessing them.

    - **Authorization Permissions:** Choose both read and write access permissions. This ensures that your application can retrieve and modify data as required.

    - **Application Type:** Specify the type of your application as either Web App, Automated App, or Bot. This classification helps the platform understand the nature of your application's interactions.

    - **Additional Information:** In the application information section, include a callback URL and website URL, even if they don't directly impact the bot's functionality. These URLs are necessary for user authentication purposes. Simply add any valid URL to fulfill this requirement.

3. **Access Your Keys and Tokens:** After creating your app, locate the "Keys and tokens" section within your project dashboard. Here, you'll find your Consumer Keys and Access Tokens, which are essential for authenticating your application's access to Twitter's API services. Store them somewhere safe as they will be needed in future.

If you're still unsure about how to access the API key, check out this video [here](https://youtu.be/rIyRrUAsaok?si=g7qg2Anhv9SEm9xK).

#### <u>Create Your Bot with BotFather</u>:

1. **Chat with BotFather:** Open Telegram and search for "[@BotFather](https://t.me/BotFather)" to initiate a chat. BotFather is a special bot provided by Telegram for creating and managing other bots.

2. **Create Your Bot:** In the BotFather chat, type "/newbot" to begin the bot creation process. Follow the prompts to provide a name and username for your bot. Once complete, BotFather will issue you a unique API token, which serves as your bot's authentication key.

#### <u>Integrate Your Bot into the Digital World:</u>:

1. **Add Your Bot to a Group or Channel:** To integrate your bot into a Telegram group or channel, simply search for its username within Telegram and click "Add" to include it in the desired group/channel.

2. **Make Your Bot an Admin:** Manage the group/channel, make your bot an admin, and set permissions.

**For Developers**
Check out the following link to understand the functionality of every function and method of the code, so you can build on it [Documentation](https://yesbhautik365-my.sharepoint.com/:w:/g/personal/vishweshkumar_365_yesbhautik_eu_org/ESCDljfkIzZPuPVDINDrHEMBlHKTP0zsro-c2ymsSLk07w?e=c64it8)

## Prerequisites

Before running the bot, ensure you have the following prerequisites installed:

- Node.js: Make sure you have Node.js installed on your system. You can download it from [here](https://nodejs.org/en/download)

## Run Locally

  1. Clone the project

      ```bash
      git clone https://github.com/yesbhautik/TTweetY-Connect.git
      ```

  2. Go to the project directory
    
      ```bash
      cd TTweetY-Connect
      ```

  3. Install dependencies

      ```bash
      npm i
      ```

  4. Create a .env file from the .env.example file and update the necessary keys and tokens

      ```bash
      cp .env.example .env
      ```

      > Double-check your entries to ensure a smooth and error-free experience.

  5. Start the server

      ```bash
      npm start
      ```

## 📦 Code Distribution

| Features                                              | FREE         | PRIME        |
|-------------------------------------------------------|--------------|--------------|
| Encrypted code (no changes in functionality)           | ✅           | ❌           |
| Reverse Poll (coming soon)    | ❌           | ✅           |
| Prime Support    | ❌           | ✅           |
| Customizable    | ❌           | ✅           |
| Custom features    | ❌           | ✅           |
| Decrypted code    | ❌           | ✅           |
| Regular Updates    | ❌           | ✅           |
| Exclusive API offers    | ❌           | ✅           |
| Commercial allowed license    | ❌           | ✅           |

[![Support us](https://img.shields.io/badge/-Support%20us-blue?style=for-the-badge&logo=razorpay)](https://rzp.io/l/TTweetY-Connect)

## Tech Stack

- **Node.js:** An open-source, cross-platform runtime environment for developing server-side and networking applications.
- **Telegraf.js:** A modern Telegram Bot API library for Node.js that supports middleware, command handling, and more.
- **Twit.js:** A Twitter API Client for Node.js that simplifies the process of interacting with Twitter's API services.
- **dotenv:** A zero-dependency module that loads environment variables from a .env file into process.env.
- **Axios:** A promise-based HTTP client for Node.js that simplifies the process of making asynchronous HTTP requests.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Show some support | Donation

If you find this repository helpful, show your support by giving it a 🌟! Your support means a lot to me and helps me keep contributing to the open-source community.

Also, if you'd like to support & motivate me for hard work, you can do so via my donation link: [https://rzp.io/l/TTweetY-Connect](https://rzp.io/l/TTweetY-Connect)

## Let's Connect

Feel free to reach out to us if you have questions, ideas, or simply want to chat. We're here to help and connect with the community. <br>
[Website](https://yesbhautik.co.in/) | [YesbhautikX](https://yesbhautikx.co.in/) | [LinkedIn](https://www.linkedin.com/in/yesbhautik) | [GitHub](https://github.com/yesbhautik)

## License

This repository is licensed under a [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-nc-sa/4.0/). For more information, see the [LICENSE](LICENSE) file.

## Special Thanks To

**Vishwesh Kumar:** [X (formally Twitter)](https://twitter.com/vvs_1812) | [LinkedIn](https://www.linkedin.com/in/vishwesh-salampuria)
