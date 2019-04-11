(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(23)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),c=n.n(o),i=(n(14),n(1)),l=n(2),u=n(4),s=n(3),m=n(5),p=(n(15),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=Object.values(this.props.content.contact).map(function(e,t){return r.a.createElement("li",{key:"contact_".concat(t)},e)});return r.a.createElement("address",{className:"Contact"},r.a.createElement("h2",null,"Contact Information"),r.a.createElement("ul",null,e))}}]),t}(a.Component)),h=(n(16),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.content.header,t=e.name,n=e.title;return r.a.createElement("header",{className:"Header"},r.a.createElement("h1",null,t),r.a.createElement("h2",null,n),r.a.createElement(p,{content:this.props.content}))}}]),t}(a.Component)),d=(n(17),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.content.summary.map(function(e,t){return r.a.createElement("p",{key:"summary_".concat(t)},e)});return r.a.createElement("section",{className:"Summary"},r.a.createElement("h2",null,"Summary"),r.a.createElement("blockquote",null,e))}}]),t}(a.Component)),E=(n(18),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.content.skills,t=Object.keys(e).map(function(t,n){var a=e[t].map(function(e,t){return r.a.createElement("li",{key:"skillChild_".concat(t)},e)});return r.a.createElement("li",{key:"skillParent_".concat(n)},r.a.createElement("h3",null,t),r.a.createElement("ul",null,a))});return r.a.createElement("section",{className:"Skills"},r.a.createElement("h2",null,"Skills"),r.a.createElement("ul",null,t),r.a.createElement("footer",null,'** Denotes "has had exposure to".'))}}]),t}(a.Component)),y=(n(19),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.content.employment.map(function(e,t){var n=e.duties.map(function(e,t){return r.a.createElement("p",{key:"employmentChild_".concat(t)},e)});return r.a.createElement("li",{key:"employmentParent_".concat(t)},r.a.createElement("hgroup",null,r.a.createElement("h3",null,e.employer),r.a.createElement("h5",null,e.location),r.a.createElement("h5",null,e.dateStart," to ",e.dateEnd),r.a.createElement("h4",null,e.position)),r.a.createElement("div",null,n))});return r.a.createElement("section",{className:"Employment"},r.a.createElement("h2",null,"Employment"),r.a.createElement("ol",null,e))}}]),t}(a.Component)),f=(n(20),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.content.education.map(function(e,t){return r.a.createElement("li",{key:"education_".concat(t)},r.a.createElement("hgroup",null,r.a.createElement("h3",null,e.institution),r.a.createElement("h4",null,e.discipline),r.a.createElement("h5",null,e.graduationYear)))});return r.a.createElement("section",{className:"Education"},r.a.createElement("h2",null,"Education"),r.a.createElement("ol",null,e))}}]),t}(a.Component)),b=(n(21),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.content.projects.map(function(e,t){var n=e.tech.map(function(e,t){return r.a.createElement("li",{key:"projectChild_".concat(t)},e)});return r.a.createElement("li",{key:"projectParent_".concat(t)},r.a.createElement("h3",null,e.name),r.a.createElement("ul",null,n),r.a.createElement("p",null,e.description))});return r.a.createElement("section",{className:"Projects"},r.a.createElement("h2",null,"Projects"),r.a.createElement("ol",null,e))}}]),t}(a.Component)),g={Header:h,Contact:p,Summary:d,Skills:E,Employment:y,Education:f,Projects:b},j={header:{name:"Carlo Ferrer",title:"Full Stack Developer"},contact:{email:"thecarloferrer@gmail.com",phone:"647 331 6441",linkedin:"ca.linkedin.com/in/carloferrer",github:"github.com/carloferrer",location:"Toronto, ON (Downtown)"},summary:["With a desire for forming creative solutions that exceed the pace of the mechanical engineering industry, the transition into the tech industry was only natural.","I'm a proven quick learner, natural problem solver, and obsessed with optimization (e.g., DRY code)."],skills:{Languages:["JavaScript","HTML","CSS/SCSS/SASS","Bash","MATLAB","C","VBA"],"Frameworks & Libraries":["React","Riot","Node","Angular**","TypeScript**"],Testing:["Mocha","Chai","Sinon"],Workflow:["Git","GitHub","JIRA","Google Suite","MS Office Suite"],OS:["macOS","Linux (Ubuntu)","Windows"],"Databases** / Orchestration**":["MongoDB","PostgreSQL","Docker","Kubernetes","GCP"]},employment:[{employer:"GroupBy Inc.",position:"Software Engineer (EIT)",location:"Toronto, ON",dateStart:"Feb 2019",dateEnd:"Apr 2019",duties:["Development (via test driven development) and maintenance of StoreFront, an e-commerce UI component library that is fully integrated with the GroupBy ecosystem/services."]},{employer:"GroupBy Inc.",position:"Front End Consultant",location:"Toronto, ON",dateStart:"Nov 2017",dateEnd:"Feb 2019",duties:["Development and maintenance of the retail experience for an American corporation in the top 10 of the Fortune 500.","Resident expert in the implementation of their user-analytics tracking and loyalty program.","Acting team lead and technical consultant for the loyalty program team; I managed multiple developers as well as the relationship between the client GroupBy"]},{employer:"Consolidated Energy Solutions Inc.",position:"Design Engineer (EIT)",location:"Toronto, ON",dateStart:"Jul 2017",dateEnd:"Sep 2015",duties:["Mechanical design and analysis of HVAC systems for large grocery chains."]},{employer:"GE-Hitachi Nuclear Energy Canada Inc.",position:"Mechanical Engineering Intern",location:"Peterborough, ON",dateStart:"May 2013",dateEnd:"Aug 2014",duties:["Mechanical design and analysis for various equipment in operation at the OPG Darlington the Bruce Power Nuclear Generating Stations."]}],education:[{institution:"Lighthouse Labs",discipline:"Web Development",graduationYear:"2017"},{institution:"Queen's University",discipline:"Mechanical Engineering",graduationYear:"2015 (First Honours)"}],projects:[{name:"about",link:"https://github.com/carloferrer/about",tech:["React","SCSS","gh-pages"],description:"A creative approach toward the distribution and viewing of my own resume."},{name:"fast_tracker",link:"https://github.com/carloferrer/fast_tracker",tech:["mongoDB","Node.js","Express","Bash"],description:"An API and CLI to streamline tracking one\u2019s tasks throughout the day."},{name:"TUNER.",link:"https://github.com/carloferrer/TUNER.",tech:["Spotify API","React","Express","SASS","Knex.js","PostgreSQL"],description:"Social medium to analyze musical compatibility between users.  It can suggest new music to encourage getting to know other users."}]},O=(n(22),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Resume"},r.a.createElement(g.Header,{content:j}),r.a.createElement(g.Summary,{content:j}),r.a.createElement(g.Skills,{content:j}),r.a.createElement(g.Employment,{content:j}),r.a.createElement(g.Education,{content:j}),r.a.createElement(g.Projects,{content:j}))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.07ac7b8d.chunk.js.map