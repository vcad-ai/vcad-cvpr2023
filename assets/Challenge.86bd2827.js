import{_ as h}from"./Container.aa897da9.js";import{_ as f,a as v,b as k}from"./Section.4702f3dc.js";import{_ as u,d as b,E as x,o as g,c as y,a as n,n as m,u as c,i as _,g as w,b as o,w as e,r as d,h as C,e as t}from"./index.412c063b.js";import{_ as D}from"./Title1.9cb1fb04.js";const T={style:{display:"flex","flex-direction":"row","justify-content":"center","align-items":"center",margin:"50px 0px"}},A={style:{"margin-top":"20px"}},$=b({__name:"SectionImage",props:{image:null},setup(l){return(i,p)=>{const r=x,a=f,s=v;return g(),y("div",T,[n(r,{class:m(c(_)()?"mobile2":"pc2"),style:{"border-radius":"5px"},src:c(w)("images/"+l.image),fit:"cover"},null,8,["class","src"]),o("div",{class:m(c(_)()?"mobile":"pc"),style:{display:"flex","align-items":"flex-start","flex-direction":"column","margin-top":"0px"}},[n(a,null,{default:e(()=>[d(i.$slots,"title",{},void 0,!0)]),_:3}),o("div",A,[n(s,null,{default:e(()=>[d(i.$slots,"text",{},void 0,!0)]),_:3})])],2)])}}});var I=u($,[["__scopeId","data-v-5e6ee67e"]]);const P={},M=o("a",{href:"https://opendrivelab.com/e2ead/cvpr23.html",target:"_blank"}," End-to-End Autonomous Driving Workshop",-1),S=o("a",{href:"https://opendrivelab.com/AD23Challenge.html",target:"_blank"}," Joint CVPR2023 Autonomous Driving Challenge Page",-1),V=o("a",{href:"https://opendrivelab.com/AD23Challenge.html#Track1",target:"_blank"},"Read More",-1),E=o("a",{href:"https://opendrivelab.com/AD23Challenge.html#Track2",target:"_blank"},"Read More",-1),R=o("a",{href:"https://opendrivelab.com/AD23Challenge.html#Track3",target:"_blank"},"Read More",-1),B=o("a",{href:"https://opendrivelab.com/AD23Challenge.html#Track4",target:"_blank"},"Read More",-1);function O(l,i){const p=D,r=k,a=I,s=h;return g(),C(s,null,{default:e(()=>[n(p,null,{default:e(()=>[t("Challenges")]),_:1}),n(r,null,{title:e(()=>[]),text:e(()=>[t(" We hold 4 brand-new challenges this year, together with our partners at "),M,t(". For more information, please check out more information at our "),S,t(". ")]),_:1}),n(a,{image:"track1.gif"},{title:e(()=>[t(" Track 1: OpenLane Topology ")]),text:e(()=>[t(" The novel OpenLane-V2 dataset is the perception and reasoning benchmark for scene structure in autonomous driving. Given multi-view images covering the whole panoramic field of view, participants need to deliver not only perception results of lanes and traffic elements but also topology relationships among lanes and between lanes and traffic elements simultaneously. "),V]),_:1}),n(a,{image:"track2.gif"},{title:e(()=>[t(" Track 2: Online HD Map Construction ")]),text:e(()=>[t(" Compared to conventional lane detection, the constructed HD map provides more semantics information with multiple categories. Vectorized polyline representations are adopted to deal with complicated and irregular road structures. Given inputs from onboard sensors (cameras), the goal is to construct the complete local HD map. "),E]),_:1}),n(a,{image:"track3.jpg"},{title:e(()=>[t(" Track 3: 3D Occupancy Prediction ")]),text:e(()=>[t(" Unlike previous perception representations, which depend on predefined geometric primitives or perceived data modalities, occupancy can describe entities in arbitrary shapes. In this track, we provide a large-scale occupancy benchmark. Given multi-view images covering the whole panoramic field of view, participants need to provide the occupancy state and semantics of each voxel in 3D space for the complete scene. "),R]),_:1}),n(a,{image:"track4.png"},{title:e(()=>[t(" Track 4: nuPlan Planning ")]),text:e(()=>[t(" Previous benchmarks focus on short-term motion forecasting and are limited to open-loop evaluation. nuPlan introduces long-term planning of the ego vehicle and corresponding metrics. Docker containers are provided for simulation and evaluation. "),B]),_:1})]),_:1})}var z=u(P,[["render",O]]);export{z as default};
