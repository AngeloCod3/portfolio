import './About.scss';
import aboutImg from '../../assets/intro.jpg';

const About = () => {
  return (
    <div className='about-container'>
        <div className="about-left">
            <div className="a-card">
                <img src={aboutImg} alt="About me" className="a-img" />
            </div>
            <div className="a-card bg">
            
            </div>
            
        </div>
        <div className="about-right">
            <h2>About me</h2>
            <p>I started learning about programming when I was 12, when PHP was into the HTML, Dreamviewer, Flash and Fireworks were the Adobe set. My very first programming language was PHP, I did make hundreds of web sites for friends and HabboFan web sites, I did recieved some money from it (Habbo coins if you like to count it as a payment lol). Then 2013 came, I was 17 and went to college, I have to say it was the worst time in my life, I shortly left college, I hated it. Then I move on for a while to another country were I could improve my English. So since 2014 to 2019 I left the whole programming and tech world (yep college did that). I cameback to the end of 2019, I was completly lost about anything, JavaSript had like 1230918238 frameworks, everybody hates PHP and Java, and Python was the most love language. So here I am learning everyday, I still doing Freelancer jobs, I why not may I go into a good company where I can develop my skills. By the way, did I say I love React? </p>
        </div>

    </div>
  )
}

export default About