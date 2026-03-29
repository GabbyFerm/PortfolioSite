import Section from '../layout/Section';
import Squiggle from '../ui/Squiggle';
import { HiWrench, HiPaintBrush, HiSparkles } from 'react-icons/hi2';

export default function Journey() {
  return (
    <Section id="journey" bgColor={2}>
      <div className="journey-grid">
        {/* Block 1: My Journey */}
        <div className="journey-block">
          <div className="section-header">
            <h2>My Journey</h2>
            <Squiggle delay={0.2} />
          </div>
          <p>
            I'm finishing my .NET development studies at NBI Handelsakademin in June 2026, wrapping
            up my final internship and actively looking for my next role — in development, graphic
            design, UI/UX design, or somewhere in between.
          </p>
          <p>
            My path has been anything but straight: ten years as a freelance graphic designer, then
            workwear retail and department leadership, and now a full pivot into tech. Each step has
            taught me something valuable: attention to detail, problem-solving under pressure, and
            how to communicate effectively with different stakeholders.
          </p>
          <p>
            That mix is what I bring to the table. I think about structure and aesthetics at the
            same time. Whether it's a brand identity, a UI, or a codebase — I care about the
            details, the consistency, and how it feels to the person on the other end.
          </p>
          <p>
            What drives me? Building things where great design and solid code go hand in hand. I'm
            looking for a team that values both.
          </p>
        </div>

        {/* Block 2: Who I Am */}
        <div className="journey-block">
          <div className="section-header">
            <h2>Who I Am</h2>
            <Squiggle delay={0.4} />
          </div>
          <p>
            I'm a curious, service-minded problem solver who loves to build things that matter.
            Whether it's designing, coding, crocheting, or hunting for the perfect color palette—I
            approach everything with the same enthusiasm and attention to detail.
          </p>
          <p>
            My strengths? Seeing both the big picture and the small details. I enjoy combining
            strategy with creativity to craft smart solutions, whether for code, design, or people.
            I'm comfortable taking initiative, asking questions, and working collaboratively to
            achieve the best results.
          </p>
          <p>
            I bring energy to teams, stay organized under pressure, and genuinely enjoy the process
            of learning and growing. My background in customer service has made me especially good
            at understanding user needs and translating them into practical solutions.
          </p>
          <p>
            I value clear communication, structured workflows, and workplaces that encourage both
            creativity and technical excellence.
          </p>
        </div>

        {/* Block 3: Experience & Work */}
        <div className="journey-block">
          <div className="section-header">
            <h2>Experience & Work</h2>
            <Squiggle delay={0.6} />
          </div>

          {/* InFiNetCode LIA */}
          <div className="experience-item">
            <h3>
              <HiWrench className="experience-icon" />
              InFiNetCode AB, Göteborg
            </h3>
            <p>
              <strong>.NET/Fullstack Developer (LIA Internship)</strong>
              September - November 2025
            </p>
            <ul className="experience-list">
              <li>Developed Dojo course platform using Clean Architecture</li>
              <li>Implemented OAuth authentication (GitHub, Google) and Stripe payments</li>
              <li>Built APIs with ASP.NET Core, React, TypeScript, and Next.js</li>
              <li>Designed UI/UX in Figma and implemented frontend components</li>
            </ul>
          </div>

          {/* Mercus Workwear */}
          <div className="experience-item">
            <h3>
              <HiWrench className="experience-icon" />
              Mercus Workwear, Göteborg
            </h3>
            <p>
              <strong>Sales Advisor & Department Lead</strong> 2017 - Present
            </p>
            <ul className="experience-list">
              <li>Customer consulting for workwear, PPE, and branded products</li>
              <li>Department responsibility (shoes, decals, PPE)</li>
              <li>Invoice management, quoting, and supplier relationships</li>
              <li>Temp Store Manager (2022-2023): Led daily operations and team</li>
            </ul>
          </div>

          {/* GF Design */}
          <div className="experience-item">
            <h3>
              <HiPaintBrush className="experience-icon" />
              GF Design
            </h3>
            <p>
              <strong>Freelance Graphic Designer</strong> 2006 - 2016
            </p>
            <ul className="experience-list">
              <li>Developed brand identities, logos, and websites</li>
              <li>Focused on user experience and visual communication</li>
              <li>Produced print materials with high precision</li>
            </ul>
          </div>

          {/* Known For */}
          <div className="experience-item">
            <h3>
              <HiSparkles className="experience-icon" />
              Known for:
            </h3>
            <p>
              Strong communication, customer service excellence, problem-solving mindset, and always
              staying one step ahead to deliver exceptional results.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
