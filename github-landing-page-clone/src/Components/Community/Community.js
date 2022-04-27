import React from "react";

import "./Community.scss";
import JessFazellePhoto from "../../assets/images/hero.jpg";
import ReadMore from "../ReadMore/ReadMore";

function Community() {
  return (
    <div className="community" data-testid="community">
      <span className="community__miniTitle">Community</span>
      <h2 className="community__title">Welcome home, developers</h2>
      <p className="community__para">
        GitHub is home to the world's largest community of developers and their
        projects...
      </p>

      <div className="community__cards">
        <ReadMore
          img="https://customer-stories-feed.github.com/customer_stories/freakboy3742/hero.jpg"
          title="Russell Keith-Magee"
          subtitle="Russell Keith-Magee created BeeWare to fill a gap in his own process. Today, BeeWare is the go-to project for supporting Python on ..."
        />
        <ReadMore
          img="https://customer-stories-feed.github.com/customer_stories/kris-nova/hero.jpg"
          title="Kris Nova"
          subtitle="Kris Nova quickly developed a passion for open source software. Now she gets to work on open source tooling at her day job."
        />
        <ReadMore
          img="https://customer-stories-feed.github.com/customer_stories/yyx990803/hero.jpg"
          title="Evan You"
          subtitle="In 2013, Evan You founded Vue, a Javascript framework funded by the community on Patreon. In 2016, Vue reached 2,000,000 downloads."
        />
        <ReadMore
          img={JessFazellePhoto}
          title="Jess Frazelle"
          subtitle="Jess Frazelle works on Kubernetes full-time. Previously she maintained Docker, a software containerization platform used by thousands of teams."
        />
      </div>

      <p className="community__para">
        ...whether you're making your first commit or sending a Rover to Mars,
        there's room for you here, too.
      </p>
    </div>
  );
}

export default Community;
