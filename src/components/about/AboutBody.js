import React from "react";
import MemberCard from "./MemberCard";

export default function AboutBody() {
  const teamMember1 = {
    image: "https://i.ibb.co/YRsXDL1/Screen-Shot-2022-11-17-at-12-47-58-PM.png",
    name: "Teana",
    title: "CEO Software Engineer",
    instagramLink: "https://www.instagram.com/",
    gitHubLink: "https://github.com/ic2505",
  };

  const teamMember2 = {
    image: "https://i.ibb.co/pwxCCJB/Screen-Shot-2022-11-16-at-8-02-54-PM.png",
    name: "ilker イケさん",
    title: "CTO Software Engineer",
    instagramLink: "https://www.instagram.com/ilkerciliv/",
    gitHubLink: "https://github.com/ic2505",
  };

  const teamMember3 = {
    image: `https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/299984696_5393330917421324_7919848564436041700_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=fwV8FRBncQ0AX-nv7Fh&tn=4RLgjH6_r_GYwMml&_nc_ht=scontent-lga3-2.xx&oh=00_AfAUjoYbiZh0AVCiRt-P6NSQRJrhZ5v0gwvDaGVPcliB4w&oe=637AA08A`,
    name: "Colleen Cabedo",
    title: "CTO Software Engineer",
    instagramLink: "https://www.instagram.com/ilkerciliv/",
    gitHubLink: "https://github.com/ic2505",
  };

  return (
    <div>
      <h1 className="flex justify-center mt-10 text-xl font-bold">
        {"TEAM MEMBERS"}
      </h1>
      <div className="flex justify-center mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          <MemberCard teamMember={teamMember1} />
          <MemberCard teamMember={teamMember2} />
          <MemberCard teamMember={teamMember3} />
        </div>
      </div>
    </div>
  );
}
