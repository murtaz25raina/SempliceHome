import "./qa.css";
import Questsion from './question';
const questions = [
    {
        question :"What is the main difference between Single, Studio and Business Edition?",
        answer:"The Single and Studio editions are valid for one domain. As you can compare above, the Studio Edition comes with additional features such as Advanced Portfolio Grids, Blocks, the Before/After module and more. The Business Edition includes all features of the Studio Edition, but with additional licenses. You can upgrade your edition at any time."
    },
    {
        question :"What is your refund policy?",
        answer:"Due to the nature of our product, we’re currently unable to offer a refund. You’re buying Semplice as is, so be sure to check the requirements for  WordPress before you purchase."
    },
    {
        question :"Do I get access to all the code with Semplice?",
        answer:"Yep. Semplice is built on top of WordPress, which gives you access to all files and code. That means you're free to modify it as much as you want. We encourage it."
    },
    {
        question :"Does Semplice offer a monthly subscription?",
        answer:"No, we do not currently offer a subscription service. The beauty of Semplice is that you pay once and it's yours forever."
    },
    {
        question :"On how many websites can I use Semplice?",
        answer:"If you've purchased the Single or Studio Edition, your license will work on ONE domain (1 domain = 1 website) only. If you want use Semplice for multiple websites, you either need to purchase multiple licenses, or purchase the Business Edition which is valid for 10 domains."
    },
    {
        question :"What type of support are you providing?",
        answer:"We’re not providing direct support at this time; that's the only that way we can keep prices low and offer Semplice as a one-time-payment product."
    },
    {
        question :"Do I need to buy the WordPress Business Plan to use Semplice?",
        answer:"No! You do NOT need to pay for Wordpress to use Semplice. Wordpress.org (not to be confused with Wordpress.com, their hosting service) is free. You can install Semplice for free on Wordpress.org without a Wordpress Business subscription."
    },
    {
        question :"What browsers are supported?",
        answer:"On desktop: The two latest, stable versions of Chrome, Microsoft Edge and Firefox. Also Safari 10.1 and newer. On mobile: iOS10 and newer on devices 4.7 or larger, running the two latest stable versions of Chrome and Firefox. Safari 10 and newer. Android 7.0 (Nougat) and newer on devices 4.7 or larger, running the two latest stable versions of Chrome."
    },
    {
        question :"What do I need to run Semplice on my server?",
        answer:"You need to have WordPress installed. These are the requirements to run WordPress: WordPress 4.6 or higher PHP 5.3 or greater MySQL 5.6+ or greater OR MariaDB 10.0+ The mod_rewrite Apache module More information from Wordpress: "
    },
    {
        question :"Is Semplice multi-language compatible? (WPML, Polylang)",
        answer:"Unfortunately, Semplice is not compatible with multilanguage plugins such as WPML or Polylang right now."
    },
    {
        question :"What if I have more questions?",
        answer:<p>That's totally cool! You can always check our <a href='https://help.semplice.com/hc/en-us'>Documentation Center</a> or ask a question via <a href='mailto:help@semplicelabs.com'>help@semplice.com</a></p>
    }
]
const Qa = () => {
  return (
    <div className="qa-container">
      <div className="qa-heading">Q&A</div>
      { questions.map((q)=>{
        return(
            <Questsion question={q.question} answer={q.answer} />
        )
      })}
    </div>
  );
};

export default Qa;
